import React from 'react';
import styled from 'styled-components';

import Content from './Content'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Title>Hello world!</Title>
        <Content/>
      </div>
    );
  }
}
