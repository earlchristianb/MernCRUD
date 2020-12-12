
import React,{useState,useEffect} from 'react';
import './editCharacter.css';
import { charForm } from './charForm';

const editCharacter = () => {

  useEffect( () => {
 
    return () => {
   
    }
  }, [] );

 
  return char ? <charForm char={char}/> : <div> loading..</div>
}

export default editCharacter;

// // <Grid container spacing={ 2 } className={ classes.textboxDisplayContainer } className="text_container">
//                   <Grid item xs={ 12 } sm={ 10} className="text_grid" >
                    
//             </Grid>
//            </Grid>
            