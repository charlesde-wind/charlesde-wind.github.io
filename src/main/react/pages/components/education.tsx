import {JsxElement} from "typescript";
import React from 'react';
class EducationObj {

    nameOfInstitution: string;
    nameOfCourse: string;
    startDate: string;
    endDate: string;
    gradeObtained: string;

    constructor(
        nameOfInstitution: string,
        nameOfCourse: string,
        startDate: string,
        endDate: string,
        gradeObtained: string) {
        this.nameOfInstitution = nameOfInstitution;
        this.nameOfCourse = nameOfCourse;
        this.startDate = startDate;
        this.endDate = endDate;
        this.gradeObtained = gradeObtained;
    }
}

const listOfEducationObj = [
    new EducationObj("UOB", "BSc Computer Science with Digital Technology Partnership – PwC", "2021", "2025", "First Class Honors"),
    new EducationObj("UOC", "BSc Computer Science", "2021", "2025", "First Class Honors"),
    new EducationObj("Herschel Grammar School", "A Levels", "2019", "2021", "Business-A*, Mathematics-A* and Physics-A")
]



export default function Education() {

    const [counter,setCounter] = React.useState(0)
    const [currentObj,setCurrentObj] = React.useState(listOfEducationObj[0])

    const switchEducationObj = () => {
        setCounter(oldCounter => (oldCounter + 1) % listOfEducationObj.length)
        setCurrentObj(listOfEducationObj[counter])
    }


    return (
        <div className={"text-center sm:p-20 bg-white"}>
            <h1 className={"text-2xl sm:text-5xl font-semibold tracking-tight sm:mb-16"}>Education</h1>
            <div className="flex flex-row sm:px-10 justify-center">

                    <div className={"basis-1/2 rounded-lg bg-pink-200/50 sm:px-12 sm:py-12 sm:m-8"}>
                        <h1>
                            {currentObj.nameOfCourse}
                        </h1>
                        <h1>
                            {currentObj.nameOfInstitution},&nbsp;{currentObj.startDate}-{currentObj.endDate}
                        </h1>
                        <h1>
                            Grades: {currentObj.gradeObtained}
                        </h1>
                        <button className={"sm:mt-6"} onClick={()=>{switchEducationObj()}}>Next</button>
                    </div>
            </div>
        </div>
    );
}