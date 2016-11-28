$(document).ready(function(){

    $(".main-header__icon-menu--open").click(function () {
        $(".main-header__navigation-list").stop().slideToggle(500);
        $(".main-header__icon-menu--open").stop().toggle(150);
        $(".main-header__icon-menu--close").stop().toggle(150);
    });

    $(".main-header__icon-menu--close").click(function () {
        $(".main-header__navigation-list").stop().slideToggle(500);
        $(".main-header__icon-menu--open").stop().toggle(150);
        $(".main-header__icon-menu--close").stop().toggle(150);
    });

});