import React from 'react';

const List = ({ items }) => (
  <ul>
    <h1>Hello List</h1>
    {
      items && items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
  );

export default List;
