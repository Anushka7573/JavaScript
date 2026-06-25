//for in loop

let students = {
    name: "Anushka",
    age: 20,
    course: "JavaScript",
    cgpa: 9.5,
    isPassed: true
};

for (let key in students) {  //iterator over each property in the object
    console.log(key + " = " + students[key]);
}