import React, { Component } from 'react';

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
      <CardList />
    );
  }
};

export default Tutorial2;
