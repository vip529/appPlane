import React from 'react'
import timelineData from '../utils/data'
import TimelineItem from '../component/TimelineItem'
import '../component/styles/timelineStyle.css'


const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container ">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;
