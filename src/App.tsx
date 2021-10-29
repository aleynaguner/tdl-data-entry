import React from 'react';
import { ValidateTypePicker } from './components/ValidateTypePicker';
import { UserPicker } from './components/UserPicker';
import { RatingModal } from './components/RatingModal';
import { ReviewPaginationButton } from './components/Library/buttons/index';
import { Summary } from './components/Summary';

const App = () => {
  return (
    <div>
      <ValidateTypePicker />
      <UserPicker />
      <RatingModal />
      <ReviewPaginationButton />
      <Summary />
    </div>
  );
}

export { App };
