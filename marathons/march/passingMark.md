In schools in the country known as Codelandia, a special five-point grading scale is used.
Each grade is a Latin letter from 'A' to 'E' with a value from 5 to 1 respectively.

| Grade         | Value         | 
| ------------- |:-------------:| 
| A             | 5             | 
| B             | 4             | 
| C             | 3             | 
| D             | 2             | 
| E             | 1             | 


A student is considered to have passed the class if the average value of their grades is greater than or equal to the passing mark.

Given the passing mark and a student's grades, find out if they have successfully passed the class or not.

#### Example

- For `passMark = 3.5` and `grades = "ABC"`, the output should be `passingMark(passMark, grades) = true`, because `(5 + 4 + 3) / 3 = 4.5 ≥ 3.5`.
- For `passMark = 4.0` and `grades = "BBCD"`, the output should be `passingMark(passMark, grades) = false`, because `(4 + 4 + 3 + 2) / 4 = 3.25 < 4.0`.

##### - [input] float passMark

`1 ≤ passMark ≤ 5`

It contains exactly one decimal place.

##### - [input] string grades

A non-empty string formed from the letters 'A', 'B', 'C', 'D' and 'E'.

##### - [output] boolean

`true` if the student has passed the class, `false` otherwise.