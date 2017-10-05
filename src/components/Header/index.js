import React from 'react';

var objekt = {
  properti: "123",
  test: "test"
}

//destrukturiranje
var { properti, test } = object;

const Header = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
);

export default Header;
