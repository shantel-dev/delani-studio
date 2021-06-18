$(document).ready(function(){
    $("#design").click(function() {
        $("#design-showing").toggle();
        $(".hide-design-logo").toggle();
    });

    $("#development").click(function(){
        $("#development-showing").toggle();
        $(".hide-development-logo").toggle();
    });
    $("#productmanagement").click(function(){
        $("#product-management-showing").toggle();
        $(".hide-product-management-logo").toggle();
    });
});