// ques1
let student = { name : "David Rayy", class : "VI", rollno : 12 };

console.log(Object.getOwnPropertyNames(student));

let arr = Object.getOwnPropertyNames(student);

arr.forEach(function(propertyName) {
    console.log(propertyName + ",")
});
    


// ques2
let student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(student);
delete student.rollno;
console.log("After deletion of rollno\n", student);


//ques3

let student = { name : "David Rayy", sclass : "VI", rollno : 12 };
let objectLength = Object.getOwnPropertyNames(student).length;

console.log("The length of student object is: ", objectLength);

//ques4
let library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]

library.forEach(function(bookStatus, index) {
    console.log(index+1 + ". \nTitle: " + bookStatus.title + "\nAuthor: " + bookStatus.author + "\nStarus: " + bookStatus.readingStatus);

   
})

// ques5

let cylinder = {
    radius: 5,
    height: 10
};

let volume = Math.PI * Math.pow(cylinder.radius, 2) * cylinder.height;

console.log("The volume of the cylinder Object is: " + volume.toFixed(4));

// ques6
let library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        libraryID: 1254
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        libraryID: 4264
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Humger Games",
        libraryID: 3245
    }
]

library.forEach(item => {
    console.log(item.author + "\n" + item.title + "\n" + item.libraryID)
})

// console.log(library);
console.log("After Sort: ");
library.sort(function(a, b) {
    return b.libraryID - a.libraryID;
});
library.forEach(item => {
    console.log(item.author + "\n" + item.title + "\n" + item.libraryID)
})