import { log, error, debug } from "../../../../repo/js/libs/logger.js";

window.addEventListener("DOMContentLoaded", onLoaded);

const tracks = [
	{
		name: "Track 1",
		trackId: "1",
		imgUrl: "img/static/archive/track-img.jpg",
		imgThumbUrl: "img/static/archive/track-img-thumb.jpg",
	},
	{
		name: "Track 2",
		trackId: "2",
		imgUrl: "img/static/archive/track-img.jpg",
		imgThumbUrl: "img/static/archive/track-img-thumb.jpg",
	},
	{
		name: "Track 3",
		trackId: "3",
		imgUrl: "img/static/archive/track-img.jpg",
		imgThumbUrl: "img/static/archive/track-img-thumb.jpg",
	}
];

function TrackList() {
	this.$root = $("#track-list");
	this.template = $("#audioguide-list-items-template").html();
	Mustache.parse(this.template);
}
((proto) => {
	proto.render = function(data) {
		this.$root.html(Mustache.render(this.template, data));
	}
})(TrackList.prototype);

function initCloseDrawersOnResize() {
	const close = ({ matches }) => {
		drawers.get("main-menu").close();
	}
	const mediaMatch = window.matchMedia("(max-width: 1260px)");
	mediaMatch.addListener(close);
}


function onLoaded() {
	const trackList = new TrackList();
	trackList.render({ tracks });
	initCloseDrawersOnResize();
}
