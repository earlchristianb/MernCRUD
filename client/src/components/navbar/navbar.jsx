/** @format */

import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import "./navbar.css";
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();
	return (
		<div className='header'>
			<IconButton onClick={() => history.push("/")}>
				<HomeTwoToneIcon className='header_icon' fontSize='large' />
			</IconButton>

			<IconButton className="header_logocontainer" onClick={() => history.push("/")}>
				<img
					className='header_logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Genshin_Impact_logo.svg/220px-Genshin_Impact_logo.svg.png'
					alt=''
				/>
			</IconButton>

			<IconButton className='login' onClick={() => history.push("/login")}>
				<AccountCircleIcon className='header_icon' fontSize='large' />
			</IconButton>
		</div>
	);
};

export default NavBar;
