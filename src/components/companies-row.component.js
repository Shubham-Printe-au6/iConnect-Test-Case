import React from 'react';
import Select from 'react-select';
import {Link} from "react-router-dom"


const CompanyRow = (props) => {
    return (
                <tr>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{props.number}</td>
                <td>{props.email}</td>
                <td>{props.logo}</td>
                <td>
                <div className="dropdown">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown">STATES
                    <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        {props.states.map((state, index) => {
                            return(
                                <li key={index}>{state}</li>
                                );
                        })}
                    </ul>
                </div>
                </td>
                <td>
                <div className="dropdown">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown">CITIES
                    <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        {props.cities.map((city, index) => {
                            return(
                                <li key = {index}>{city}</li>
                                );
                        })}
                    </ul>
                </div>                    
                </td>
                <td>
                    <button className="btn btn-sm btn-warning"> 
                        <Link to={`/edit/${props.id}`}>
                            EDIT
                        </Link>
                    </button>
                </td>

                </tr>

    )
}

export default CompanyRow;


{/* <li><a href="#">HTML</a></li>
<li><a href="#">CSS</a></li>
<li><a href="#">JavaScript</a></li> */}
