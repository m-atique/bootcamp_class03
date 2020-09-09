import React from 'react';
import App from './App';


function Courses(pros){
    return(
        <div>
            <h1>We are Offering Online course of {pros.Online}</h1>
            <h1>We are Offering onsite course of {pros.Onsite}</h1>
        </div>
    );
}
export default Courses;