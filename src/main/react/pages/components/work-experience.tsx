import { JsxElement } from "typescript";
import {useEffect, useState} from "react";
import {fetchFunction} from "@/pages";
import {TypeAnimation} from "react-type-animation";



class Jobs {
  company: string;
  startDate: string;
  endDate: string;
  jobResponsibilities: string;
  jobRole: string;
  location:string;
  tags:string[]| undefined;

  constructor(
      company: string,
      startDate: string,
      endDate: string,
      jobResponsibilities: string,
      jobRole: string,
      location:string,
      tags: string[] | undefined
  ) {
    this.company = company;
    this.startDate = startDate;
    this.endDate = endDate;
    this.jobResponsibilities = jobResponsibilities;
    this.jobRole = jobRole;
    this.location = location;
    tags ? this.tags = tags: undefined;
  }
}

const listOfJobs = [
        // {
        //     jobRole: "Junior Software Developer",
        //     company: "PWC",
        //     jobResponsibilities: "Set up a tailored React, Typescript, and Webpack setup for the corporate proxy, facilitating the prototype of a web app showcasing daily and weekly team member locations to encourage office presence.\n" +
        //         "We collaboratively revamped an add-on for easy user interaction with internal APIs via a modern UI, enabling JSON data imports to spreadsheets. This Javascript/Appscript tool works seamlessly with Microsoft Excel, Google Sheets, and is deployed on GCP.\n" +
        //         "Also, created some visualisations by first cleaning the data and refactoring then using PowerBi.",
        //     startDate: "09/2023",
        //     endDate: "09/2024",
        //     location: "Birmingham",
        //     tags: [
        //         "Google Appscript",
        //         "Javascript",
        //         "React",
        //         "C#"
        //     ]
        // },
        {
            jobRole: "Junior Software Developer",
            company: "PWC",
            jobResponsibilities: "Set up a tailored React, Typescript, and Webpack setup for the corporate proxy, facilitating the prototype of a web app showcasing daily and weekly team member locations to encourage office presence.\n" +
                "We collaboratively revamped an add-on for easy user interaction with internal APIs via a modern UI, enabling JSON data imports to spreadsheets. This Javascript/Appscript tool works seamlessly with Microsoft Excel, Google Sheets, and is deployed on GCP.\n" +
                "Also, created some visualisations by first cleaning the data and refactoring then using PowerBi.",
            startDate: "09/2023",
            endDate: "09/2024",
            location: "Birmingham",
            tags: [
                "Google Appscript",
                "Javascript",
                "React",
                "C#"
            ]
        },
        {
            jobRole: "Software Engineer (Intern)",
            company: "PWC",
            jobResponsibilities:
                "Set up a tailored React, Typescript, and Webpack setup for the corporate proxy, facilitating the prototype of a web app showcasing daily and weekly team member locations to encourage office presence.\n" +
                "I collaboratively revamped an add-on for easy user interaction with internal APIs via a modern UI, enabling JSON data imports to spreadsheets. This Javascript/Appscript tool works seamlessly with Microsoft Excel, Google Sheets, and is deployed on GCP.\n" +
                "Also, created some visualisations by first cleaning the data and refactoring then using PowerBi.",
            startDate: "Summer 2023",
            endDate: "",
            location: "Birmingham",
            tags: [
                "Google Appscript",
                "Javascript",
                "Typescript",
                "React",
            ]
        },
        {
            jobRole: "Software Engineer (Intern)",
            company: "PWC",
            jobResponsibilities: "Built app using TypeScript/AppScript to format Google Docs/Slides, cutting doc finalisation time 60%.\n" +
                "Built a Vue.js frontend and Typescript/AppScript backend app automating cash flow forecasts, balance sheets, horizontal analysis sheets. Users added assets/liabilities, managed firms, adjusted time periods with ease. Tool eliminated manual accounting tasks, except figure input. \n" +
                "Integrated extension to auto-generate notional funds flow sheets from analysis data, removing manual creation. Used colour-coded warnings (Red, Amber, Green) to alert accountants to irregularities.\n" +
                "Held bi-weekly stakeholder meets to gather app requirements.",
            startDate: "Summer 2022",
            endDate: "",
            location: "Birmingham",
            tags: [
                "Google Appscript",
                "Javascript",
                "Vue",
            ]
        }
]

