import React from 'react';
// import LargeCard from '../../components/Cards/LargeCard';
// import MediumCard from '../../components/Cards/MediumCard';
import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';
// import mediumCardImg from '../../assets/mediumCardEx.png';

// const data = [
//   {
//     id: 1,
//     title: 'Dying Light',
//     score: 7.6,
//     coverImage: mediumCardImg,
//   },
//   {
//     id: 2,
//     title: 'Naruto',
//     score: 8.0,
//     coverImage: mediumCardImg,
//   },
//   {
//     id: 3,
//     title: 'Batman Arkham City',
//     score: 9.0,
//     coverImage: mediumCardImg,
//   },
// ];

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainBanner />
      {/*
      <h2>Category</h2>

      {data.map(({ id, title, score, coverImage }) => (
        <MediumCard
          key={id}
          coverImage={coverImage}
          title={title}
          score={score}
        />
      ))}
      <LargeCard />
      */}
    </>
  );
};

export default Home;
