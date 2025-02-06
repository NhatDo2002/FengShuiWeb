var arrayImg = [
    {
        src: "/Assets/Images/section2-first.jpg"
    },
    {
        src: "/Assets/Images/section2-second.jpg"
    },
    {
        src: "/Assets/Images/section2-third.jpg"
    },
    
]
var globalImgTop;


$(document).ready(function () {
    var $image = $("#side-image");
    globalImgTop = $image.offset().top;
    console.log(globalImgTop)
    $(window).on("scroll", function () {
        var $image = $("#side-image");
        var scrollTop = $(window).scrollTop(); // Vị trí cuộn của cửa sổ
        if (scrollTop >= globalImgTop) {
            $image.addClass("make-fixed");
        } else {
            $image.removeClass("make-fixed");
        }
    });

    $(window).on("scroll", function () {
        var $image = $("#side-image");
        var imgTop = $image.offset().top; // Vị trí ban đầu của ảnh
        var scrollTop = $(window).scrollTop(); // Vị trí hiện tại của cuộn
        var lastSection = $("#last-section");
        var lastSectionTop = lastSection.offset().top; // Vị trí của last-section
        var windowHeight = $(window).height(); // Chiều cao màn hình
        var lastSectionVisible = lastSectionTop - scrollTop <= windowHeight; // Kiểm tra nếu nó chạm đáy

        if (scrollTop >= imgTop && !lastSectionVisible) {
            $image.addClass("make-fixed").removeClass("stop-image");
        } else if (lastSectionVisible) {
            $image.removeClass("make-fixed").addClass("stop-image");
        } else {
            $image.removeClass("make-fixed stop-image");
        }
    });

    var headerPart2 = $("#part2");
    var headerPart3 = $("#part3");


    $(window).on("scroll", function () {
        var headerPart2Top = headerPart2.offset().top;
        var headerPart3Top = headerPart3.offset().top;
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= headerPart2Top && scrollTop < headerPart3Top) {
            $($image).attr("src",arrayImg[1].src);
        } else if (scrollTop >= headerPart3Top) {
            $($image).attr("src", arrayImg[2].src);
        } else {
            $($image).attr("src", arrayImg[0].src);
        }
    });
});

