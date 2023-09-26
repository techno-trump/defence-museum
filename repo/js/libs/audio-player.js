import { log } from "./logger.js";
import { getTargetElem } from "./utils.js";
import { debounce } from "./debounce.js";
import { throttle } from "./throttle.js";
import { isMobile } from "./functions.js";
import EventEmitter from "./EventEmitter.js";

const mobileMode = isMobile.any();
const rootClassName = "audio-player";
const trackListRootClassName = "audio-player-track-list";
const activeTrackClassName = `${trackListRootClassName}__item_active`;
	log("mobileMode::", mobileMode);

export function PlayerTrackList(target, player) {
	this.rootElem = getTargetElem(target);
	this.currentTrackIdx = null; // Во внутреннем сортированном списке он же будет соответствовать индексу элемента в DOM дереве
	this.player = player;
	this.listTemplate = `{{#tracks}}
												<li class="audio-player-track-list__item hoverable" data-track-id="{{trackId}}">
													{{name}}
												</li>
											{{/tracks}}`;
	Mustache.parse(this.listTemplate);

	const trackClickHandler = throttle((event) => {
		const trackRootElem = event.target.hasAttribute("data-track-id") ? event.target : event.target.closest(`${trackListRootClassName}__item`);
		if (!trackRootElem) return;
		const trackId = trackRootElem.getAttribute("data-track-id");
			log("TrackID:: ", trackId);
		if (this.selectTrackById(trackId)) {
			if (mobileMode || event.type === "dblclick") {
				this.playSelectedTrack();
			}
		}
	}, 100);

	this.rootElem.addEventListener("click", trackClickHandler);
	this.rootElem.addEventListener("dblclick", trackClickHandler);

	this.player.on("toNextTrack", () => this.nextTrack());
	this.player.on("toPrevTrack", () => this.prevTrack());
	this.player.on("ended", () => this.playNextTrack());
}
((proto) => {
	proto.loadTracks = function(tracks) {
		this.originalTracks = tracks;
		this.sortedTracks = this.originalTracks.slice(0);
		this.render(this.sortedTracks);
		this.nextTrack();
	}
	proto.render = function(tracks) {
		this.rootElem.innerHTML = Mustache.render(this.listTemplate, { tracks });
	}
	proto.nextTrack = function() {
		const nextTrackIdx = this.getNextTrackIdx();
			log("nextTrack::nextTrackIdx ", nextTrackIdx);
		if (!this.player.playerElem.paused) {
			this.player.pause();
			if (this.selectTrackByIdx(nextTrackIdx)) this.player.play();
		} else {
			this.selectTrackByIdx(nextTrackIdx);
		}
	}
	proto.prevTrack = function() {
		const prevTrackIdx = this.getPrevTrackIdx();
			log("prevTrack::prevTrackIdx ", prevTrackIdx);
		if (!this.player.playerElem.paused) {
			this.player.pause();
			if (this.selectTrackByIdx(prevTrackIdx)) this.player.play();
		} else {
			this.selectTrackByIdx(prevTrackIdx);
		}
	}
	proto.playNextTrack = function() {
		const nextTrackIdx = this.getNextTrackIdx();
			log("nextTrack::playNextTrack ", nextTrackIdx);
		if (nextTrackIdx === this.currentTrackIdx) { // Перезагружаем крайний трек без дальнейшего проигрывания
			this.player.playerElem.currentTime = 0;
			this.player.playerElem.load();
		} else {
			if (!this.player.playerElem.paused) {
				this.player.pause();
			}
			if (this.selectTrackByIdx(nextTrackIdx)) this.player.play();
		}; 
	}
	proto.playPrevTrack = function() {
	}
	proto.selectTrackById = function(trackId) {
		const trackIdx = this.sortedTracks.findIndex((track) => track.trackId === trackId);
		return this.selectTrackByIdx(trackIdx);
	}
	proto.selectTrackByIdx = function(trackIdx) {
		if (!~trackIdx) return false;
		if (this.currentTrackIdx === trackIdx) return true;
		if (!this.player.playerElem.paused) this.player.pause();
		let trackElem = this.rootElem.children[this.currentTrackIdx];
		if (trackElem instanceof HTMLElement) {
			trackElem.classList.remove(activeTrackClassName);
		}
		this.currentTrackIdx = trackIdx;
		trackElem = this.rootElem.children[trackIdx];
		if (trackElem instanceof HTMLElement) {
			trackElem.classList.add(activeTrackClassName);
		}
		this.player.loadTrack(this.sortedTracks[trackIdx]);
		return true;
	}
	proto.getNextTrackIdx = function() {
		let nextTrackIdx = this.currentTrackIdx === null || this.currentTrackIdx < 0 ? 0 : this.currentTrackIdx + 1;
		return nextTrackIdx >= this.sortedTracks.length ? this.sortedTracks.length - 1 : nextTrackIdx;
	}
	proto.getPrevTrackIdx = function() {
		let prevTrackIdx = this.currentTrackIdx === null || this.currentTrackIdx < 1 ? 0 : this.currentTrackIdx - 1;
		return prevTrackIdx >= this.sortedTracks.length ? this.sortedTracks.length - 1 : prevTrackIdx;
	}
	proto.playSelectedTrack = function() {
			log("playSelectedTrack");
		this.player.play();
	}
})(PlayerTrackList.prototype);

