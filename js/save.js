$(".rz_btn a").click(function (event) {
    var dd = $(this).parent().parent().next('.yc_content');
    var display = dd.css('display');
    if (display == 'none') {
        $(".saveTable li .yc_content").slideUp('slow').eq($(".saveTable .a_btn").index(this)).slideDown('slow');
        $(this).html("取消");
    } else {
        dd.slideUp('slow');
        $(this).html("设置");
    }
})
$(".save_submit input").click(function () {
    var bb = $(".rz_btn a").parent().parent().next('.yc_content');
    bb.slideUp('slow');
    $(".rz_btn a").html("设置");
})