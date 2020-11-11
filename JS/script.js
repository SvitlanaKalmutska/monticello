$(document).ready(function(){
$('.news__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
});
});

$(document).ready(function(){
		$("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1500);
	});
});