export class AudioPlayer extends EventEmitter {
	constructor(target) {
		super();
		this.rootElem = getTargetElem(target);
		this.playerElem = this.rootElem.querySelector("audio");
		this.sourceElem = this.rootElem.querySelector(`.${rootClassName}__source`);
		this.currentTrackImgElem = this.rootElem.querySelector(`.${rootClassName}__img > img`);
		this.currentTrackNameElem = this.rootElem.querySelector(`.${rootClassName}__track-name`);
		this.currentTrack = {};
		this.controlElems = {
			volume: this.rootElem.querySelector(`.${rootClassName}__volume-control`),
			progress: this.rootElem.querySelector(`.${rootClassName}__progress-control`),
			prevTrack: this.rootElem.querySelector(`.${rootClassName}__prev-track-btn`),
			nextTrack: this.rootElem.querySelector(`.${rootClassName}__next-track-btn`),
			play: this.rootElem.querySelector(`.${rootClassName}__play-btn`),
			pause: this.rootElem.querySelector(`.${rootClassName}__pause-btn`),
			progressTimer: this.rootElem.querySelector(`.${rootClassName}__progress-timer`),
		};

		// Volume control
		this.controlElems.volume.value = this.playerElem.volume * 100;
		this.controlElems.volume.dispatchEvent(new Event("input"));

		this.controlElems.volume.addEventListener("input", () => {
			this.playerElem.volume = this.controlElems.volume.value / 100;
		});
		// Play Btn Click
		this.controlElems.play.addEventListener("click", () => {
			this.play();
		});
		// Pause Btn Click
		this.controlElems.pause.addEventListener("click", () => {
			this.pause();
		});
		// Prev track btn Click
		this.controlElems.prevTrack.addEventListener("click", () => {
			this.emit("toPrevTrack");
		});
		// Next track btn Click
		this.controlElems.nextTrack.addEventListener("click", () => {
			this.emit("toNextTrack");
		});
		// Update progress bar and time
		this.playerElem.addEventListener("timeupdate", () => {
			if (this.playerElem.paused || this.seeking || isNaN(this.playerElem.duration)) return;
			this.controlElems.progressTimer.textContent = formatSeconds(this.playerElem.currentTime);
			this.controlElems.progress.value = this.playerElem.currentTime / this.playerElem.duration * 100;
			const event = new Event("input");
			event.__timeupdate = true;
			this.controlElems.progress.dispatchEvent(event);
		});
		// To next track on playback end
		this.playerElem.addEventListener("ended", () => {
			this.emit("ended");
		});
		// Seek control
		const debouncedSeeking = debounce(() => {
			this.playerElem.currentTime = this.playerElem.duration * this.controlElems.progress.value / 100;
			this.play();
		}, 100);
		this.controlElems.progress.addEventListener("input", (event) => {
			if (event.__timeupdate || isNaN(this.playerElem.duration)) return;
				log(" Seek control :: input");
			if (!this.paused) {
				this.pause();
			}
			debouncedSeeking();
		});
	}
	play(track) {
			log("play:: ", this.playerElem.src, this.playerElem.readyState);
		if (track !== undefined) {
			this.loadTrack(track);
		}
		if (this.playerElem.src) {
			this.playerElem.play();
		}
	}
	loadTrack(track) {
		this.currentTrackImgElem.src = track.imgUrl;
		this.currentTrackNameElem.textContent = track.name;
		this.playerElem.src = track.fileUrl;
		this.sourceElem.src = track.fileUrl;
		this.playerElem.load();
	}
	pause() {
		if (this.playerElem.played) this.playerElem.pause();
	}
}

function formatSeconds(sec) {
	const hours = sec / 3600 ^ 0;
	const minutes = sec % 3600 / 60 ^ 0;
	const seconds = sec % 3600 % 60 ^ 0;
	const withoutHours = `${formatTimePart(minutes)}:${formatTimePart(seconds)}`;
	return hours > 0 ? `${formatTimePart(hours)}:${withoutHours}` : withoutHours;
}
function formatTimePart(value) {
	return value < 10 ? `0${value}` : value;
}