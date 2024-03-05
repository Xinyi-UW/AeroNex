import React from 'react';

export default function DataOutput({data}) {
  return (
    <div>
      <h3>Detected Objects</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.type}: {item.count}</li>
        ))}
      </ul>
    </div>
  );
}
