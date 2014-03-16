$(document).ready(function () {

    $('#photo').mousemove(function (e) {
        var r = 175;

        var x = $('#photo').offset().left + r;
        var y = $('#photo').offset().top + r;

        var ex = e.pageX;
        var ey = e.pageY;

        var xx = (ex - x);
        var yy = (ey - y);

        if (xx * xx + yy * yy < r * r)
            $("#photo").attr('src', "images/photo2.png");
        else
            $("#photo").attr('src', "images/photo.png");
    });

    $('#photo').mouseleave(function (e) {
        $("#photo").attr('src', "images/photo.png");
    });


});

