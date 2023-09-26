import { log, error, debug } from "../../../../repo/js/libs/logger.js";

export function initNavSlider() {
		log("initNavSlider");
	new Swiper("#nav-slider", {
		observer: true,
		resizeObserver: true,
		slidesPerView: "auto",
		grabCursor: true,
		spaceBetween: 24,
		navigation: {
			nextEl: '#nav-slider-next-btn',
			prevEl: '#nav-slider-prev-btn',
		},
	});
}
function initMainSlider(thumbsSlider) {
		log("initMainSlider");
	new Swiper("#main-slider", {
		observer: true,
		resizeObserver: true,
		slidesPerView: 1,
		grabCursor: true,
		spaceBetween: 20,
		navigation: {
			nextEl: '#main-slider-next-btn',
			prevEl: '#main-slider-prev-btn',
		},
		thumbs: {
			swiper: thumbsSlider,
		}
	});
}
function initThumbsSlider() {
		log("initMainSlider");
	return new Swiper("#thumbs-slider", {
		observer: true,
		resizeObserver: true,
		observeParents: true,
		slidesPerView: "auto",
		grabCursor: true,
		spaceBetween: 20,
		navigation: {
			nextEl: '#thumbs-slider-next-btn',
			prevEl: '#thumbs-slider-prev-btn',
		},
	});
}

export default function initSliders() {
	initMainSlider(initThumbsSlider());
}