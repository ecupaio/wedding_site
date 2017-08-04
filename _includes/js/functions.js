$(document).ready(function() {
$('.menu-item').click(function(e) {
    e.preventDefault();
    var selectedSection = $(this).attr('href');
    $(selectedSection).siblings().removeClass('active');
    $(selectedSection).addClass('active');
});

$('.panel-overlay').click(function() {

    $(this).parent().siblings().find('.panel-overlay.active').removeClass('active');
    $(this).toggleClass('active');

});
var all = document.getElementsByTagName("*"), i = 0, rect;
for (; i < all.length; i++) {
    rect = all[i].getBoundingClientRect();
    if (rect.right < 0) all[i].style.outline = "1px solid red";
}


});
