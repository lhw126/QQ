


$(function(){
    //
    // $("#title").load("../page/title/chat-title.html")
    // $("#dynamic").load("../page/dynamic/chat-records.html")



    //切换
    $("#dongtai").click(function() {

        $("#cout").load($(this).data("page"))

    })
    $("#xiaoxi").click(function () {

        $("#cout").load($(this).data("page"))

    })
    $("#lianxiren").click(function () {

        $("#cout").load($(this).data("page"))

    })

    $("#friends-dongtai").click(function () {

        $("#cout").load($(this).data("page"))

    })

    $("#dongtai-word").click(function () {

        $("#cout").load($(this).data("page"))

    })

})

