/*==========================================
Copyrights reserved : Mohamed ali ben slimen 
===========================================*/
/**************************************************
 * L'acceuil
 *************************************************/

/**************************************************
 * Le reste de la page
 *************************************************/
$("body").ready(function() {
    $("#signup").hide();
    $("#login").hide();
    $("#omra").hide();
    $("#selection").hide();
    $("#familles").hide();
    $("#couples").hide();
    $("#sud").hide();
    $("#nord").hide();
    $("#euro").hide();
    $("#cote").hide();


    $(".selec").click(function() {
        $("#signup").hide();
        $("#login").hide();
        $("#omra").hide();
        $(".info").hide();
        $("#selection").show();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();



    });

    $(".om").click(function() {
        $("#signup").hide();
        $("#selection").hide();
        $("#login").hide();
        $("#omra").show();
        $(".info").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();

    });
    $(".log").click(function() {
        $("#login").show();
        $("#signup").hide();
        $(".info").hide();
        $("#omra").hide();
        $("#selection").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
    });
    $(".sign").click(function() {
        $("#signup").show();
        $("#login").hide();
        $(".info").hide();
        $("#omra").hide();
        $("#selection").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
    });
    $(".fam").click(function() {
        $("#signup").hide();
        $("#login").hide();
        $(".info").hide();
        $("#omra").hide();
        $("#selection").hide();
        $("#familles").show();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
    });
    $(".cp").click(function() {
        $("#signup").hide();
        $("#login").hide();
        $(".info").hide();
        $("#omra").hide();
        $("#selection").hide();
        $("#familles").hide();
        $("#couples").show();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
    });
    $(".sd").click(function() {
        $("#signup").hide();
        $("#login").hide();
        $(".info").hide();
        $("#omra").hide();
        $("#selection").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").show();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
    });
    $(".nd").click(function() {
        $("#signup").hide();
        $("#login").hide();
        $(".info").hide();
        $("#omra").hide();
        $("#selection").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").show();
        $("#euro").hide();
        $("#cote").hide();
    });
    $(".eur").click(function() {
        $("#signup").hide();
        $("#login").hide();
        $(".info").hide();
        $("#omra").hide();
        $("#selection").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").show();
        $("#cote").hide();
    });

    $(".cot").click(function() {
        $("#signup").hide();
        $("#login").hide();
        $(".info").hide();
        $("#omra").hide();
        $("#selection").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").show();
    });

});