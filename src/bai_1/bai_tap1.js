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

// lọc ra các bài có rating trên 4.
const hienthi = courses.filter(courses => courses.rating >4.0);
hienthi.forEach(courses =>{console.log(`${courses.title} ${courses.rating}`)});
//các bài dưới 4
const loaibo = courses.filter(courses => courses.rating <= 3.9);
loaibo.forEach(courses =>{console.log(`${courses.title} ${courses.rating}`)});
console.log(loaibo);
// nối bảng
const mergeCourses = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
const allCourses = mergeCourses(courses, addedCourses);
console.log(allCourses);
