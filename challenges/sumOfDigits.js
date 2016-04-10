function F(n) {
    var s = '';

    for (var i = 0; i <= n; i++) {
        s = (i % 2 != 0) ? s + i + '' : s;
    }

    return s.split('').reduce(function (x, y) {
        return parseInt(x, 10) + parseInt(y, 10);
    }, 0);
}

function SumOfDigits(a, b) {
    return F(b) - F(a - 1) + '';
}
