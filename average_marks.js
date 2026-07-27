average = [85, 97, 44, 37, 76, 60];

sum = 0;
for (let i = 0; i < average.length; i++) {
    sum += average[i];
}
marks = sum / average.length;

console.log("Average marks:", marks);