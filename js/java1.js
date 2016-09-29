$(document).ready(function(){
    $('#main_option').click(function(){
        $('.second_option_style1').show();
    });
    $('#main_option2').click(function(){
        $('.second_option_style2').show();
    });
    $('#main_option3').click(function(){
        $('.second_option_style3').show();
    });
});





function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

