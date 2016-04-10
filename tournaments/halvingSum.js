function halvingSum(n) {
    var sum = 0;
    for (var i = n; i > 0; i = Math.floor(i / 2)) {
        sum += i;
    }
    return sum;
}
