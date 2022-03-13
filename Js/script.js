$(document).ready(function() {
    $("#design").click(function() {
        $("#design").hide();
        $("#design-text").show();
    });
    $("#design-text").click(function() {
        $("#design-text").hide();
        $("#design").show();
    });
});
$(document).ready(function() {
    $("#development").click(function() {
        $("#development").fadeIn("1000").hide("1000");
        $("#development-text").show();
    });
    $("#development-text").click(function() {
        $("#development-text").hide("1000");
        $("#development").show();
    });
});