let data =
    [
        {
            "pHeroCourses": {
                "course-x": "web development"
            }
        },
        {
            "pHeroCourses": {
                "course-y": "phitron"
            }
        },
        {
            "pHeroCourses": {
                "course-z": "acc"
            }
        },
        {
            "pHeroCourses": {
                "course-xyz": "level-2"
            },
            "locationField": {
                "en-US": {
                    "lat": 19.28563,
                    "lon": 72.8691
                }
            }
        }
    ]
//3) How will you get the output
// a) abc
/*
2) How will you get the output [Advanced - uses 2D matrix
concept]
a) level-2
b) 72.8621
*/
const output1 = data[3].pHeroCourses['course-xyz'];
const output2 = data[3].locationField['en-US'].lon
console.log(output1, output2);
/*
3) How will you get the output
a) abc
b) xyz
*/
let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}
const abc = activities.activity1[0].song_list.song_1;
const xyz = activities.activity1[0].song_list.song_2;
console.log(abc, xyz);

/*
4) How will you display
a) Petersburg
b) Herry
*/
let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}
const Petersburg = students[2222].address.city;
const Herry = students[3333].name;
console.log(Petersburg, Herry);

/*
5) How will you display
a) programming er coddogosti
b) VW
c) Bangladesh
*/
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming ercoddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}

const programming = instructor.additionalData.books[1];
const vw = instructor.additionalData.moreDetails.hometown.state;
const bangladesh = instructor.additionalData.moreDetails.countriesLivedIn[0]
console.log(programming, vw, bangladesh);
/*
6) How will you display
a) B
b) D
*/
const studentData = [

    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
]
const b = studentData[1].details[0].gradingDetails[0].grade;
const d = studentData[1].details[1].gradingDetails[0].grade;
console.log(d, b);

/*
7) How will you display
a) habluder adda
b) Beginner

*/

let datas = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
const hablu = datas.data[0].bookDetails.name;
const bigginer = datas.data[1].bookCategory;
console.log(hablu,bigginer);