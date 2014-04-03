/*app.js*/

var $;
var console;

function panel() {
    
    "use strict";

    if ($("#panel").hasClass("cbp-spmenu-open")) {

        $("#panel").removeClass('cbp-spmenu-open');

    } else {

        $("#panel").addClass('cbp-spmenu-open');

    }
}

$("#toggle").click(function () {
    
    "use strict";

    $(this).data('clicked', true);
    console.log('panel hide');

    $("#panel").removeClass('cbp-spmenu-open');

});

$('body').on("swipeleft", function (event) {
    
    "use strict";

    console.log('swipe left');
    $("#panel").removeClass('cbp-spmenu-open');

});

$('body').on("swiperight", function (event) {
    
    "use strict";

    console.log('swipe right');
    $("#panel").addClass('cbp-spmenu-open');

});
