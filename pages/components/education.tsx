import { JsxElement } from "typescript";

class Jobs {
  nameOfCompany: string;
  startDate: Date;
  endDate: Date;
  responsibilities: string;
  role: string;

  constructor(
    nameOfCompany: string,
    startDate: Date,
    endDate: Date,
    responsibilities: string,
    role: string
  ) {
    this.nameOfCompany = nameOfCompany;
    this.startDate = startDate;
    this.endDate = endDate;
    this.responsibilities = responsibilities;
    this.role = role;
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

export default function Education() {
  const workExp: Jobs[] = [
    new Jobs(
      "PWC",
      new Date(2022, 5, 12),
      new Date(2022, 7, 25),
      "Liaised with members in the CMAS team to help create new solutions and modify existing tools in place, using technologies such as Microsoft PowerBi and Google Appscript.\nLiaised with members in the CMAS team to help create new solutions and modify existing tools in place, using technologies such as Microsoft PowerBi and Google Appscript.",
      "Junior Software Developer"
    ),
    new Jobs(
      "PWC",
      new Date(2022, 5, 12),
      new Date(2022, 7, 25),
      "Liaised with members in the CMAS team to help create new solutions and modify existing tools in place, using technologies such as Microsoft PowerBi and Google Appscript.",
      "Junior Software Developer"
    ),
    new Jobs(
      "PWC",
      new Date(2022, 5, 12),
      new Date(2022, 7, 25),
      "Liaised with members in the CMAS team to help create new solutions and modify existing tools in place, using technologies such as Microsoft PowerBi and Google Appscript.",
      "Junior Software Developer"
    ),
    new Jobs(
      "PWC",
      new Date(2022, 5, 12),
      new Date(2022, 7, 25),
      "Liaised with members in the CMAS team to help create new solutions and modify existing tools in place, using technologies such as Microsoft PowerBi and Google Appscript.",
      "Junior Software Developer"
    ),
  ];

  return (
    <div className="bg-white py-24 sm:py-28">
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
                key={work.nameOfCompany}
                className="relative pl-16 hover:pl-20"
              >
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {/* <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                            <work.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                            />
                        </div> */}
                  {work.role},&nbsp;{work.nameOfCompany}
                </dt>
                <dt className="text-base font-regular leading-8 text-gray-700">
                  {work.startDate.toLocaleDateString("en-UK")} -&nbsp;{" "}
                  {work.endDate.toLocaleDateString("en-UK")}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  <RenderBulletPoints desc={work.responsibilities} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
