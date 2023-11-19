import React, { useState } from 'react';

const NumberDropdown = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  const numberOptions = [];
  for (let i = 1; i <= 100; i++) {
    numberOptions.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <div>
      <select style={{margin:"10px",height:"30px",width:"100px"}} value={selectedNumber} onChange={handleChange}>
        <option value="">Select a number</option>
        {numberOptions}
      </select>
    </div>
  );
};

export default NumberDropdown;