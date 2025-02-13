var arrayContent = [
    {
        name: '<span class="box-background">Phong Thủy Nhà Ở</span>',
        des: "Phong thủy nhà ở giúp tạo ra không gian sống hài hòa, thu hút tài lộc và cải thiện sức khỏe gia đình. Các yếu tố quan trọng gồm hướng nhà, bố trí nội thất, màu sắc và vật phẩm phong thủy.",
        img: "/Assets/Images/section3-1.jpg"
    },
    {
        name: '<span class="box-background">Phong Thủy Văn Phòng & Kinh Doanh</span>',
        des: "Áp dụng phong thủy trong văn phòng giúp tăng hiệu suất làm việc, thúc đẩy tài lộc và sự phát triển bền vững của doanh nghiệp. Các yếu tố quan trọng gồm vị trí bàn làm việc, hướng cửa chính và cách sắp xếp không gian.",
        img: "/Assets/Images/section3-2.jpg"
    },
    {
        name: '<span class="box-background">Phong Thủy Bàn Làm Việc</span>',
        des: "Sắp xếp bàn làm việc theo phong thủy giúp tăng cường sự tập trung, sáng tạo và thu hút vận may trong công việc. Yếu tố quan trọng gồm hướng ngồi, cách bài trí vật dụng và cây xanh phong thủy..",
        img: "/Assets/Images/section3-3.jpg"
    },
    {
        name: '<span class="box-background">Phong Thủy Sức Khỏe</span>',
        des: "Phong thủy có thể giúp cải thiện sức khỏe bằng cách cân bằng năng lượng trong không gian sống. Việc tối ưu ánh sáng, không khí lưu thông và sử dụng màu sắc phù hợp có thể giúp tăng cường sức khỏe thể chất và tinh thần.",
        img: "/Assets/Images/section3-4.jpg"
    },
    {
        name: '<span class="box-background">Phong Thủy Tình Duyên & Hôn Nhân</span>',
        des: "Phong thủy có thể ảnh hưởng đến đường tình duyên và hạnh phúc gia đình. Việc sử dụng các vật phẩm như hồ lô, cặp uyên ương hoặc bố trí phòng ngủ đúng phong thủy có thể giúp cải thiện mối quan hệ và giữ gìn hạnh phúc.",
        img: "/Assets/Images/section3-5.jpg"
    },

]

var arrayImg = [
    {
        src: "/Assets/Images/section2-first.jpg"
    },
    {
        src: "/Assets/Images/section2-fourth.gif"
    },
    {
        src: "/Assets/Images/section2-third.jpg"
    },
    
]
var globalImgTop;
var currentImageSrc = ""; // Lưu trữ ảnh hiện tại

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
        var lastSection = $("#part3");
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
    var headerPart4 = $("#last-section");
    var headerPart1 = $("#part1");
    var headerPart5 = $("#part5");


    $(window).on("scroll", function () {
        var getNavLi = $(".item-nav");
        var headerPart2Top = headerPart2.offset().top;
        var headerPart3Top = headerPart3.offset().top;
        console.log(headerPart3Top);
        var headerPart1Top = headerPart1.offset().top;
        var headerPart4Top = headerPart4.offset().top;
        console.log(headerPart4Top);
        var headerPart5Top = headerPart5.offset().top;
        var scrollTop = $(window).scrollTop() + 200;
        console.log(scrollTop)
        if (scrollTop >= headerPart1Top && scrollTop < headerPart2Top) {
            $(".item-nav").removeClass("active");
            $(getNavLi[0]).addClass("active");
            updateImage(arrayImg[0].src);
        } else if (scrollTop >= headerPart2Top && scrollTop < headerPart3Top) {
            $(".item-nav").removeClass("active");
            $(getNavLi[1]).addClass("active");
            updateImage(arrayImg[1].src);
        } else if (scrollTop >= headerPart3Top && scrollTop < headerPart4Top - 100) {
            $(".item-nav").removeClass("active");
            $(getNavLi[2]).addClass("active");
        } else if (scrollTop >= headerPart4Top && scrollTop < headerPart5Top - 100) {
            $(".item-nav").removeClass("active");
            $(getNavLi[3]).addClass("active");
        } else if (scrollTop >= headerPart5Top - 100) {
            $(".item-nav").removeClass("active");
            $(getNavLi[4]).addClass("active");
        } else {
            $(".item-nav").removeClass("active");
        }
    });

    // Hàm chỉ cập nhật ảnh khi cần thiết
    function updateImage(newSrc) {
        if (currentImageSrc !== newSrc) {
            currentImageSrc = newSrc;
            $($image).attr("src", newSrc);
        }
    }

    var introSection = $('.first-section'); // Chọn thẻ div cao 100vh
    var navbar = $('#navbar'); // Chọn navbar

    $(window).scroll(function () {
        var introBottom = introSection.offset().top + introSection.outerHeight(); // Vị trí dưới cùng của intro
        var scrollTop = $(window).scrollTop(); // Lấy vị trí cuộn hiện tại

        if (scrollTop >= introBottom) {
            navbar.addClass('fixed-nav'); // Thêm class fixed khi cuộn qua phần intro
        } else {
            navbar.removeClass('fixed-nav'); // Xóa class fixed khi cuộn lên lại
        }
    });
});

$(".box-click").on("click", function () {
    $(".box-click").removeClass("active");
    var getIndex = $(this).data("index");
    var getItem = arrayContent[getIndex];

    $("#knowledge-container").data("index", getIndex);
    $("#header-knowlegde").html(getItem.name);
    $("#header-description").text(getItem.des);
    $("#header-img").attr("src", getItem.img);

    $(this).addClass("active");
})

$(".item-nav").on("click", function () {
    $(".item-nav").removeClass("active");
    $(this).addClass("active");
})

