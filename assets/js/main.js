/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid');
	}
	else{
		$('#site-nav').removeClass('navbar-solid');
	}
}

/*
 * SmoothScroll
*/

/*
 * Colapse menu on click
*/

$(document).ready(function(){
    $(".navbar-collapse li").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });
});
