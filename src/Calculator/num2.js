import React from 'react';

const Num2 = props => {
    return (
        <input value={props.num2} onChange={props.num2handleChange} />
    );
};

Num2.propTypes = {

};


export default Num2;