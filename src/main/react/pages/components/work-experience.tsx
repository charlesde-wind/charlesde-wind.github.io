import { JsxElement } from "typescript";
import {useEffect, useState} from "react";
import {fetchFunction} from "@/pages";

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

function RenderBulletPoints({ desc }: { desc: string }) {
  return (
      <ul className="list-disc">
        {desc.split(/\r?\n/).map((line: string) => (
            <li>{line}</li>
        ))}
      </ul>
  );
}

export default function WorkExp() {

  const [workExp, setWorkExp] = useState<Jobs[]>([])

  useEffect(()=>{
    fetchFunction("http://localhost:8080/api/jobs")
        .then(listOfWorkExp =>{
          setWorkExp(
              (prevState)=>{
                return listOfWorkExp.map((work:Jobs) => new Jobs(
                    work.company,
                    work.startDate,
                    work.endDate,
                    work.jobResponsibilities,
                    work.jobRole,
                    work.location,
                    work.tags
                ))
              }
          )
        })
  },[])


  return (
      <div className="bg-white py-24 sm:py-20" id="work-experience">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Career Summary
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Below are my most recent jobs to date
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {workExp.map((work) => (
                  <div
                      key={work.company}
                      className="relative pl-16 hover:pl-20"
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
                      {work.startDate} -&nbsp;{" "} {work.endDate}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      <RenderBulletPoints desc={work.jobResponsibilities} />
                    </dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
  );
}