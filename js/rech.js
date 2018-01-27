$("#cho").empty();

$("#cho").append($("<option>omra</option>"));
$("#cho").append($("<option>tunv</option>"));
$("#cho").append($("<option>sélection des hotels</option>"));
$("#cho").append($("<option>hotels pour familles</option>"));
$("#cho").append($("<option>hotels pour couples</option>"));
$("#cho").append($("<option>nord de la tunisie</option>"));
$("#cho").append($("<option>sud de la tunisie</option>"));
$("#cho").append($("<option>cote de la tunisie</option>"));
$("#cho").append($("<option>promotions pour les mariées</option>"));
$("#cho").append($("<option>promotions pour les enfants</option>"));
$("#cho").append($("<option>promotions vacance d'été</option>"));
$("#cho").append($("<option>promotions ramadan</option>"));
$("#cho").append($("<option>destination europe</option>"));
$("#cho").append($("<option>destination amérique de sud</option>"));
$("#cho").append($("<option>destination asie</option>"));
$("#cho").append($("<option>destination afrique</option>"));



$('.search1').click(function() {

    var search = form.search.value;

    if (search == "omra") {

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
        window.location.href = '#omra';
    } else if (search == "sélection des hotels") {

        $("#signup").hide();
        $("#selection").show();
        $("#login").hide();
        $("#omra").hide();
        $(".info").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
        window.location.href = '#selection';
    } else if (search == "hotels pour familles") {

        $("#signup").hide();
        $("#selection").hide();
        $("#login").hide();
        $("#omra").hide();
        $(".info").hide();
        $("#familles").show();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
        window.location.href = '#familles';
    } else if (search == "hotels pour couples") {

        $("#signup").hide();
        $("#selection").hide();
        $("#login").hide();
        $("#omra").hide();
        $(".info").hide();
        $("#familles").hide();
        $("#couples").show();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
        window.location.href = '#couples';
    } else if (search == "nord de la tunisie") {

        $("#signup").hide();
        $("#selection").hide();
        $("#login").hide();
        $("#omra").hide();
        $(".info").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").show();
        $("#euro").hide();
        $("#cote").hide();
        window.location.href = '#nord';
    } else if (search == "sud de la tunisie") {

        $("#signup").hide();
        $("#selection").hide();
        $("#login").hide();
        $("#omra").hide();
        $(".info").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").show();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
        window.location.href = '#sud';
    } else if (search == "destination europe") {

        $("#signup").hide();
        $("#selection").hide();
        $("#login").hide();
        $("#omra").hide();
        $(".info").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").show();
        $("#cote").hide();
        window.location.href = '#euro';
    } else if (search == "tunv") {

        $("#signup").hide();
        $("#selection").hide();
        $("#login").hide();
        $("#omra").hide();
        $(".info").show();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").hide();
        window.location.href = '#';
    } else if (search == "cote de la tunisie") {

        $("#signup").hide();
        $("#selection").hide();
        $("#login").hide();
        $("#omra").hide();
        $(".info").hide();
        $("#familles").hide();
        $("#couples").hide();
        $("#sud").hide();
        $("#nord").hide();
        $("#euro").hide();
        $("#cote").show();
        window.location.href = '#cote';
    } else {
        alert("choix invalid réessayer : il faut sélectionner de la liste");
    }




});