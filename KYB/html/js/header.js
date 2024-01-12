$(function (){

    var $header=$('header');
    $(window).scroll(function (){
        if ($(this).scroll()>0) {
            $header.addClass('sticky');
        }else {
            $header.removeClass('sticky');
        }
    });





})