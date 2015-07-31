$(document).ready(function(){
    $(".drop-icon").click(function(){
        $(this).parent().parent().parent().find(".moving-div").slideToggle();
    });
});
