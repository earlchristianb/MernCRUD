import React, {useState,useEffect} from 'react';
import { getChar} from './api';


const CharacterDetails = (props) => {

  const { match } = props;
  const { params } = match;
  const { id } = params;

  const [ char, setChar ] = useState(null);


  useEffect( () => {
  const  fetchChar = async () => {
    const result = await getChar( id );
    console.log( result );
      setChar( result );
    }
    fetchChar();
    console.log( char );
      
  },[])
 
  return (
    char ? (
      <div key={ char._id } className="charDetails">
        <h3>{ char.name }
        </h3>
      </div>
    ) : null 


  )
  
    
}
export default CharacterDetails;
  /* /* <button className="btn btn-primary m-3" onClick={ () => history.push(`/edit/:`) }> editCharacter </button> */