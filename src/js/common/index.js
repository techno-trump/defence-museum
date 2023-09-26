import "../../../repo/components/drawers/index.js";
import initOnHoverAnimationFinalization from "../../../repo/js/libs/onHoverAnimationFinalization.js";
import { isMobile } from "../../../repo/js/libs/functions.js";
import { log, error, debug } from "../../../repo/js/libs/logger.js";


window.addEventListener("DOMContentLoaded", onLoaded);

function onLoaded() {
	try {
		drawers.init();
		initMarkOnScroll();
		addIsMobileClass();
		closeMenuOnItemClick();
	} catch (ex) {
		error(ex);
	}
}
function closeMenuOnItemClick() {
	const navElem = document.querySelector(".header-nav");
	navElem.addEventListener("click", (event) => {
		if (event.target.classList.contains("header-link")) {
			drawers.close("main-menu");
		}
	});
}
function addIsMobileClass() {
	if (isMobile.any()) {
		document.documentElement.classList.add("is-mobile");
	}
}
function initMarkOnScroll() {
	document.addEventListener("scroll", () => {
		if (window.scrollY > 80) {
			document.documentElement.classList.add("scroll-80-plus");
		} else {
			document.documentElement.classList.remove("scroll-80-plus");
		}
	});
}