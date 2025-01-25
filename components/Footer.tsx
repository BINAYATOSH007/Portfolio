import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow, FaLongArrowAltDown } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { profile } from 'console'

const Footer = () => {
    return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10 'id="contact">
    
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
            Ready to Deep Dive  <span
                className='text-purple'>With me</span> into the Data and 
                Extract Valuable Insights?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
            Reach out to me today,I&apos;m pleased to have the privilege of discussing with you today the ways in which I may be able to provide assistance and support in the pursuit of your goals and aspirations.
            </p>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=binayatosh.panigeahi@gmail.com">

                <MagicButton
                title='Lets get in touch'
                icon={<FaLocationArrow/>}
                position='right'
                />
                

            </a>

        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center '>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Binayatosh Panigrahi</p>

            <div className='flex items-center md:gap-3 gap-6'>
  {socialMedia.map((profile) => (
    <a
      key={profile.id}
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter
      backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-200'
    >
      <img src={profile.img} alt="icons" width={20} height={20} />
    </a>
  ))}
</div>
        </div>

    </footer>
    )
}

export default Footer