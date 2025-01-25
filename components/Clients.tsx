import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const clients = () => {
    return (
    <div className='py-20' id="testimonials">
        <h1 className='heading'>
        Encouraging words from 
            <span className='text-purple'> Colleagues & Mentors</span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>

            <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
            />
        <div>

        </div>
        
        </div>
        </div>
        )
}

export default clients