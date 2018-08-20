//轮播段上的导航列表
function showProductsAsideCategorys(cid) {
    $("div.productsAsideCategorys[cid=" + cid + "]").css("display", "block");
}

function hideProductsAsideCategorys(cid) {
    $("div.productsAsideCategorys[cid=" + cid + "]").css("display", "none");
}

$(function() {
    $("div.eachCategory").mouseenter(function() {
        var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
    });
    $("div.eachCategory").mouseleave(function() {
        var cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
    });
    $("div.productsAsideCategorys").mouseenter(function() {
        var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
    });
    $("div.productsAsideCategorys").mouseleave(function() {
        var cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
    });
});
//轮播段上的导航列表end
/**图片褪色 */
function fadeInOut(str) {

    $(str + " img").mouseenter(function() {
        $(this).fadeTo("slow", 0.7);
    });
    $(str + " img").mouseleave(function() {
        $(this).fadeTo(0.5, 1);
    });
}
$(function() {
    fadeInOut(".productsList");
    fadeInOut(".goods-container");
});
