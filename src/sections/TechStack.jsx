import React from 'react'
import { techStackIcons, techStackImgs } from '../constants/index'
import TitleHeader from '../components/TitleHeader'
import TechIcons from '../components/Models/TechLogos/TechIcons'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center',
            }
        })

    }, [])
  return (
    <div className="flex-center section-padding" id='skills'>
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="My Preferred Tech Stack" sub="🧠 Skills I Bring to the Table" />
            <div className="tech-grid">
                {techStackIcons.map((icon, index) => (
                    <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg" key={icon.name}>
                        <div className="tech-card-animated-bg" />
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcons model={icon}/>
                            </div>
                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* {techStackImgs.map((icon, index) => (
                    <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg" key={icon.name}>
                        <div className="tech-card-animated-bg" />
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <img src={icon.imgPath} alt={icon.name} />
                            </div>
                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>

    </div>
  )
}

export default TechStack