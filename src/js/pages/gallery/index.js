import initSliders, { initNavSlider } from "./sliders.js";
import { log, error, debug } from "../../../../repo/js/libs/logger.js";

window.addEventListener("DOMContentLoaded", onLoaded);

let catalogueItemIdx = 0;
const catalogue = [
	{
		"idx": () => catalogueItemIdx++,
		"folderName": "8 БМП",
		"images": [
			{
        "name": "01-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/01-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/01-2.png"
      },
      {
        "name": "01.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/01.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/01.png"
      },
      {
        "name": "02-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/02-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/02-2.png"
      },
      {
        "name": "02.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/02.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/02.png"
      },
      {
        "name": "03-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/03-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/03-2.png"
      },
      {
        "name": "03.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/03.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/03.png"
      },
      {
        "name": "04-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/04-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/04-2.png"
      },
      {
        "name": "04.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/04.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/04.png"
      },
      {
        "name": "05-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/05-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/05-2.png"
      },
      {
        "name": "05.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/05.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/05.png"
      },
      {
        "name": "06-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/06-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/06-2.png"
      },
      {
        "name": "06.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/06.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/06.png"
      },
      {
        "name": "07-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/07-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/07-2.png"
      },
      {
        "name": "07.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/07.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/07.png"
      },
      {
        "name": "08-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/08-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/08-2.png"
      },
      {
        "name": "08.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/08.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/08.png"
      },
      {
        "name": "09-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/09-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/09-2.png"
      },
      {
        "name": "09.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/09.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/09.png"
      },
      {
        "name": "10-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/10-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/10-2.png"
      },
      {
        "name": "10.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/10.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/10.png"
      },
      {
        "name": "11-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/11-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/11-2.png"
      },
      {
        "name": "11.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/11.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/11.png"
      },
      {
        "name": "12-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/12-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/12-2.png"
      },
      {
        "name": "12.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/12.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/12.png"
      },
      {
        "name": "13-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/13-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/13-2.png"
      },
      {
        "name": "13.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/13.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/13.png"
      },
      {
        "name": "14-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/14-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/14-2.png"
      },
      {
        "name": "14.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/14.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/14.png"
      },
      {
        "name": "15-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/15-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/15-2.png"
      },
      {
        "name": "15.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/15.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/15.png"
      },
      {
        "name": "16-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/16-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/16-2.png"
      },
      {
        "name": "16.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/16.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/16.png"
      },
      {
        "name": "17-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/17-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/17-2.png"
      },
      {
        "name": "17.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/17.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/17.png"
      },
      {
        "name": "18-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/18-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/18-2.png"
      },
      {
        "name": "18.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/18.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/18.png"
      },
      {
        "name": "19-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/19-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/19-2.png"
      },
      {
        "name": "19.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/19.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/19.png"
      },
      {
        "name": "20-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/20-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/20-2.png"
      },
      {
        "name": "20.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/20.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/20.png"
      },
      {
        "name": "21-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/21-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/21-2.png"
      },
      {
        "name": "21.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/21.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/21.png"
      },
      {
        "name": "22-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/22-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/22-2.png"
      },
      {
        "name": "22.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/22.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/22.png"
      },
      {
        "name": "23-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/23-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/23-2.png"
      },
      {
        "name": "23.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/23.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/23.png"
      },
      {
        "name": "24-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/24-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/24-2.png"
      },
      {
        "name": "24.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/24.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/24.png"
      },
      {
        "name": "25-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/25-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/25-2.png"
      },
      {
        "name": "25.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/25.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/25.png"
      },
      {
        "name": "26-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/26-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/26-2.png"
      },
      {
        "name": "26.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/26.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/26.png"
      },
      {
        "name": "27-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/27-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/27-2.png"
      },
      {
        "name": "27.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/27.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/27.png"
      },
      {
        "name": "28-2.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/28-2.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/28-2.png"
      },
      {
        "name": "28.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/28.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/28.png"
      },
      {
        "name": "29.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/29.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/29.png"
      },
      {
        "name": "30.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/30.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/30.png"
      },
      {
        "name": "31.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/31.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/31.png"
      },
      {
        "name": "32.png",
        "mainUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/32.png",
        "thumbUrl": "https://museumdefence.ru/digitalarchive/11%20%d0%b4%d0%b7%d0%be%d1%82/32.png"
      }
		],
	},
	{
		"idx": () => catalogueItemIdx++,
		"folderName": "11 дзот",
		"images": [
			{
				"name": "Название файла 2",
				"mainUrl": "img/static/archive/big-vertical.jpg",
				"thumbUrl": "img/static//archive/thumbs/02.jpg",
			},
			{
				"name": "Название файла 1",
				"mainUrl": "img/static/archive/big-horizontal.jpg",
				"thumbUrl": "img/static//archive/thumbs/01.jpg",
			},
		],
	},
	{
		"idx": () => catalogueItemIdx++,
		"folderName": "18 ОБМП",
		"images": [
			{
				"name": "Название файла 1",
				"mainUrl": "img/static/archive/big-horizontal.jpg",
				"thumbUrl": "img/static//archive/thumbs/01.jpg",
			},
			{
				"name": "Название файла 2",
				"mainUrl": "img/static/archive/big-vertical.jpg",
				"thumbUrl": "img/static//archive/thumbs/02.jpg",
			},
		],
	},
	{
		"idx": () => catalogueItemIdx++,
		"folderName": "Бронепоезд железняков",
		"images": [
			{
				"name": "Название файла 1",
				"mainUrl": "img/static/archive/big-horizontal.jpg",
				"thumbUrl": "img/static//archive/thumbs/01.jpg",
			},
			{
				"name": "Название файла 2",
				"mainUrl": "img/static/archive/big-vertical.jpg",
				"thumbUrl": "img/static//archive/thumbs/02.jpg",
			},
		],
	}
];
function MainGallery() {
	this.$wrapper = $("#main-slider .swiper-wrapper");
	this.template = $("#main-gallery-content-template").html();
	Mustache.parse(this.template);
}
((proto) => {
	proto.render = function(data) {
		this.$wrapper.html(Mustache.render(this.template, data));
	}
})(MainGallery.prototype);

