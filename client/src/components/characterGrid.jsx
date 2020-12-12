    import { CardContent,Card, Grid, Typography, CardMedia, Button } from '@material-ui/core';
    import React,{useState, useEffect} from 'react';
    import axios from './axios';
    import './characterGrid.css';
    import { makeStyles } from '@material-ui/core/styles';
    import { CircularProgress } from '@material-ui/core';
    





    



    const Character = (props) => {


        const [ character, setCharacter ] = useState( null );
    

        const useStyles = makeStyles( {
          charDisplayContainer: {
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }
        } );
        const classes = useStyles();
      // initialization of the state
    
      
      //useEffect start
      useEffect( () => {

        async function fetchData () {
          const req = await axios.get( `/genshin/chars`);
          setCharacter( req.data );
        }
        fetchData();
      }, [] );
      //useEffectEnds
      const { history } = props;

      return (

        <div className="btnCreate">
           <div className="charsDisplay">
          {character ? (
            <Grid container spacing={ 2 } className={ classes.charDisplayContainer } className="grid_container" >
            
            { character && character.map( ( chars ) => (
            <Grid item xs={ 12 } sm={ 4 } className="card_grid" >
                <Card onClick={() => history.push(`/${chars.id}`)} key={ chars.id} style={ { backgroundImage: `url(${chars.imgUrl})` } } className="cards" >
                  <CardMedia style={{width: "130px", height: "130px"}}>
                 
                  </CardMedia>
                  <CardContent className="card_content">
                
                  </CardContent>
                
                </Card>
            <h3>{ chars.name } {chars.id}</h3>
          </Grid>
          ))}
        </Grid>
          ) : ( <CircularProgress /> ) }
          </div>
          <button className="btn_createChar" style={ { fontSize: "Large" } }onClick={()=> history.push('/create')}>create character</button>
        </div>
       
         
      );
    }
    export default Character;

