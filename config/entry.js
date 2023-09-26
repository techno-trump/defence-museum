function getEntryPoints (base = "", mode) {
	return {
		"common": [`${base}/js/common/index.js`, `${base}/scss/common/index.scss`],
		"gallery": [`${base}/js/pages/gallery/index.js`, `${base}/scss/pages/gallery/index.scss`],
		"audio-guide": [`${base}/js/pages/audio-guide/index.js`, `${base}/scss/pages/audio-guide/index.scss`],
		"audio-guide-player": [`${base}/js/pages/audio-guide-player/index.js`, `${base}/scss/pages/audio-guide-player/index.scss`],
	};
}
export default getEntryPoints;