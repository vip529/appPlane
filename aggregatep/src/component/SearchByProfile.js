import React, { useState } from "react";
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./TimelineElement";
import { Card, Image } from "semantic-ui-react";

const SearchByProfile = () => {
  const [data, setData] = useState({});
const [repositories, setRepositories] = useState([]);
  const [username, setUsername] = useState("");
  

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repo = await fetch(profileJson.repos_url);
    const repoJson = await repo.json();
    // console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
    
  };

  
  return (
    <div>
      <div style={{ display:"flex",justifyContent:"center",flex:1,padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}>

                <i className="github icon"></i>
            Search
          </button>
          <div style= {{display:"flex",flexDirection:"row",}}>
          {repositories.length >0 && <div style={{paddingTop:"30px",paddingBottom:"30px"}}>
           <Card color="teal" raised={true} >
                    <Card.Content style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}>
                    <Image
                        floated='right'
                        size='mini'
                        src={data.avatar_url}
                        alt={data.avatar_url}
                      />
                    
                    <Card.Header > 
                    {data.name}
                    </Card.Header>
                    <Card.Description style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}> 
                        {data.bio}
                            </Card.Description>
                    
                    </Card.Content>
                    <Card.Content extra style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}>
                    {data.location}
                    </Card.Content>
                </Card>

              </div>}
      
          <div style={{paddingTop:"30px"}}>
              {repositories.length >0  && <TimelineElement  repositories={repositories}/> }
          </div>
        </div>
            
        </div>
      </div>
    </div>
  );
};

export default SearchByProfile;
