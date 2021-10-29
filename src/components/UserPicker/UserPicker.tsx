import React from 'react';
import { SelectInput } from '../Library/inputs/SelectInput';

const UserPicker = () => {
  const users = [
    {id:0, name:"Aleyna Guner"},
    {id:1, name:"Aleyna Guner"},
    {id:2, name:"Aleyna Guner"},
    {id:3, name:"Aleyna Guner"},
    {id:4, name:"Aleyna Guner"},
    {id:5, name:"Aleyna Guner"},
  ]

  return (
    <div className="mb-3">
      <p>Pick a user you want to review</p>
      <SelectInput label="Select user..." options={users} />
    </div>
  );
}

export { UserPicker };