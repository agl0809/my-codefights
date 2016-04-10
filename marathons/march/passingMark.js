function passingMark(passMark, grades) {
    var scaleGrading = {
        A : 5,
        B: 4,
        C: 3,
        D: 2,
        E: 1
    };

    var count = 0;
    var sumGrades = 0;

    for (var i in grades){
        count ++;
        var grade = grades[i];
        sumGrades += scaleGrading[grade];
    }
    var averageResult = sumGrades / count;

    return (averageResult >= passMark);
};

