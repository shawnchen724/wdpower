$(function () {
    var index = 0;
    // 获取图片的本身的大小
    function getImageWidth(url, callback) {
        var img = new Image();
        img.src = url;

        // 如果图片被缓存，则直接返回缓存数据
        if (img.complete) {
            callback(img.width, img.height);
        } else {
            // 完全加载完毕的事件
            img.onload = function () {
                callback(img.width, img.height);
            }
        }

    }
    $('.honor-img li a').click(function () {
        var top = $(document).scrollTop();
        index = $(this).parent().index();
        $('.mask').show();
        // 每当点击a之后获取到这个a中对应的图片地址
        var href = $(this).prop('href');
        $('#lb-img').prop('src', href);
        // 重点获取到对应图片的尺寸大小
        var imgSrc = href;
        getImageWidth(imgSrc, function (w, h) {
            if (w >= 1000) {
                if (w > $(window).width()) {
                    w=$(window).width()*0.9;
                    h=w/1.2;
                }
                $('#lb-img').css({
                    width: w,
                    height: h / 1.2
                });
                $('.lb').css({
                    top: top + 50,
                    left: 50 + '%',
                    'margin-left': -w / 2
                }).fadeIn(1000);
            } else {
                $('#lb-img').css({
                    width: w / 1.7,
                    height: h / 1.7
                });
                $('.lb').css({
                    top: top + 50,
                    left: 50 + '%',
                    'margin-left': -w / 2 / 1.7
                }).fadeIn(1000);
            }
        })
        return false;
    });
    $('.mask').click(function () {
        $(this).hide();
        $('.lb').hide()
    });
    $('.lb-prev').on('mouseover mousemove', function () {
        if (index == 0) {
            return;
        }
        $(this).css({
            opacity: 1
        })
    });
    $('.lb-prev').on('mouseout', function () {
        $(this).css({
            opacity: 0
        })
    }).on('click', function () {
        if (index <= 0) {
            $(this).css({
                opacity: 0
            });
            return;
        }
        index--;
        var href = $('#picture li').eq(index).find('a').prop('href');
        $('#lb-img').prop('src', href);
        var imgSrc = href;
        getImageWidth(imgSrc, function (w, h) {
            if (w >= 1000) {
                if (w > $(window).width()) {
                    w=$(window).width()*0.9;
                    h=w/1.2;
                }
                $('#lb-img').css({
                    width: w,
                    height: h / 1.2
                });
                $('.lb').css({
                    top: top + 50,
                    left: 50 + '%',
                    'margin-left': -w / 2
                }).fadeIn(1000);
            } else {
                $('#lb-img').css({
                    width: w / 1.7,
                    height: h / 1.7
                });
                $('.lb').css({
                    top: top + 50,
                    left: 50 + '%',
                    'margin-left': -w / 2 / 1.7
                }).fadeIn(1000);
            }
        });
        if (index == 0) {
            $(this).css({
                opacity: 0
            });
        }
    });
    var lengths = $('#picture li').length - 1;
    $('.lb-next').on('mouseover', function () {
        if (index == lengths) {
            return;
        }
        $(this).css({
            opacity: 1
        });
    }).on('click', function () {
        // 点击右按钮实现图片的切换
        if (index == 7) {
            $(this).css({
                opacity: 0
            });
            return;
        }
        index++;
        // 获取对应的li中的图片地址
        var href = $('#picture li').eq(index).find('a').prop('href');
        $('#lb-img').prop('src', href);
        var imgSrc = href;
        getImageWidth(imgSrc, function (w, h) {
            if (w >= 1000) {
                if (w > $(window).width()) {
                    w=$(window).width()*0.9;
                    h=w/1.2;
                }
                $('#lb-img').css({
                    width: w,
                    height: h / 1.2
                });
                $('.lb').css({
                    top: top + 50,
                    left: 50 + '%',
                    'margin-left': -w / 2
                }).fadeIn(1000);
            } else {
                $('#lb-img').css({
                    width: w / 1.7,
                    height: h / 1.7
                });
                $('.lb').css({
                    top: top + 50,
                    left: 50 + '%',
                    'margin-left': -w / 2 / 1.7
                }).fadeIn(1000);
            }
        });
        if (index == lengths) {
            $(this).css({
                opacity: 0
            });
        }
    });
    $('.lb-next').on('mouseout', function () {
        $(this).css({
            opacity: 0
        });
    });
    $('.close').on('click', function () {
        $('.mask').hide();
        $('.lb').hide()
    })
})