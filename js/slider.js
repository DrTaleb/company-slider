function slider() {
    const a = document.querySelectorAll(".slide-parent > div").length
    for (let i = 2; i <= a;) {
        $(".slider-parent-btn div:first").clone().appendTo(".slider-parent-btn").attr({"id": i})
        i++
    }
    for (let i = 1; i <= a;) {
        let x = "#" + "" + "slide" + "" + i
        $(".slide:nth-of-type(" + i + ")").attr({"id": x})
        $(".slider-nav-btn:nth-of-type(" + i + ")").attr({"id": i})
        i++
    }
}

function hideAll() {
    $(".slide").hide()
    $(".slider-nav-btn").removeClass("active-slider-btn").removeClass("showed")
}

function firstSlideShow() {
    $("#1").addClass("active-slider-btn").addClass("showed")
    $(".slide-parent > div:nth-of-type(1)").show()
}

function hideAnimation() {
    $(".slider-background-bold-text")
        .addClass("slider-background-bold-text-exit")
        .removeClass("slider-background-bold-text-enter")
    $(".slider-background-bold-text > h1.m-text")
        .addClass("slider-background-bold-text-h1-exit")
        .removeClass("slider-background-bold-text-h1-enter")
    $(".slider-left-bottom-img")
        .addClass("slider-left-bottom-img-exit")
        .removeClass("slider-left-bottom-img-enter")
    $(".slider-right-bottom-img")
        .addClass("slider-right-bottom-img-exit")
        .removeClass("slider-right-bottom-img-enter")
    $(".slider-right-top-img")
        .addClass("slider-right-top-img-exit")
        .removeClass("slider-right-top-img-enter")
    $(".slide-center-text")
        .addClass("slide-center-text-exit")
        .removeClass("slide-center-text-enter")
    $(".main-slider-background")
        .fadeOut()
}

function showAnimation() {
    $(".slider-background-bold-text")
        .removeClass("slider-background-bold-text-exit")
        .addClass("slider-background-bold-text-enter")
    $(".slider-background-bold-text > h1.m-text")
        .removeClass("slider-background-bold-text-h1-exit")
        .addClass("slider-background-bold-text-h1-enter")
    $(".slider-left-bottom-img")
        .removeClass("slider-left-bottom-img-exit")
        .addClass("slider-left-bottom-img-enter")
    $(".slider-right-bottom-img")
        .removeClass("slider-right-bottom-img-exit")
        .addClass("slider-right-bottom-img-enter")
    $(".slider-right-top-img")
        .removeClass("slider-right-top-img-exit")
        .addClass("slider-right-top-img-enter")
    $(".slide-center-text")
        .removeClass("slide-center-text-exit")
        .addClass("slide-center-text-enter")
    $(".main-slider-background")
        .fadeIn()

}

function showItem(s) {
    var d = "#" + "" + s
    $(d).addClass("showed").addClass("active-slider-btn")
    $(".slide-parent > div:nth-of-type(" + s + ")").show()
}

function hideItem(s) {
    $(".showed").removeClass("showed").removeClass("active-slider-btn")
    $(".slide-parent > div:nth-of-type(" + s + ")").hide()
}

function next() {
    var s = $(".showed").attr("id")
    hideItem(s)
    s++
    const a = document.querySelectorAll(".slider-parent-btn div").length
    if (s > a) {
        s = 1
    }
    showItem(s)
}

function prev() {
    var s = $(".showed").attr("id")
    hideItem(s)
    s--
    const a = document.querySelectorAll(".slider-parent-btn div").length
    if (s < 1) {
        s = a
    }
    showItem(s)
}

function keyBoardFunc() {
    document.addEventListener('keyup', (event) => {
        let name = event.key;
        // Alert the key name and key code on keydown
        if (name === "ArrowDown") {
            setTimeout(function () {
                hideAnimation();
            }, 10);
            setTimeout(function () {
                next();
            }, 700);
            setTimeout(function () {
                showAnimation();
            }, 700);
        }
        if (name === "ArrowUp") {
            setTimeout(function () {
                hideAnimation();
            }, 10);
            setTimeout(function () {
                prev();
            }, 700);
            setTimeout(function () {
                showAnimation();
            }, 700);
        }
    }, false);
}

slider()
hideAll()
firstSlideShow()
keyBoardFunc()
$(".slider-next-btn").click(function () {
    setTimeout(function () {
        hideAnimation();
    }, 10);
    setTimeout(function () {
        next();
    }, 700);
    setTimeout(function () {
        showAnimation();
    }, 700);

})
$(".slider-nav-btn").click(function () {
    let thisId = $(this).attr("id")
    $(".showed").removeClass("showed").removeClass("active-slider-btn")
    $(this).addClass("showed").addClass("active-slider-btn");
    setTimeout(function () {
        hideAnimation();
    }, 10);
    setTimeout(function () {
        $(".slide").hide()
        $(".slide-parent div:nth-of-type(" + thisId + ")").show()
    }, 700);
    setTimeout(function () {
        showAnimation();
    }, 700);
})
// setInterval(function(){
//     setTimeout(function () {
//         hideAnimation();
//     }, 10);
//     setTimeout(function () {
//         next();
//     }, 700);
//     setTimeout(function () {
//         showAnimation();
//     }, 700);
// },7000);
        // homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    loop:true
                },
                600:{
                    items:1,
                    nav:true,
                    loop:true
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:true
                }
            }
        });