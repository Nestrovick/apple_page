$(document).ready(function() {
    let cartCount = 0;

    $('.addToCart').click(function() {
        cartCount++;
        $('#cartCounter').text(cartCount);
    });
});
