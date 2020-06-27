import React, { useState } from 'react'
import HeaderComp from '../component/HeaderComp';
import { Card, Icon, Button} from 'semantic-ui-react';
import SearchByProfile from '../component/SearchByProfile';
import SearchByRepo from '../component/SearchByRepo';

const GitScout = () => {
    
    const [ui, setUI] = useState('')

    return (
        <div>
            <HeaderComp/>

            <Card.Group centered >
                <Card color="teal" raised={true}>
                    <Card.Content style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                    
                    <Card.Header > 
                    <Icon name='github' size ="big"/>
                        Search  Github Repo 
                    </Card.Header>
                    <Card.Description style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}> 
                        This is to help you search github repositories by their name
                            </Card.Description>
                    
                    </Card.Content>
                    <Card.Content extra style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}>
                    <Button animated='vertical' color="#78909c" onClick={()=>setUI(1)}>
                        <Button.Content visible>try</Button.Content>
                        <Button.Content hidden>
                            <Icon name='github' />
                        </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>


                <Card color="teal" raised={true}>
                    <Card.Content style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                    
                    <Card.Header > 
                    <Icon name='github' size ="big"/>
                        Search Github Profiles 
                    </Card.Header>
                    <Card.Description style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}> 
                        This is to help you visualize contribution of a profile
                            to their github account.
                            </Card.Description>
                    
                    </Card.Content>
                    <Card.Content extra style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}>
                    <Button animated='vertical' color="#78909c" onClick={()=>setUI(2)}>
                        <Button.Content visible>try</Button.Content>
                        <Button.Content hidden>
                            <Icon name='github' />
                        </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>

            </Card.Group> 

            <div>
                {ui === 1 ? <SearchByRepo/> 
                : ui === 2 ? <SearchByProfile/> : null}
                </div>       
        </div>
    )
}

export default GitScout;
