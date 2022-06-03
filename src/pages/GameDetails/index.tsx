import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { id } = useParams();

  return <h1>OH o id aqui: {id}</h1>;
};

export default GameDetails;
