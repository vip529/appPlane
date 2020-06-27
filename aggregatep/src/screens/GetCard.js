import React, { useState } from 'react'
import HeaderComp from '../component/HeaderComp';
import { Card, Icon, Form, Button } from 'semantic-ui-react';

const GetCard = () => {

    const [cardData, setcardData] = useState({})
    const[ui,setUi] = useState(0);
    const submitHandler = (e) => {
        setUi(1);
        e.preventDefault();
        const data = new FormData(e.target);
        setcardData({"first_name":data.get("firstname"),
                    "last_name":data.get("lastname"),
                    "post_topic":data.get("posttopic"),
                    "post_desc":data.get("postdesc"),
                    "post_link":data.get("postlink"),
                    "post_auth":data.get("postauth")})

       
        
      };
    return (
        <div>
            <HeaderComp/>
            {!ui && <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Form onSubmit={submitHandler}>
                    <Form.Group widths='equal'>
                        <Form.Input  label='First name' name="firstname" placeholder='First name' />
                        <Form.Input  label='Last name' name="lastname" placeholder='Last name' />
                    </Form.Group>

                    <Form.TextArea name="posttopic"label='Post topic' placeholder='Post topic' />
        

                    <Form.TextArea name="postdesc" label='Post Brief Description' placeholder='Post Description' />
                    
                    <Form.Group widths='equal'>
                        <Form.Input  label='Post Link' name="postlink" placeholder='Embed the link to original post' />
                        <Form.Input   name="postauth" label='Post Author' placeholder='author of  original post'/>
                    </Form.Group>

                    <Button type='submit'>
                    <i className="vcard icon"></i>Generate</Button>
                </Form>
            </div>}


            {JSON.stringify(cardData) !== '{}' &&
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"30px"}}>
                <Card color="olive" raised={true} link={true} href={cardData.post_link} target="_blank" rel='noopener noreferrer' >
                        <Card.Content style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                        
                        <Card.Header > 
                        <Icon name='image' size ="big"/>
                            {`${cardData.first_name} ${cardData.last_name} `}
                            {cardData.post_topic}
                        </Card.Header>
                        <Card.Description style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}> 
                            {cardData.post_desc}
                
                        </Card.Description>
                        
                </Card.Content>
                </Card>
                <Button onClick={()=>{
                    setUi(0)
                    setcardData({}) }}>Generate other card</Button>
            </div>}
            
            
        </div>
    )
}

export default GetCard;
