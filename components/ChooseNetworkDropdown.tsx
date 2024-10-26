import { MODEL_VERSIONS, MODELS } from '@/math/models';
import React, { ChangeEvent } from 'react';


function ChooseNetworkDropdown(props: {version: number, changeNetworkVersion: (version: MODEL_VERSIONS) => void; }) {
  // Handle change event
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.changeNetworkVersion(+event.target.value)
  };

  const parsedVersion = `v${props.version + 1}`;
  return (
    <div style={{ marginTop: '20px' }}>
      <label style={{ marginRight: '10px' }}>
        Choose a model
      </label>
      <select
        value={props.version}
        onChange={handleChange}
        style={{
          padding: '5px 10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          color: "black"
        }}
      >
        {Object.keys(MODELS).map(version => (
          <option key={version} value={version}>v{+version + 1}</option>
        ))}
      </select>

      {/* Display the selected value */}
      <div style={{ marginTop: '10px' }}>
        Model: <strong>{parsedVersion}</strong>
      </div>
    </div>
  );
}

export default ChooseNetworkDropdown;
