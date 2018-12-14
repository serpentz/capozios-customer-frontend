import React from 'react';
import { Redirect } from 'react-router-dom';

const MenuCategoryCard = props => {
    return (
        <div className="card text-center" style={{width: "18rem"}} onClick={() => <Redirect to={`/${props.name}`} /> } >
            <img className="card-img-top" height="250px" src={`https://s3.amazonaws.com/ignaciosbucket/${props.name}.jpg`} alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name[0].toUpperCase() + props.name.slice(1)}</h5>
            </div>
        </div>
    )
}

export default MenuCategoryCard