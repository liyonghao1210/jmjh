var currentIndex = 0;
$(document).ready(function () {
    $(".list-tab-head ul li").click(function () {
        var index = $(this).index();
        if (currentIndex != index) {
            currentIndex = index;
            $(this).removeClass("list-normal-li").addClass("list-selected-li");
            $(this).siblings().removeClass("list-selected-li").addClass("list-normal-li");
            var contents = $(".list-tab-content").find("li");
            $(contents[index]).show();
            $(contents[index]).siblings().hide();
        }
    });
});