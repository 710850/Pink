$(document).ready(function(){


    $("#price1").click(function(){
        $(".cost__slider-inner").stop().animate({
            left: "0"
        }, 600)
    });


    $("#price2").click(function(){
        $(".cost__slider-inner").stop().animate({
            left: "-100%"
        }, 600)
    });



    $("#price3").click(function(){
        $(".cost__slider-inner").stop().animate({
            left: "-200%"
        }, 600)
    });


});

