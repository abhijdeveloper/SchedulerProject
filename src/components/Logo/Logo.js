import React from 'react';

import scheduleLogo from '../../assets/images/ssc.png'

import classes from './Logo.css'
const logo = (props) => (
     <div className={classes.Logo}> 
         <img src={scheduleLogo} alt="logo"/>
     </div>
);

export default logo;