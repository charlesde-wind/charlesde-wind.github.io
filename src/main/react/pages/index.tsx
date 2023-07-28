import AboutMe from "./components/about-me";
import WorkExp from "./components/work-experience";
import Certifications from "./components/certifications";
import Education from "./components/education";
import '../app/globals.css'
import Footer from "@/pages/components/footer";

const Homepage = (): JSX.Element => {
    return (
        <>
            <AboutMe/>
            <WorkExp/>
            <Education />
            <Certifications />
            <Footer />
        </>
    )
}

const fetchFunction = async (url:string) => {

    return fetch(url, {method:"GET"})
        .then(response=>{
            if(response.status!==200)
            {
             throw Error(`${response.status}`)
            }
            return response.json();
        })
}
export {fetchFunction};
export default Homepage;