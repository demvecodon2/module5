let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];
// hiển thị trên 4
const diplay = courses.filter(courses => courses.rating > 4);
diplay.forEach(courses => {
    console.log(`${courses.title} ${courses.rating}`)
});
// hiển thị dưới 4 và - - -;

const display3 = courses.filter(course => course.rating < 4)
    .map (course => `<${course.id}> - <${course.title}> - <${course.rating}>`);
display3.forEach((courses =>{
    console.log(courses);
}))


//test map
function courseHendler(course,index) {
    return {
        id: course.id,
        title: ` tiêu đề ${course.title}`,
        rating: `đánh giá ${course.rating}`,
        index: `vị trí ${index + 1}`
    }
}
const newCourse = courses.map(courseHendler);
console.log(newCourse);


// nối 2 mảng
function arrayConcatenation(arr1,arr2){
    return[...arr1,...arr2];
}
let newArray= arrayConcatenation(courses,addedCourses);
console.log(newArray);
















