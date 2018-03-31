$(document).ready(function () {
    $('div.cart-total').bind("DOMSubtreeModified", function () {
        ChangeCouponeDetail();
    });
    ChangeCouponeDetail();

});

function ChangeCouponeDetail() {
    var for_coupone_total = $('div.cart-total').text().replace(" ","");
    console.log(parseInt(for_coupone_total));
    for_coupone_total = Math.round(parseInt(for_coupone_total) / 100 * 5);
    var label_text = "Купон на сумму:";
    var value_text = for_coupone_total + " <span class=\"ruble\">Р</span>";
    var show_coupone = true;
    if (for_coupone_total < 30) {
        //label_text = "";
        //value_text = "";
        show_coupone = false;
    }
    $("#showcouponelabel").html(label_text);
    $("#showcouponevalue").html(value_text);
    if (show_coupone)
        $("#showcoupon").show();
    else
        $("#showcoupon").hide();

}
