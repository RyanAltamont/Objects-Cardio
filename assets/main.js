// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.
  const course1 = {

    name: `Web Design`,
    instructor: `Rob Dominguez`,
    students: 14,
    period: `3rd`,
    classlength: 70,


  }


// 2. Write a statement that will log some information about your course to the console using dot-notation.
console.log(`There are ${course1.students} people in my class.`);
// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.
const course2 = {

  name: `Weight Training`,
  instructor: `Archie Johnson`,
  students: 20,
  period: `7th`,
  classlength: 70,


}

console.log(`There are ${course2.students} people in my class.`);
// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!

function bothCourses(course) {


console.log(` ${course.name} is a class.`);
return course;
}

bothCourses(course1);
bothCourses (course2);








// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.


function modify (changeinstructor)  {

changeinstructor.name = `Mr. McCain`
console.log(` ${changeinstructor.name} is the new teacher.`);
return modify;


}

modify (course1);
modify (course2);



// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function talkAboutMyCourses(anyCourse) {
  console.log(
    `${anyCourse.title} is a course about ${anyCourse.subject}. The course is taught by, ${anyCourse.instructor}.`
  );
}

// Create your array for #6 down here and invoke the .map() function after it.

const myCourses = [

{
  title: `Web Design`,
  subject: `Computer Science`,
  instructor: `Mr. Dominguez`,

},

{

  title: `Weight Training`,
  subject: `PE`,
  instructor: `Coach Johnson`,


},

{

  title: `British Literature`,
  subject: `English`,
  instructor: `Ms. Dawson`,

},

{

  title: `Algebra II`,
  subject: `Math`,
  instructor: `Mrs. OC`,

},

];

myCourses.map ((myCourses) => {

console.log(`${myCourses.title} is a course about ${myCourses.subject}. The course is taught by, ${myCourses.instructor}.`);



});
