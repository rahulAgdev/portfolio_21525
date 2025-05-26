import React, { useState, useEffect, useRef } from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32' ref={counterRef}>
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div 
            className="bg-zinc-900 rounded-lg flex flex-col justify-center p-10"
            key={item.label}
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {isVisible ? (
                <CountUp 
                  suffix={item.suffix} 
                  end={item.value}
                  duration={2}
                  start={0}
                />
              ) : (
                <span>{item.value}</span>
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter