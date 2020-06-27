import React from 'react'
import HeaderComp from '../component/HeaderComp'
import { Card,Icon } from 'semantic-ui-react'


const Homepage = () => {
    return (
        <div>
            <HeaderComp/>
            <div style={{paddingTop:"30px"}}>

            
            <Card.Group centered >
                <Card color="olive" link={true} raised={true} href='/gitscout'>
                    <Card.Content style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                    
                    <Card.Header > 
                    <Icon name='github' size ="big"/>
                          Git Scout
                    </Card.Header>
                    <Card.Description style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}> 
                        Search github repositories by their name or visualize contribution of a person to his github profile in a timeline view
                            </Card.Description>
                    
                    </Card.Content>
                </Card>


                <Card color="teal" link={true} raised={true} href='/card' >
                    <Card.Content style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                    
                    <Card.Header > 
                    <Icon name="vcard" size ="big"/>
                        Get a  Card
                    </Card.Header>
                    <Card.Description style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}> 
                        Creates a simple social card based on info provided
                            </Card.Description>
                    
                    </Card.Content>
                </Card>

                <Card color="orange" link={true} raised={true} href='/image'>
                    <Card.Content style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                    
                    <Card.Header > 
                    <Icon name="images outline" size ="big"/>
                        Image Effects
                    </Card.Header>
                    <Card.Description style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}> 
                        Use opencv to draw contour and apply various filters on your image with real-time capture .
                    </Card.Description>
                    
                    </Card.Content>
                </Card>

            </Card.Group> 
            </div>
            
        </div>
    )
}

export default Homepage;