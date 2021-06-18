$(document).ready(function(){
    $("#design").click(function() {
        $("#design-showing").toggle();
        $(".hide-design-logo").toggle();
    });

    $("#development").click(function(){
        $("#development-showing").toggle();
        $(".hide-development-logo").toggle();
    });
});