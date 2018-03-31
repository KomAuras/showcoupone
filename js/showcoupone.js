$(document).ready(function () {
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
