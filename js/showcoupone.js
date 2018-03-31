$(document).ready(function () {

    // target to give background to
    var $div = document.getElementById("show-cop");
    // rgb vals of the gradients
    var gradients = [
        // {start: [196, 69, 120], stop: [196, 69, 120]},
        {start: [128, 179, 171], stop: [30, 41, 58]},
        {start: [255, 207, 160], stop: [234, 92, 68]},
        {start: [212, 121, 121], stop: [250, 50, 15]},
        {start: [255, 207, 160], stop: [130, 105, 151]},
        // {start: [128, 179, 171], stop: [30, 41, 58]},
        // {start: [255, 207, 160], stop: [234, 92, 68]},
        // {start: [212, 121, 121], stop: [130, 105, 151]}
    ];
    // how long for each transition
    var transition_time = 2;

    // internal type vars
    var currentIndex = 0; // where we are in the gradients array
    var nextIndex = 1; // what index of the gradients array is next
    var steps_count = 0; // steps counter
    var steps_total = Math.round(transition_time * 60); // total amount of steps
    var rgb_steps = {
        start: [0, 0, 0],
        stop: [0, 0, 0]
    }; // how much to alter each rgb value
    var rgb_values = {
        start: [0, 0, 0],
        stop: [0, 0, 0]
    }; // the current rgb values, gets altered by rgb steps on each interval
    var prefixes = ["-webkit-", "-moz-", "-o-", "-ms-", ""]; // for looping through adding styles
    var div_style = $div.style; // short cut to actually adding styles
    var color1, color2;

    // sets next current and next index of gradients array
    function set_next(num) {
        return (num + 1 < gradients.length) ? num + 1 : 0;
    }

    // work out how big each rgb step is
    function calc_step_size(a, b) {
        return (a - b) / steps_total;
    }

    // populate the rgb_values and rgb_steps objects
    function calc_steps() {
        for (var key in rgb_values) {
            if (rgb_values.hasOwnProperty(key)) {
                for (var i = 0; i < 3; i++) {
                    rgb_values[key][i] = gradients[currentIndex][key][i];
                    rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i], rgb_values[key][i]);
                }
            }
        }
    }

    // update current rgb vals, update DOM element with new CSS background
    function updateGradient() {
        // update the current rgb vals
        for (var key in rgb_values) {
            if (rgb_values.hasOwnProperty(key)) {
                for (var i = 0; i < 3; i++) {
                    rgb_values[key][i] += rgb_steps[key][i];
                }
            }
        }

        // generate CSS rgb values
        var t_color1 = "rgb(" + (rgb_values.start[0] | 0) + "," + (rgb_values.start[1] | 0) + "," + (rgb_values.start[2] | 0) + ")";
        var t_color2 = "rgb(" + (rgb_values.stop[0] | 0) + "," + (rgb_values.stop[1] | 0) + "," + (rgb_values.stop[2] | 0) + ")";

        // has anything changed on this interation
        if (t_color1 != color1 || t_color2 != color2) {

            // update cols strings
            color1 = t_color1;
            color2 = t_color2;

            // update DOM element style attribute
            div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from(" + color1 + "), to(" + color2 + "))";
            for (var i = 0; i < 4; i++) {
                div_style.backgroundImage = prefixes[i] + "linear-gradient(45deg, " + color1 + ", " + color2 + ")";
            }
        }

        // we did another step
        steps_count++;
        // did we do too many steps?
        if (steps_count > steps_total) {
            // reset steps count
            steps_count = 0;
            // set new indexs
            currentIndex = set_next(currentIndex);
            nextIndex = set_next(nextIndex);
            // calc steps
            calc_steps();
        }

        if (div_style.backgroundImage.indexOf("gradient") != -1) {
            window.requestAnimationFrame(updateGradient)
        }
    }

    // initial step calc
    calc_steps();

    // go go go!
    window.requestAnimationFrame(updateGradient);


    $('.price_holder > .price').bind("DOMSubtreeModified", function () {
        ChangeCouponeDetail();
    });
    ChangeCouponeDetail();
});

function ChangeCouponeDetail() {
    var coupone_summ = 0;
    var price = $('.price_holder > .price').text();
    price = price.replace(" ", "");
    price = price.replace(",", ".");
    price = parseFloat(price);
    if (isNaN(price)) {
        return;
    }
    //console.log(price);
    if (price < 3000)
        coupone_summ = 100;
    if (price >= 3000 & price < 6000)
        coupone_summ = 200;
    if (price >= 6000 & price < 10000)
        coupone_summ = 500;
    if (price >= 10000 & price < 13000)
        coupone_summ = 700;
    if (price >= 13000 & price < 16000)
        coupone_summ = 900;
    if (price >= 16000 & price < 20000)
        coupone_summ = 1000;
    if (price >= 20000 & price < 25000)
        coupone_summ = 1500;
    if (price >= 25000 & price < 30000)
        coupone_summ = 2000;
    if (price >= 13000)
        coupone_summ = 3000;
    $("#show-cop .line31").html(coupone_summ);
}

// $(document).ready(function () {
//     $('div.cart-total').bind("DOMSubtreeModified", function () {
//         ChangeCouponeDetail();
//     });
//     ChangeCouponeDetail();
// });
// function ChangeCouponeDetail() {
//     var for_coupone_total = $('div.cart-total').text().replace(" ", "");
//     //console.log(parseInt(for_coupone_total));
//     for_coupone_total = Math.round(parseInt(for_coupone_total) / 100 * 5);
//     var label_text = "Купон на сумму:";
//     var value_text = for_coupone_total + " <span class=\"ruble\">Р</span>";
//     var show_coupone = true;
//     if (for_coupone_total < 30) {
//         //label_text = "";
//         //value_text = "";
//         show_coupone = false;
//     }
//     $("#showcouponelabel").html(label_text);
//     $("#showcouponevalue").html(value_text);
//     if (show_coupone)
//         $("#showcoupon").show();
//     else
//         $("#showcoupon").hide();
// }
