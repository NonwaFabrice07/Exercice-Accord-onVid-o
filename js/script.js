$(document).ready(function(){
    $("#button1").click(function(){
        $("#video2, #video3, #video4").slideUp();
        $("#video1").slideToggle();
    });

    $("#button2").click(function(){
        $("#video1, #video3, #video4").slideUp();
        $("#video2").slideToggle();
    });

    $("#button3").click(function(){
        $("#video2, #video1, #video4").slideUp();
        $("#video3").slideToggle();
    });

    $("#button4").click(function(){
        $("#video2, #video3, #video1").slideUp();
        $("#video4").slideToggle();
    });
})