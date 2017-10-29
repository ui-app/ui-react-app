import React, {Component} from 'react';

function View(props) {
    return (
      <div className="View">
        <b>Name: </b>
        {props.name}
        <br />
        <b>Age: </b>
        {props.age}
      </div>
    );
}

export default View;
