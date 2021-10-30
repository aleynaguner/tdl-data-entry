import React from 'react';
import { SelectInput } from '../Library/inputs/SelectInput';
import { Users } from '../../data/constants';

const UserPicker = () => {
  return (
    <div className="mb-3">
      <p><strong>Pick a user you want to review</strong></p>
      <SelectInput label="Select user..." options={Users} />
    </div>
  );
}

export { UserPicker };