/*app.js*/
"use strict" // _jsapi;

function panel() {

    if ($("#panel").hasClass("cbp-spmenu-open")) {

        $("#panel").removeClass('cbp-spmenu-open');

    } else {

        $("#panel").addClass('cbp-spmenu-open');

    }
}

$("#toggle").click(function () {

    $(this).data('clicked', true);
    console.log('panel hide');

    $("#panel").removeClass('cbp-spmenu-open');

});

$('body').on("swipeleft", function (event) {

    console.log('swipe left');
    $("#panel").removeClass('cbp-spmenu-open');

});

$('body').on("swiperight", function (event) {

    console.log('swipe right');
    $("#panel").addClass('cbp-spmenu-open');

});

