import React, { useRef, useEffect } from 'react'

const GlowCard = ({children, card, index, isExperience = false}) => {
    const cardRef = useRef(null)
    const cardRefs = useRef([])

    useEffect(() => {
        cardRefs.current[index] = cardRef.current
    }, [index])

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect()
        const mouseX = e.clientX - rect.left - rect.width/2
        const mouseY = e.clientY - rect.top - rect.height/2

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
        angle = (angle + 360) % 360
        cardRef.current.style.setProperty("--start", angle + 60)
    }

    const getClassName = () => {
        if (isExperience) {
            return 'card card-border timeline-card rounded-xl p-10'
        }
        return 'card card-border rounded-xl p-8'
    }

    const getContent = () => {
        if (isExperience) {
            return (
                <>
                    <div className="flex items-center gap-1 mb-5">
                        {Array.from({length: 5}, (_, i) => (
                            <img src="/images/star.png" alt="star" key={i} className='size-5' />
                        ))}
                    </div>
                    <div className="mb-5">
                        <p className='text-white-50 text-lg'>{card.review}</p>
                    </div>
                    {children}
                </>
            )
        }
        return children
    }

    return (
        <div 
            ref={cardRef} 
            onMouseMove={handleMouseMove} 
            className={getClassName()}
        >
            <div className="glow absolute inset-0" />
            {getContent()}
        </div>
    )
}

export default GlowCard