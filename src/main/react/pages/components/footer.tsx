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

export default function Footer(): JSX.Element {
    return (
        <>
            <div className={"sm:my-8"}>
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Checkout These &#8594;
                </h2>
                <div>
                    <button>
                        Github
                    </button>
                    <button>
                        Linkedin
                    </button>
                    <button>  {/* modal popup */}
                        Email
                    </button>
                </div>
            </div>
        </>
    )
}