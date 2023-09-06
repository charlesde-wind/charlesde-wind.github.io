import Certifications from "@/pages/components/certifications";
import React, {Fragment, useState} from 'react'
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
} from '@heroicons/react/20/solid'
import {Menu, Transition} from '@headlessui/react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer(): JSX.Element {



    return (
        <div className={"bg-white"}>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Checkout These &#8594;
            </h2>
            <div className={"flex flex-col sm:flex-row sm:py-6 sm:max-w-md"}>
                <FooterBtn buttonName={"Github"} href={"https://github.com/charlesde-wind/"}>
                    <GitHubIcon fontSize={"large"}/>
                </FooterBtn>
                <FooterBtn buttonName={"Linkedin"} href={"https://www.linkedin.com/in/charles-amankwaah-de-wind-a9baa41a3/"}>
                    <LinkedInIcon fontSize={"large"}/>
                </FooterBtn>
                <FooterBtn buttonName={"Email me"} href={"mailto:charlesdewind09@gmail.com"}>
                    <EmailIcon fontSize={"large"}/>
                </FooterBtn>
            </div>
        </div>
    )
}

interface FooterBtnProps {
    buttonName:string;
    children:React.JSX.Element;
    href: string;
}

function FooterBtn(props:FooterBtnProps) {

    const [hovering,setHovering] = useState(false)

    function onMouseOverHandler(event: React.MouseEvent): void {
        setHovering(true)
    }

    function onMouseLeaveHandler(event: React.MouseEvent): void {
        setHovering(false)
    }

    function onClickHandler() {

    }

    return (
        <a className={`basis-1/3 ${hovering ? 'text-pink-200' : ''}`}
                onMouseOver={onMouseOverHandler}
                onMouseLeave={onMouseLeaveHandler}
                href={props.href}
                target={"_blank"}
                rel={"noopener noreferrer"}>
            {props.buttonName}
            {props.children}
        </a>
    )
}