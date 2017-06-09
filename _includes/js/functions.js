$(document).ready(function() {
    $('.menu-item').click(function(e) {
        e.preventDefault();
        var selectedSection = $(this).attr('href');
        $(selectedSection).siblings().removeClass('active');
        $(selectedSection).addClass('active');
    });
});
