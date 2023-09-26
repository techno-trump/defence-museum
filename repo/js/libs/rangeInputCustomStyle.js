import { log } from "./logger.js";
import { throttle } from "./throttle.js";

export function initRangeInputCustomStyle() {
	const elements = document.querySelectorAll("input[type='range']");
	const recalcProgress = throttle((elem) => {
		const minValue = +elem.getAttribute("min");
		const maxValue = +elem.getAttribute("max");
		const currentValue = elem.value;
		const progress = (currentValue - minValue) / (maxValue - minValue) * 100;
		elem.style.setProperty("--progress", `${progress}%`);
	}, 25);
	const inputHandler = (event) => {
		recalcProgress(event.currentTarget);
	};
	elements.forEach(elem => {
		elem.addEventListener("input", inputHandler);
		recalcProgress(elem);
	});
}