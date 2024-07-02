import React from 'react'

import "./WorkCardStyle.css"

import WorkCard from './WorkCard'
import WorkCardData from "./WorkCardData"

const Work = () => {
    return (
        <div className='work-container'>
            <h4 className='project-heading'>Projects</h4>
            <div className='project-container'>
                {WorkCardData.map((val, ind) => {
                    return (
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            view={val.view}
                            source={val.source}
                            text={val.text}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Work