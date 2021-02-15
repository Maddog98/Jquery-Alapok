$(function () {
    //$("#kezd").click(init);
    $("#kezd").on("click", init);
    //  init();

});

function init() {
    //$("div").eq(0).append("IDe <p>írd</p>");
    //alert($("div").text("Ide írd"));

//    for (var i = 0; i < 5; i++) {
//        $("#jatekter").append("<img src='kep.png' alt='kepecske'>");
//    }
    $("#jatekter").empty();
    for (var i = 0; i < 5; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        //$("#jatekter img").eq(i).attr("src" ,"kep.png");
        //$("#jatekter img").eq(i).attr("alt" ,"kep.png");
        $("#jatekter div img").eq(i).attr({"src": "kep.png", "alt": "kartya"});
    }

    $("#jatekter div").css({"background-color": "red", "padding": "2%"});

    $("#jatekter div").mouseenter(
            function () {
                $(this).css({"background-color": "gray", "padding": "2%"});
            }
    );
    $("#jatekter div").mouseleave(
            function () {
                $(this).css({"background-color": "black", "padding": "2%"});
            }
    );
    $("#jatekter div").click()(
            function () {
                $(this).hide(1000);
                $(this).show(1000);
            }
    );
}