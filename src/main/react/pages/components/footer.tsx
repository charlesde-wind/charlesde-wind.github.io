import Certifications from "@/pages/components/certifications";
import {Fragment} from 'react'
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
                <button className={"basis-1/3"}>
                    Github
                    <GitHubIcon fontSize={"large"}/>
                </button>
                <button className={"basis-1/3"}>
                    Linkedin
                    <LinkedInIcon fontSize={"large"}/>
                </button>
                <button className={"basis-1/3"}>
                    Email me
                    <EmailIcon fontSize={"large"}/>
                </button>
            </div>
        </div>
    )
}