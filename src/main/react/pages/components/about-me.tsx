import Image from 'next/image'
import React, {useEffect, useState} from "react";
import {Parallax, useParallax} from "react-scroll-parallax";

export default function AboutMe(){

    // let name :string = "Charles De-Wind";
    // let bio :string  = "A software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes.";

    const [myObj, setMyObj] = useState({"name":"","bio":""})

    const aboutme =
        {
            bio: "A software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes.",
            name: "Charles De-Wind"
        }

    // fetch("http://localhost:8080/api/jobs").then(x=> console.log(x.json()));
    useEffect(()=>{
        //  fetchFunction("/api/about-me").then(
        //     z=> {
        //         setMyObj((prevState)=>({name:z[0].name, bio:z[0].bio}))
        //     }
        // );
        setMyObj((prevState) => (
            {name: aboutme.name,bio: aboutme.bio}));

    },[aboutme.name,aboutme.bio])

    return (
        <div className='bg-white min-h-screen' id="about-me">
            <div className="px-6 pt-6 sm:px-12 md:pt-20 md:px-10">
                <div className='flex-col md:flex-row flex jusify-end bg-pink-200/50 max-h-full rounded-2xl sm:p-12 sm:gap-12 hover:bg-pink-200/25 hover:shadow-lg'>
                    <div className='sm:basis-1/2 lg:basis-2/3 p-10 '>
                        <p className='mb-4 lg:mb-0 sm:mb-2 sm:mt-4 lg:mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-6xl'>{myObj.name}</p>
                        <h1 className='mt-8 sm:mt-8 lg:mt-20 text-base tracking-tight sm:text-base lg:text-2xl'>{myObj.bio}</h1>
                    </div>
                    <Parallax speed={30}>
                    <div className='basis-1/2 lg:basis-1/3 justify-self-end'>
                        <div className='rounded-full w-6/12 overflow-hidden sm:pr-0 sm:w-6/12 md:h-5/6 md:w-5/6 sm:mt-0 mx-auto md:mt-20 lg:mt-14 '>
                            <Image
                                className={"w-80 object-cover md:h-80 md:w-80  "}
                                src={"/images/IMG_2056.jpeg"}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    </Parallax>
                </div>
            </div>
            {/*<NavButton url={"#work-experience"} name='Next'/>*/}
        </div>

    );
}