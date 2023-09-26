import { initRangeInputCustomStyle } from "../../../../repo/js/libs/rangeInputCustomStyle.js";
import { AudioPlayer, PlayerTrackList } from "../../../../repo/js/libs/audio-player.js";

import { log, error, debug } from "../../../../repo/js/libs/logger.js";

const tracks = [
	{
		name: "Track 1",
		trackId: "1",
		imgUrl: "img/static/archive/track-img.jpg",
		imgThumbUrl: "img/static/archive/track-img-thumb.jpg",
		fileUrl: "media/anivar_-_zachem-bez-lyubvi.mp3",
	},
	{
		name: "Track 2",
		trackId: "2",
		imgUrl: "img/static/archive/track-img.jpg",
		imgThumbUrl: "img/static/archive/track-img-thumb.jpg",
		fileUrl: "media/anivar_-_zachem-bez-lyubvi.mp3",
	},
	{
		name: "Track 3",
		trackId: "3",
		imgUrl: "img/static/archive/track-img.jpg",
		imgThumbUrl: "img/static/archive/track-img-thumb.jpg",
		fileUrl: "media/anivar_-_zachem-bez-lyubvi.mp3",
	}
];

window.addEventListener("DOMContentLoaded", onLoaded);

function onLoaded() {
	initRangeInputCustomStyle();
	const player = new AudioPlayer("#main-audio-player");
	const trackList = new PlayerTrackList("#main-player-track-list", player);
	trackList.loadTracks(tracks);
	const trackIdToSelect = new URL(location.href).searchParams.get("track-id");
	if (trackIdToSelect !== null) {
		trackList.selectTrackById(trackIdToSelect);
	}
}
