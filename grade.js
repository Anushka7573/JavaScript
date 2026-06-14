//Q2. Write a code which will take marks of a student and print the corresponding grade according to score:
// Marks        Grade
// 90-100       A   
// 80-89        B
// 70-79        C
// 60-69        D
// 0-59         F


let score=95;
let grade;

if(score>=90 && score<=100){
    grade="A";
}
else if(score>=80 && score<90){
    grade="B";
}   
else if(score>=70 && score<80){
    grade="C";
}   
else if(score>=60 && score<70){
    grade="D";
}   
else if(score>=0 && score<60){
    grade="F";
}

console.log("Grade is: ",grade);