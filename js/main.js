/*Menu anim*/
let pageHeaderNavWrapperTablet = document.querySelector(".page-header__nav-wrapper-tablet")
let menuButton = document.querySelector(".menu-button");
let buttonTopLine = document.querySelector(".menu-button__top-line");
let buttonMiddleLine = document.querySelector(".menu-button__middle-line");
let buttonBottomLine = document.querySelector(".menu-button__bottom-line");

menuButton.addEventListener("click", function() {
	pageHeaderNavWrapperTablet.classList.toggle("bg-nav-onclick-btn")
    buttonTopLine.classList.toggle("menu-button__top-line-anim");
    buttonMiddleLine.classList.toggle("menu-button__middle-line-anim");
    buttonBottomLine.classList.toggle("menu-button__bottom-line-anim");
})

/*Slider*/
let sliderImg = document.querySelector(".slider__image");
let sliderDots = document.querySelectorAll(".slider__dot");
let sliderImgArr = ["img/map.svg.png", "img/htmlacademy.svg.png", "img/iphone-6.png"];
let currentIndex = 0;

function DotSlide(index) {
	currentIndex = index;
	SetActiveDot(currentIndex)
	SetImg(currentIndex);
}

function ArrowSlide(direction) {
	currentIndex += direction;

	if(currentIndex >= sliderImgArr.length){
		currentIndex = 0;
	} else if (currentIndex < 0){
		currentIndex = sliderImgArr.length - 1
	}

	SetImg(currentIndex);
	SetActiveDot(currentIndex);
}

function SetActiveDot(index) {

	for(let dot of sliderDots) {
		dot.classList.remove("active");
	}

	sliderDots[index].classList.add("active");
}

function SetImg (index) {
	sliderImg.src = sliderImgArr[index];
}


