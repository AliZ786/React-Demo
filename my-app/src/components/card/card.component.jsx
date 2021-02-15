import React from 'react';

import '../card-list/card-list.styles.css'
export const Card = (props) => (
<div className = 'card-container'>
<img alt ='bleh' src = {'https://robohash.org/${props?set=set2}/>
    <h2>{props.ssUltimateChar.name}</h2>
    <p>{props.ssUltimateChar.email}</p>
</div>

)