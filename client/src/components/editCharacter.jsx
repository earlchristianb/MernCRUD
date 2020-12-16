
import React from "react";
import "./createCharacter.css";

import { createChars } from "./api";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export const EditCharacter = () => {
	const history = useHistory();
	const { register, handleSubmit } = useForm({
		defaultValues: {},
	});
	const onSubmit = handleSubmit(async (data) => {
		await createChars(data);
		history.push("/");
	});

	return (
		<div className='container'>
			<h3>Edit Character</h3>
			<br></br>
			<div className='mt-3'>
				<form className='form' onSubmit={onSubmit}>
					<div className='form-group'>
						<p>
							<label htmlFor='name'>Name:</label>
							<input
								required
								className='form-control'
								ref={register}
								type='text'
								name='name'
								id='name'
								placeholder='Character Name'></input>

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
							<label htmlFor='gender'>Nation:</label>
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
							<input
								required
								className='form-control'
								ref={register}
								type='number'
								name='rarity'
								id='rarity'
								min='4'
								max='5'
								placeholder='..'></input>

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
						</p>
					</div>

					<button type='submit' className='btn  m-4 btn-warning'>
						Update Character
					</button>
				</form>
			</div>
		</div>
	);
};
export default EditCharacter;
