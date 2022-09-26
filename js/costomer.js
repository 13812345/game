var txt_price=$('.price');
var price=txt_price.text();
var conversion=parseFloat(price);
function minplus(direction,tag){
    var tag=$(tag);
    var box_tedad=tag.parents('.number-box');
    var min=box_tedad.find('.minus');
    var plus=box_tedad.find('.plus');
    var txt_number=box_tedad.find('.number-2');
    var number=txt_number.val();
    var total_price;
    var intnumber=parseFloat(number);
    if(direction=='plus'){
            intnumber += 1;
    }
    if(direction=='min'){
            intnumber -= 1;
    }
    total_price = conversion * intnumber;
    txt_price.text(total_price);
    txt_number.text(intnumber);
}