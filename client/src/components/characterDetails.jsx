import React, {useState,useEffect} from 'react';
import axios from 'axios';





const CharacterDetails = ( props ) => {
  
  const { history, match } = props;
  const [ specificChar, setspecificChar ] = useState();
  const { params } = match;
  const { id } = params;



  useEffect( () => {
     
     async function fetchData () {
      const req = await axios.get( `/${id}` );
      
      setspecificChar( req.data );
    }
    fetchData();
      console.log( specificChar );
  
 
    
 
  }, [] );





    

    
  return (

    <div className="charDetails">
      {specificChar && specificChar.map( ( char ) => (
        <div key={ char.id } className="details">
          
          <h3>{ char.name }</h3>
          </div>
     ) ) }
    </div>
  )

  
    
}
export default CharacterDetails;
