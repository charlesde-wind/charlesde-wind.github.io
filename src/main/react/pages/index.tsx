import { JsxElement } from "typescript";
import AboutMe from "./components/about-me";
import WorkExp from "./components/education";
import Certifications from "./components/certifications";
import Education from "./components/work-experience";
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
