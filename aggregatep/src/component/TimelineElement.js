import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Icon} from 'semantic-ui-react';

const TimelineElement = (repo) => {
    let repos = repo.repositories;
    
    return(
        <VerticalTimeline>
            { repos.map((value,index)=>{
                        return (
                            <VerticalTimelineElement
                                    key = {repos[index].id}
                                    className="vertical-timeline-element--work "
                                    contentStyle={{ display:"flex",flexDirection:"column",background:"white", color: 'black' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    date={value.created_at.slice(0,10).split("-").reverse().join("-")}
                                    iconStyle={{display:"flex", background: "#37474f", justifyContent:"center",alignItems:"center",color: '#fff' }}
                                    icon={<Icon size="big" name ="github"/>}
                                >
                                    <div className="vertical-timeline-element-title baseStyle" style={style.baseStyle}>{value.name}</div>
                                    
                                    <div style = {{ paddingTop:"10px",paddingBottom:"10px",}}>
                                      {value.description}
                                    </div>
                                    
                                    <div  style={style.bstyle}>
                                
                                            <a href={value.html_url} className="header" target="_blank" rel='noopener noreferrer'>
                                                View Source Code
                                            </a>
                                    </div>
                            </VerticalTimelineElement>
                        ) 
                    })
            }
                    
  </VerticalTimeline>
    )
}

const style = {
    baseStyle:{
        fontWeight:"bold",
        display:"flex",
        flexDirection:"",
        flexWrap:"wrap",
        paddingTop:"10px",
        paddingBottom:"10px",

    },
    bstyle:{
        maxWidth:"140px",
        border:"1px solid #000000",
        borderRadius:"1.5em",
        textAlign:"center",
        "&:hover": {
            background: "#efefef"
          }
    }
    
    
}

export default TimelineElement;

