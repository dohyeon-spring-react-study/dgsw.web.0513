import React from 'react';

const Num1 = props => {
    return (
        <input value={props.num1} onChange={props.num1handleChange} />
    );
};

Num1.propTypes = {

};

export default Num1;