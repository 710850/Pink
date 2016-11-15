$(document).ready(function(){
    var slideWidth=300;
    var sliderTimer;
    $(function(){
        $('.comment__slidewrapper').width($('.comment__slidewrapper').children().size()*slideWidth);
        sliderTimer=setInterval(nextSlide,1000);
        $('.viewport').hover(function(){
            clearInterval(sliderTimer);
        },function(){
            sliderTimer=setInterval(nextSlide,1000);
        });
    });

    function nextSlide(){
        var currentSlide=parseInt($('.comment__slidewrapper').data('current'));
        currentSlide++;
        if(currentSlide>=$('.comment__slidewrapper').children().size())
        {
            currentSlide=0;
        }
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
    }
});

