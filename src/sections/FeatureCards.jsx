import React from 'react'
import { abilities } from '../constants'
import GlowCard from '../components/GlowCard'

const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg'>
        <div className='mx-auto grid-3-cols'>
            {abilities.map(({imgPath, title, desc}) => (
                <GlowCard key={title} isExperience={false}>
                    <div className="flex flex-col gap-4">
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
                        <p className='text-white-50 text-lg'>{desc}</p>
                    </div>
                </GlowCard>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards