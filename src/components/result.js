import React from 'react';

const Results = (props) =>{
    const { firstname, lastname, email, password, confirmpw } = props.output;
    return(
        <div>
            <h1>Results!</h1>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm PW: {confirmpw}</p>
        </div>
    );
};
export default Results;