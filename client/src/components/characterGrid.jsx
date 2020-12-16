/** @format */

import { CardContent, Card, Grid, CardMedia } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { getChars } from "./api";
import "./characterGrid.css";
import { CircularProgress } from "@material-ui/core";

export const Character = (props) => {
	const [character, setCharacter] = useState([]);

	//useEffect start
	useEffect(() => {
		async function fetchItems() {
			const chars = await getChars();
			setCharacter(chars);
		}
		fetchItems();
		console.log(character);
	}, []);
	//useEffectEnds
	const { history } = props;

	return (
		<div className='characterGrid'>
			<div className='charsDisplay'>
				{character ? (
					<Grid container spacing={2} className='grid_container'>
						{character &&
							character.map((chars) => (
								<Grid item xs={12} sm={4} className='card_grid' key={chars.id}>
									<Card
										onClick={() => history.push(`/${chars._id}`)}
										style={{ backgroundImage: `url(${chars.iconLink})` }}
										className='cards'>
										<CardMedia
											style={{ width: "130px", height: "130px" }}></CardMedia>
										<CardContent className='card_content'></CardContent>
									</Card>
									<h6>{chars.name}</h6>
								</Grid>
							))}
					</Grid>
				) : (
					<CircularProgress />
				)}
			</div>
			<div className="btn_createChar">
				<button className="btnsecondary"
					style={{ fontSize: "Large" }}
					onClick={() => history.push("/create")}>
					create character
				</button>
			</div>
		</div>
	);
};
export default Character;
