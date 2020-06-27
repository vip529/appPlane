import React from "react";
import { List, Loader} from 'semantic-ui-react'

// https://api.github.com/search/repositories?q=html
const SearchByRepo = (props) => {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    if (!inputValue) {
      return;
    }

    setIsLoading(true);

    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [inputValue]);

  // const onChangeHandler = (e) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <div >
      <div className="ui search" style={{ display:"flex",justifyContent:"center",flex:1,padding: 20 }}>
        
      <form
        onSubmit={evt => {
          evt.preventDefault();
          setInputValue(evt.target.elements.query.value);
        }}
      >
        <div className="ui icon input">
            <i className="search icon"></i>
            <input
              type="text"
              className="prompt"
              placeholder="search repositories here..."
              name="query"
            />
          </div>

      </form>
      </div>
      <div >
          {isLoading && <Loader active inline='centered' >Loading</Loader>
          }
          {error && (
            <div style={{ display:"flex",justifyContent:"center",flex:1,padding: 20 }}>
              Unexpected Error Occurred fetching data. Please try again later!
            </div>
          )}
      </div>


      <div  style={{ display:"flex",justifyContent:"center",flex:1,padding: 40 }}>
      <List divided animated={true} >
        {repos.map(repo => {
          return (
            <List.Item verticalAlign='middle'>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Header as='a' href={repo.html_url} target="_blank">{repo.name}</List.Header>
              <List.Description >{repo.description}</List.Description>
            </List.Item>
          );
        })}
      </List>
      </div>
    </div>
  );
}

export default SearchByRepo;
