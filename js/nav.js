$(".my-dropdown-item").hide()
$(".navigation-menu-").hide()
$(".nav-item-1").hover(function () {
    $(".menu-1").slideDown(200)
}, function () {
    $(".menu-1").slideUp(200)
},);
$(".nav-item-2").hover(function () {
    $(".menu-2").slideDown(200)
}, function () {
    $(".menu-2").slideUp(200)
});
$(".nav-item-3").hover(function () {
    $(".menu-3").slideDown(200)
}, function () {
    $(".menu-3").slideUp(200)
});
$(".nav-item-4").hover(function () {
    $(".menu-4").slideDown(200)
}, function () {
    $(".menu-4").slideUp(200)
});
$(".nav-item-1-sm").click(function () {
    $(".menu-1-sm").slideToggle(200)
    $(".menu-2-sm").slideUp(200)
    $(".menu-3-sm").slideUp(200)
    $(".menu-4-sm").slideUp(200)
});
$(".nav-item-2-sm").click(function () {
    $(".menu-2-sm").slideToggle(200)
    $(".menu-1-sm").slideUp(200)
    $(".menu-3-sm").slideUp(200)
    $(".menu-4-sm").slideUp(200)
})
$(".nav-item-3-sm").click(function () {
    $(".menu-3-sm").slideToggle(200)
    $(".menu-1-sm").slideUp(200)
    $(".menu-2-sm").slideUp(200)
    $(".menu-4-sm").slideUp(200)
})
$(".nav-item-4-sm").click(function () {
    $(".menu-4-sm").slideToggle(200)
    $(".menu-1-sm").slideUp(200)
    $(".menu-2-sm").slideUp(200)
    $(".menu-3-sm").slideUp(200)
})
$(".menu-icon").click(function () {
    $(this).toggleClass("active");
    $(".navigation-menu").toggleClass("active");
    $(".menu-icon i").toggleClass("fa-times");
    $(".menu-2-sm").hide(200);
    $(".menu-1-sm").hide(200);
    $(".menu-3-sm").hide(200);
    $(".navigation-menu-").toggle(300)
});