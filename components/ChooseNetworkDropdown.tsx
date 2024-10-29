import { MODEL_VERSIONS, MODELS } from '@/math/models';
import React, { ChangeEvent } from 'react';


function ChooseNetworkDropdown(props: {version: number, changeNetworkVersion: (version: MODEL_VERSIONS) => void; }) {
  // Handle change event
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.changeNetworkVersion(+event.target.value)
  };

  return (
    <div>
      <label className='mr-5 font-mono'>
        Choose a model
      </label>
      <select
        value={props.version}
        onChange={handleChange}
        className='p-2 text-white bg-rose-500 rounded-sm outline-none font-bold'
      >
        {Object.keys(MODELS).map((version: string) => (
          <option key={version} value={version}>v{+version + 1}</option>
        ))}
      </select>
    </div>
  );
}

export default ChooseNetworkDropdown;
