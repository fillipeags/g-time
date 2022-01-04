import React from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';

const MyGames: React.FC = () => {
  return (
    <div>
      <h1>MyGames</h1>
      <LoadingSpinner isLoading={false} />
    </div>
  );
};

export default MyGames;
