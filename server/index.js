import express, { json } from "express";
import Cors from 'cors';



//App Config
const express = require( 'express' );
const mongoose = require( 'mongoose' );

const app = express();
const port = port.env.PORT || 3001;
const connection_url =
    "mongodb+srv://admin:AlkOpJewTp60xJs4@cluster0.oycmj.mongodb.net/genshinImpact?retryWrites=true&w=majority";



// Middlewares

app.use = (express.json());
app.use = ( Cors() );



//Db Config
//dbPassword AlkOpJewTp60xJs4
mongoose.connect = ( connection_url, {
    useNewUrlParser: true,
    useCreateInder: true,
    useUnifiedTopology: true
});


//API Endpoints






//Listener
app.listen( port, () => { console.log( `running on ${ port } ` ) } );

