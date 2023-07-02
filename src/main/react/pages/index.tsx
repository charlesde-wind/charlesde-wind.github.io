import { JsxElement } from "typescript";
import AboutMe from "./components/about-me";
import WorkExp from "./components/work-experience";
import Certifications from "./components/certifications";
import Education from "./components/education";
import '../app/globals.css'


const Homepage = (): JSX.Element => {
    return (
        <>
            <AboutMe/>
            <WorkExp/>
            <Certifications />
            <Education />
        </>
    )
}

export default Homepage;

// export default function Homepage() {
//     return (
//         <>
//             <AboutMe/>
//             <WorkExp/>
//             <Certifications />
//             <Education />
//         </>
//     )
// }