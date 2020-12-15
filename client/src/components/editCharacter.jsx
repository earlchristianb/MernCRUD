
// import React,{useState,useEffect} from 'react';
// import { useRouteMatch } from 'react-router-dom';
// import './editCharacter.css';



// const editCharacter = () => {
//   const match = useRouteMatch();
//   const [ chars, setChars ] = useState( [] );
    
//   useEffect( () => {
//      const fetchItem = async () => {
//       const result = getChar( match.params.id )
//       setChars( result );
//     }
//     fetchItem();
  
//   }, )
//   const onSubmit = ( data ) => {
//     alert(JSON.stringify(data))
//   }

 
//   return chars ? (
//    <div className="container">
//         <div className="mt-3">
//           <h3>Create New Character</h3>
//           <form className="form" onSubmit={onSubmit} >
//                         <div className="form-group">
//                             <p>
                               
//                                 <label htmlFor="id">Id:</label>
//                                 <input className="form-control" ref={ register } type="text" name="id" id="id" placeholder="id"></input>
                                
//                                 <label htmlFor="name">Name:</label>
//                                 <input className="form-control" ref={ register } type="text" name="name" id="name" placeholder="Character Name"></input>
              
//                                 <label>Vision:</label>
//                                 <select className="form-control" ref={ register } type="text" id="vision" name="vision">
//                                     <option value="pyro">Pyro</option>
//                                     <option value="anemo">Anemo</option>
//                                     <option value="electro">Electro</option>
//                                     <option value="hydro">Hydro</option>
//                                     <option value="cryo">Cryo</option>
//                                     <option value="dendro">Dendro</option>
//                                     <option value="geo">Geo</option>
//                                 </select>
         
//                                 <label htmlFor="title">Title:</label>
//                                 <input className="form-control" ref={ register } type="text" name="title" placeholder="Title"></input>
              
//                                 <label>Weapon type:</label>
//                                 <select className="form-control" ref={ register } name="weapon_type" id="weaponType">
//                                     <option value="bow">Bow</option>
//                                     <option value="catalyst">Catalyst</option>
//                                     <option value="sword">Sword</option>
//                                     <option value="claymore">Claymore</option>
//                                 </select>
           
//                                 <label htmlFor="gender">Gender:</label>
//                                 <select className="form-control" ref={ register } type="text" name="text_gender" id="gender" >
//                                     <option value="saab">Male</option>
//                                     <option value="mercedes">Female</option>
//                                     <option value="mercedes">Non-binary</option>
//                                 </select>
//                                 <br>
//                                 </br>
//                                 <br>
             
//                                 </br>
//                                 <br>
//                                 </br>
                  
//                                 <label htmlFor="dob">Date of Birth:</label>
//                                 <input className="form-control" ref={ register } type="text" name="text_dob" id="dob" placeholder="In words"></input>
//                                 <label htmlFor="rarity">Rarity:</label>
//                                 <input className="form-control" ref={ register } type="number" name="text_rarity" id="rarity" min="4" max="5" placeholder=".."></input>
//                                 <label htmlFor="constellation">Constellation:</label>
//                                 <input className="form-control" ref={ register } type="text" id="constellation" name="text_constellation" placeholder=""></input>

//                                 <label htmlFor="image">Image Url:</label>
//                                 <input className="form-control" ref={ register } type="text" name="text_image" id="imageUrl" placeholder="Insert link"></input>
           
//                                 <label htmlFor="wikilink">Wiki link:</label>
//                                 <input className="form-control" ref={ register } type="text" name="wikiLink" placeholder="Insert Link" id="wikiLink" />
                        
//                             </p>
//                         </div>
//                         <div></div>
//                             <button type="submit" className="btn  m-4 btn-warning" >Save Character</button>

                       
           
//                     </form>        
//         </div>
//            </div>
//   ): (<div> <h3> loading </h3></div>)
   
  
 
// }

// export default editCharacter;

// // // // <Grid container spacing={ 2 } className={ classes.textboxDisplayContainer } className="text_container">
// // //                   <Grid item xs={ 12 } sm={ 10} className="text_grid" >
                    
// // //             </Grid>
// // //            </Grid>
            