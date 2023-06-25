import Image from 'next/image'

export default function AboutMe(){
    
    let name :string = "Charles De-Wind";
    let bio :string  = "A software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes.";
    

    return (
        <div className='bg-white'>
            <div className="sm:pt-10 px-28 sm:px-10">
                <div className='flex-row flex jusify-end bg-pink-200/50 max-h-full rounded-2xl sm:p-12 sm:gap-12'>
                    <div className='basis-2/3 p-10'>
                        <p className='sm:mt-8 text-lg font-bold tracking-tight text-gray-900 sm:text-6xl'>{name}</p>
                        <h1 className='sm:mt-20 text-base tracking-tight sm:text-2xl'>{bio}</h1>
                    </div>
                    <div className='basis-1/3 justify-self-end'>
                        <div className='rounded-s-full'>
                            <Image
                                src={"/images/IMG_2056.jpeg"}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
