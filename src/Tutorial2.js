import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'; // ES6
import DateTimeField from "react-bootstrap-datetimepicker";
import './bootstrap-datetimepicker.css';

class Tutorial2 extends React.Component {
  render() {
    const Card = (props) => {
      return (
        <div style={{margin: '1em'}}>
          <img src="http://placehold.it/75" style={{verticalAlign: "middle"}}/>
          <div style={{display: "inline-block", marginLeft: 10}}>
            <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>Name here...</div>
            <div>Company Name here...</div>
          </div>
        </div>
      )
    }

    const CardList = (props) => {
      return (
        <div>
          <Card />
        </div>
      );
    }

    return ( 
      <div>
        <CardList />
        <DateTimeField />
      </div>
    );
  }
};

export default Tutorial2;
