import React, {Component} from 'react';
import { Panel, Grid, Row, Col  } from 'react-bootstrap';

function View(props) {
    return (
      <div className="View">

      <Grid>
       <Row className="show-grid">
         <Col md={1}>
           <Panel header="Name">
            {props.name}
           </Panel>
          </Col>
          <Col md={1}>
          <Panel header="Age">
           {props.age}
          </Panel>
          </Col>
      </Row>
      </Grid>
      </div>
    );
}

export default View;
