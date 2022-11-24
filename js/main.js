$(function() {
    if (!$(".records").length) {
        return;
    }
    var $warpEle = $(".records-date"),
        $targetA = $warpEle.find("h2 a,ul li dl dt a"),
        parentH,
        eleTop = [];
    parentH = $warpEle.parent().height();

    setTimeout(function() {
        $warpEle.find("ul").children(":not('h2:first')").each(function(idx) {
            eleTop.push($(this).position().top);
            $(this).css({
                "margin-top": -eleTop[idx]
            }).children().hide();
        }).animate({
            "margin-top": 0
        }, 1500).children().fadeIn();

        $warpEle.find("ul").children(":not('h2:first')").addClass("bounceInDown").css({
            "-webkit-animation-duration": "2s",
            "-webkit-animation-delay": "0",
            "-webkit-animation-timing-function": "ease",
            "-webkit-animation-fill-mode": "both"
        }).end().children("h2").css({
            "position": "relative"
        });
    }, 0);

    $targetA.click(function() {
        $(this).parent().css({
            "position": "relative"
        });
        $(this).parent().siblings().slideToggle();
        $warpEle.parent().removeAttr("style");
        return false;
    });

    document.addEventListener('touchstart', function() {
        document.getElementById('audios').play()
    });

    document.addEventListener('WeixinJSBridgeReady', function() {
        document.getElementById('audios').play()
    })
});