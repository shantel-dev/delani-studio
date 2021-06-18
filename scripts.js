$(document).ready(function() {

    $("#design").click(function(){
      $("#design-showing").toggle();
      $(".hide-design-icon").toggle();
    });
  
    $("#development").click(function(){
      $("#development-showing").toggle();
      $(".hide-development-icon").toggle();
    });
  
    $("#productManagement").click(function(){
      $("#product-management-showing").toggle();
      $(".hide-product-management-icon").toggle();
    });
});  