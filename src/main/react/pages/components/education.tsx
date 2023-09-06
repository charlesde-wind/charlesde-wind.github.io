import {JsxElement} from "typescript";
import React, {useEffect, useState} from 'react';
import {fetchFunction} from "@/pages";

class EducationObj {

    nameOfInstitution: string;
    nameOfCourse: string;
    startDate: string;
    endDate: string;
    gradesObtained: string;
    location : null | string;

    constructor(
        nameOfInstitution: string,
        nameOfCourse: string,
        startDate: string,
        endDate: string,
        gradesObtained: string, location?: string) {
        this.nameOfInstitution = nameOfInstitution;
        this.nameOfCourse = nameOfCourse;
        this.startDate = startDate;
        this.endDate = endDate;
        this.gradesObtained = gradesObtained;
        this.location = location ? location: null;
    }
}

// const listOfEducationObj = [
//     new EducationObj("UOB", "BSc Computer Science with Digital Technology Partnership – PwC", "2021", "2025", "First Class Honors"),
//     new EducationObj("UOC", "BSc Computer Science", "2021", "2025", "First Class Honors"),
//     new EducationObj("Herschel Grammar School", "A Levels", "2019", "2021", "Business-A*, Mathematics-A* and Physics-A")
// ]


export default function Education() {

    const [listOfEducationObj, setListOfEducationObj] = useState<EducationObj[]>([])

    const [currentObj, setCurrentObj] = useState<EducationObj>()

    const [counter, setCounter] = React.useState(0)

    const education:EducationObj[] = [
        {
            nameOfInstitution: "UOB",
            nameOfCourse: "BSc Computer Science with Digital Technology Partnership – PwC",
            startDate: "2021",
            endDate: "2025",
            gradesObtained: "First Class Honors",
            location: null
        },
        {
            nameOfInstitution: "UOB",
            nameOfCourse: "BSc Computer Science",
            startDate: "2021",
            endDate: "2025",
            gradesObtained: "First Class Honors",
            location: null
        },
        {
            nameOfInstitution: "Beechwood School",
            nameOfCourse: "BSc Computer Science",
            startDate: "2021",
            endDate: "2025",
            gradesObtained: "Business-A*, Mathematics-A* and Physics-A",
            location: null
        }
    ];

    // fetch("http://localhost:8080/api/jobs").then(x=> console.log(x.json()));
    useEffect(() => {
        // fetchFunction("/api/education").then(
        //     listOfObj => {
        //         setListOfEducationObj((prevState) => {
        //                 return listOfObj.map((obj: EducationObj) => {
        //                         return new EducationObj(
        //                             obj.nameOfInstitution, obj.nameOfCourse, obj.startDate, obj.endDate, obj.gradeObtained
        //                         )
        //                     }
        //                 )
        //             }
        //         )
        //         setCurrentObj(listOfObj[0])
        //         setCounter(1);
        //     }
        setListOfEducationObj((prevState) => {
                return education.map((obj: EducationObj) => {
                        return new EducationObj(
                            obj.nameOfInstitution, obj.nameOfCourse, obj.startDate, obj.endDate, obj.gradesObtained
                        )
                    }
                )
            }
        )
        setCurrentObj(education[0])
        setCounter(1);

    }, [])

    const switchEducationObj = () => {
        setCurrentObj(prevCurrentObj => listOfEducationObj[counter]);
        setCounter(oldCounter => (oldCounter + 1) % listOfEducationObj.length);
    }

    const renderObj =
        currentObj ?
            (<div className={"basis-1/2 rounded-lg bg-pink-200/50 sm:px-12 sm:py-12 sm:m-8"}>
                <h1>
                    {currentObj.nameOfCourse}
                </h1>
                <h1>
                    {currentObj.nameOfInstitution},&nbsp;{currentObj.startDate}-{currentObj.endDate}
                </h1>
                <h1>
                    Grades: {currentObj.gradesObtained}
                </h1>
                <button className={"sm:mt-6"} onClick={switchEducationObj}>Next</button>
            </div>) :
            (<p>No education available</p>)

    return (
        <div className={"text-center sm:p-20 bg-white"}>
            <h1 className={"text-2xl sm:text-5xl font-semibold tracking-tight sm:mb-16"}>Education</h1>
            <div className="flex flex-row sm:px-10 justify-center">
                {renderObj}
            </div>
        </div>
    );
}