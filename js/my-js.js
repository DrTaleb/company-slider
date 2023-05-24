
$("#myDropDown").hide()
$("#search").hide()
$(".profile-div").hover(function () {
    $(".my-dropdown").slideDown(200)
}, function () {
    $(".my-dropdown").slideUp(200)
},);
$("#search-icon").click(function (){
    $(".search-div").removeClass("col-1-").addClass("col-2-")
    $("#search-icon").hide()
    $("#search").fadeIn(1000)
})
$("#closeSearch").click(function (){
    $(".search-div").removeClass("col-2-").addClass("col-1-")
    $("#search").hide()
    $("#search-icon").show()
})