import React, { useState } from 'react';
import data from './data.js';
import { Col } from 'react-bootstrap';

const CompShoes = () => {

    let[shoes, setShoes] = useState(data);
    return (
        <div>
            <Col sm>
            <img src="/shoes1.jpg" width="80%" alt="" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </Col>
        </div>
    );
};

export default CompShoes;