function RenderBulletPoints({ desc }: { desc: string }) {
  return (
      <ul className="list-disc">
        {desc.split(/\r?\n/).map((line: string, index:number) => (
            <li key={index}>{line}</li>
        ))}
      </ul>
  );
}

export default function WorkExp() {

  const [workExp, setWorkExp] = useState<Jobs[]>([])

  useEffect(()=>{
    // fetchFunction("/api/jobs")
    //     .then(listOfWorkExp =>{
    //       setWorkExp(
    //           (prevState)=>{
    //             return listOfWorkExp.map((work:Jobs) => new Jobs(
    //                 work.company,
    //                 work.startDate,
    //                 work.endDate,
    //                 work.jobResponsibilities,
    //                 work.jobRole,
    //                 work.location,
    //                 work.tags
    //             ))
    //           }
    //       )
    //     })
      setWorkExp(listOfJobs)
  },[])

    const endDateWork = (endDateWork:string) =>{

      if (endDateWork=== "") {
          return ""
      }
      return " - " + endDateWork;
    }


  return (
      <div className="bg-white min-h-screen sm:py-20" id="work-experience">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/*<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">*/}
            {/*  Career Summary*/}
            {/*</p>*/}
              <TypeAnimation
                  sequence={[
                      // Same substring at the start will only be typed once, initially
                      'Career Summary',
                      1000,
                      'Career Journey',
                      1000,
                      'Work History',
                      1400,
                      'Work Experience',
                      1000,
                      'Work Portfolio?',
                      1400,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className={"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"}
              />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Below are my most recent positions to date
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

                {workExp.map((work) => (
                  <div
                      key={work.company}
                      className="relative px-6 sm:pl-16 sm:hover:pl-20"
                  >
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      {/* <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                            <work.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                            />
                        </div> */}
                      {work.jobRole},&nbsp;{work.company}
                    </dt>
                    <dt className="text-base font-regular leading-8 text-gray-700">
                      {work.startDate}{endDateWork(work.endDate)}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600 sm:mb-4 mb-4">
                      <RenderBulletPoints desc={work.jobResponsibilities} />
                    </dd>
                      {work.tags?.map(tag=> (
                          <TagsByName tagName={tag} key={tag}/>
                      ))}
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
  );
}

interface TagsByNameProps {
    tagName:string
}
function TagsByName(props:TagsByNameProps) {

    let tagName = "";

    switch (props.tagName.trim().toLowerCase()) {
        case "python":
            tagName="bg-blue-200 text-blue-700"
            break;
        case "java":
            tagName="bg-pink-200 text-pink-700"
            break;
        case "node":
            tagName="bg-yellow-200 text-yellow-700"
            break;
        case "javascript":
            tagName="bg-slate-200 text-slate-700"
            break;
        case "c#":
            tagName="bg-red-200 text-red-700"
            break;
        case "gcp":
            tagName="bg-amber-200 text-amber-700"
            break;
        case "azure":
            tagName="bg-lime-200 text-lime-700"
            break;
        case "react":
            tagName="bg-teal-200 text-teal-700"
            break;
        case "google appscript":
            tagName="bg-sky-200 text-sky-700"
            break;
        case "vue":
            tagName="bg-violet-200 text-violet-700"
            break;
        case "typescript":
            tagName="bg-fuchsia-200 text-fuchsia-700"
            break;
    }

    return (
        <div
            className={`ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${tagName} rounded-full`}
        >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            {props.tagName}
        </div>
    )
}