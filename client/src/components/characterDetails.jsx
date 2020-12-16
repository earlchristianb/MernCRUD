/** @format */

import {
	CircularProgress,

	Link,
	Card,
	CardContent,
	
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { getChar } from "./api";
import "./characterDetails.css";
import { useHistory } from "react-router-dom";

const CharacterDetails = (props) => {
	const { match } = props;
	const { params } = match;
	const { id } = params;
	const history = useHistory();

	const [char, setChar] = useState(null);

	useEffect(() => {
		const fetchChar = async () => {
			const result = await getChar(id);
			console.log(result);
			setChar(result);
		};
		fetchChar();
		console.log(char);
	}, []);

	return char ? (
		<React.Fragment>
			<div className='charDetails'>
				<div className='details_container'>
					<Card>
						<CardContent>
							<label>
								<h3>Hi! I am {char.name}</h3>
							</label>

							<p>
								<h6>Weapon type: {char.weaponType}</h6>
							</p>
							<p>
								<h6>Vision: {char.vision}</h6>
							</p>
							<p>
								<h6>Title: "{char.title}"</h6>
							</p>
							<p>
								<h6>Gender: {char.gender}</h6>
							</p>
							<p>
								<h6>Birthday: {char.dob}</h6>
							</p>
							<p>
								<h6>Constellation: {char.constellation}</h6>
							</p>
							<p>
								<h6>Nation: {char.nation}</h6>
							</p>
							<p>
								<h6>Rarity: {char.rarity}</h6>
							</p>
							<p>
								<h6>
									Go to
									<Link>
										<a href={char.wikiLink}> {char.name} </a>
									</Link>
									Wikipage
								</h6>
							</p>
						</CardContent>
					</Card>
				</div>
				<div className='picture_container'>
					<img src={char.imgUrl} alt={char.name}></img>
				</div>
			</div>
			<div className='btn_editChar'>
				<button className="btn btn-secondary btn-warning" onClick={() => history.push(`/edit/${char._id}`)}>Edit Character</button>
			</div>
		</React.Fragment>
	) : (
		<CircularProgress />
	);
};
export default CharacterDetails;
/* /* <button className="btn btn-primary m-3" onClick={ () => history.push(`/edit/:`) }> editCharacter </button> */
