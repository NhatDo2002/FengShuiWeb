var globalImgTop;

$(document).ready(function () {
    var $image = $("#side-image");
    globalImgTop = $image.offset().top;
    $(window).on("scroll", function () {
        var $image = $("#side-image");
        var scrollTop = $(window).scrollTop(); // Vị trí cuộn của cửa sổ
        console.log(scrollTop, globalImgTop)
        if (scrollTop >= globalImgTop) {
            $image.addClass("make-fixed");
        } else {
            $image.removeClass("make-fixed");
        }
    });
});

