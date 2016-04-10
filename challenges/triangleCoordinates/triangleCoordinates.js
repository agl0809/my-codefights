function TriangleCoordinates(n) {
    return Math.abs( ( ( n[0][0] * ( n[1][1] - n[2][1] ) ) +
            ( n[1][0] * ( n[2][1] - n[0][1] ) ) +
            ( n[2][0] * ( n[0][1] - n[1][1] ) )
        ) / 2
    );
};