function MainGalleryThumbs() {
	this.$wrapper = $("#thumbs-slider .swiper-wrapper");
	this.template = $("#main-gallery-thumbs-content-template").html();
	Mustache.parse(this.template);
}
((proto) => {
	proto.render = function(data) {
		this.$wrapper.html(Mustache.render(this.template, data));
	}
})(MainGalleryThumbs.prototype);

function NavGallery(mainGallery, mainGalleryThumbs) {
	this.activeFolderIdx = null;
	this.swiper = initNavSlider();
	this.mainGallery = mainGallery;
	this.mainGalleryThumbs = mainGalleryThumbs;
	this.$wrapper = $("#nav-slider .swiper-wrapper");
	this.template = $("#nav-gallery-content-template").html();
	Mustache.parse(this.template);
}
((proto) => {
	proto.render = function(data) {
		this.data = data;
		this.$wrapper.html(Mustache.render(this.template, { folders: data }));
	}
	proto.renderGallery = function(data) {
		this.mainGallery.render(data);
		this.mainGalleryThumbs.render(data);
	}
	proto.setActiveFolderByIdx = function(idx) {
		if (this.activeFolderIdx === idx) return;
		if (this.activeFolderIdx !== null) {
			this.$activeFolderSelect.removeClass("gallery-folder-select_active");
		}
		this.activeFolderIdx = idx;
		this.$activeFolderSelect = this.$wrapper.children().eq(idx);
		this.$activeFolderSelect.addClass("gallery-folder-select_active");
		this.renderGallery(this.data[idx]);
	}
	proto.init = function(data) {
		this.render(data);
		this.setActiveFolderByIdx(0);
		this.$wrapper.on("click", (event) => {
			const selectRootElem = event.target.closest(".gallery-folder-select");
			if (!selectRootElem) return;
			this.setActiveFolderByIdx(selectRootElem.getAttribute("data-idx"));
		});
	}
})(NavGallery.prototype);

function initBackBtn() {
	$("#back-btn").click((event) => {
		if (history.length) {
			event.preventDefault();
			history.back();
		}
	});
}

async function onLoaded() {
	initBackBtn();
	initSliders();
	const mainGallery = new MainGallery();
	const mainGalleryThumbs = new MainGalleryThumbs();
	const navGallery = new NavGallery(mainGallery, mainGalleryThumbs);
	try {
		const response = await fetch("media/catalogue.json");
		const catalogue = await response.json();
		catalogue.forEach((folderData, idx) => folderData.idx = idx);
		navGallery.init(catalogue);
	} catch(ex) {
		console.log("Catalogue index cannot be loaded", ex);
	}
}
