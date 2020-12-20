/** @format */

import React, { useState, useEffect } from "react";
import "../createCharacter/createCharacter.css";
import { getChar, updateChar} from "../api/api";
import { useHistory } from "react-router-dom";
import EditCharForm from './editCharform';
import { CircularProgress } from "@material-ui/core";

export const EditCharacter = ( props ) => {
	const [ char, setChar ] = useState( null );
	const { match } = props;
	const { params } = match;
	const { id } = params;
	const history = useHistory();

	
	
	useEffect( () => {
		const fetchChar = async () => {
			const result = await getChar( id );
			console.log( result );
			setChar( result );
		};
		fetchChar();
	}, [] );	

	const onSubmit = (async ( data ) => {
		await updateChar( data, match.params.id );
		history.push("/");
	});

	return char ? (
		<div className='container'>
			<div className='mt-3'>
					<h3>Update New Character</h3>
				<EditCharForm character={char} onSubmit={ onSubmit }/>
			</div>
		</div>
			
	
	):<div><CircularProgress /></div>
	
	

};
export default EditCharacter;
