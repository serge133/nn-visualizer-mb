import { MODEL_VERSIONS, MODELS } from '@/math/models';
import React, { ChangeEvent } from 'react';


function ChooseNetworkDropdown(props: {version: number, changeNetworkVersion: (version: MODEL_VERSIONS) => void; }) {
  // Handle change event
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.changeNetworkVersion(+event.target.value)
  };

  return (
    <div className='mb-5'>
      <label style={{ marginRight: '10px' }}>
        Choose a model
      </label>
      <select
        value={props.version}
        onChange={handleChange}
        className='p-2 text-white bg-rose-500 rounded-sm outline-none font-bold'
      >
        {Object.keys(MODELS).map(version => (
          <option key={version} value={version}>v{+version + 1}</option>
        ))}
      </select>
    </div>
  );
}

export default ChooseNetworkDropdown;
