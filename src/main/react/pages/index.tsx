import AboutMe from "./components/about-me";
import WorkExp from "./components/work-experience";
import Certifications from "./components/certifications";
import Education from "./components/education";
import '../app/globals.css'
import Footer from "@/pages/components/footer";
import React from "react";
import {ParallaxProvider} from "react-scroll-parallax";

const Homepage = (): JSX.Element => {
    return (
        <>
            <ParallaxProvider>
                <AboutMe/>
                <WorkExp/>
                <Education />
                <Certifications />
                <Footer />
            </ParallaxProvider>
        </>
    )
}

const fetchFunction = async (url:string) => {

    return fetch(process.env.backendServer+url, {method:"GET"})
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