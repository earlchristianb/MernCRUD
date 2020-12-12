import React from  'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from "@material-ui/core/IconButton";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import './navbar.css';


const NavBar = (props) => {
    const { history } = props;
        return (
            <div className="header">
            <IconButton >
                <HomeTwoToneIcon className="header_icon" fontSize="large" />
            </IconButton>
          
            <IconButton>
                <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Genshin_Impact_logo.svg/220px-Genshin_Impact_logo.svg.png" alt=""/>
                </IconButton>
                
                <IconButton className="login" >
                <AccountCircleIcon    className="header_icon" fontSize="large"/>
            </IconButton>
        </div>
      );
}
 

export default NavBar;