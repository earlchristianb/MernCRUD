/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import './editCharacter.css';

const EditCharForm = ( { character }, {onSubmit} ) => {
   
	
	
	const preloadedValues = character;
    console.log(preloadedValues)
	const { register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});
   

	const submitHandler = handleSubmit( ( data ) => {
	
		
		onSubmit( {data});
		
			console.log( data );
		
    } );
    
	return (

		<form className='form' onSubmit={submitHandler}>
			<div className='form-group'>
				<div className='label_textboxGroup'>
					<label htmlFor='name'>Name:</label>
					<input
						required
						className='form-control'
						ref={register}
						type='text'
						name='name'
						id='name'></input>

					<label htmlFor='vision'>Vision:</label>
					<select
						className='form-control'
						ref={register}
						type='text'
						id='vision'
						name='vision'>
						<option value='Pyro'>Pyro</option>
						<option value='Anemo'>Anemo</option>
						<option value='Electro'>Electro</option>
						<option value='Hydro'>Hydro</option>
						<option value='Cryo'>Cryo</option>
						<option value='Dendro'>Dendro</option>
						<option value='Geo'>Geo</option>
					</select>

					<label htmlFor='title'>Title:</label>
					<input
						required
						className='form-control'
						ref={register}
						type='text'
						id='title'
						name='title'
						placeholder='Title'></input>

					<label htmlFor='weaponType'>Weapon type:</label>
					<select
						className='form-control'
						ref={register}
						name='weaponType'
						id='weaponType'>
						<option value='Bow'>Bow</option>
						<option value='Catalyst'>Catalyst</option>
						<option value='Sword'>Sword</option>
						<option value='Claymore'>Claymore</option>
					</select>

					<label htmlFor='gender'>Gender:</label>
					<select
						className='form-control'
						ref={register}
						type='text'
						name='gender'
						id='gender'>
						<option value='Male'>Male</option>
						<option value='Female'>Female</option>
						<option value='Non-binary'>Non-binary</option>
					</select>
					<label htmlFor='nation'>Nation:</label>
					<select
						className='form-control'
						ref={register}
						type='text'
						name='nation'
						id='nation'>
						<option value='Mondstadt'>Mondstadt</option>
						<option value='Liyue'>Liyue</option>
						<option value='Scheznaya'>Scheznaya</option>
						<option value='Inazuma'>Inazuma</option>
					</select>
					<label htmlFor='constellation'>Constellation:</label>
					<input
						required
						className='form-control'
						ref={register}
						type='text'
						id='constellation'
						name='constellation'
						placeholder=''></input>
					<p>
						<label htmlFor='dob'>Date of Birth:</label>
						<input
							className='form-control'
							ref={register}
							type='text'
							name='dob'
							id='dob'
							placeholder='In words'
							required></input>
					</p>

					<label htmlFor='rarity'>Rarity:</label>
					<select
						required
						className='form-control'
						ref={register}
						type='number'
						name='rarity'
						id='rarity'>
						<option value='4 star'>4 star</option>
						<option value='5 star'>5 star</option>
					</select>

					<label htmlFor='imgurl'>Image Url:</label>
					<input
						className='form-control'
						ref={register}
						type='text'
						name='imgUrl'
						id='imgUrl'
						placeholder='Insert link'></input>

					<label htmlFor='wikilink'>Wiki link:</label>
					<input
						className='form-control'
						ref={register}
						type='text'
						name='wikiLink'
						placeholder='Insert Link'
						id='wikiLink'
					/>
					<label htmlFor='iconLink'>Icon link:</label>
					<input
						required
						className='form-control'
						ref={register}
						type='text'
						name='iconLink'
						placeholder='Insert Link'
						id='iconLink'
					/>
				</div>
			</div>

			<button type='submit' className='btn  m-4 btn-warning'>
                Save Character
			</button>
		</form>
	);
};
export default EditCharForm;
