const data = [
  {
    id: 1,
    title: 'Dying Light',
    score: 7.6,
    coverImage:
      'https://www.mobygames.com/images/covers/l/298981-dying-light-playstation-4-front-cover.jpg',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 2,
    title: 'Naruto UNS4',
    score: 8.0,
    coverImage:
      'https://image.api.playstation.com/cdn/UP0700/CUSA02412_00/2pfYJIXY2aTnMUe8eSET7YaxkOcUTbfm.png',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 3,
    title: 'Batman Arkham City',
    score: 9.0,
    coverImage:
      'data:image/jpeg;base64,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',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 4,
    title: 'Battlefield 1',
    score: 9.0,
    coverImage:
      'https://images-na.ssl-images-amazon.com/images/I/91tAi5bBssL.jpg',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 5,
    title: 'Horizon Zero Dawn',
    score: 9.0,
    coverImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-g40vScSW7CuZKT3M8Rx1dFzk8tbhmqB-GwB77iPqoELNk13knqkSxIRLNMvgTL5bzY&usqp=CAU',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 6,
    title: 'Forza Horizon',
    score: 9.0,
    coverImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/forzahorizon5-keyart-vert-rgb-final-1629720353.jpg?resize=320:*',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 7,
    title: 'Red Dead Redemption',
    score: 7.6,
    coverImage:
      'https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 8,
    title: 'DeathLoop',
    score: 8.0,
    coverImage:
      'https://image.api.playstation.com/vulcan/ap/rnd/202007/1617/Fv4asO4zbdqL83hiL9COTlWZ.png',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 9,
    title: 'Assassins Creed Valhalla',
    score: 9.0,
    coverImage:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3dc99197430171.5ec4f32669f2f.jpg',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 10,
    title: 'Trials Fusion',
    score: 9.0,
    coverImage:
      'https://www.mobygames.com/images/covers/l/392085-trials-fusion-xbox-one-front-cover.png',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 11,
    title: 'Mario Kart 8',
    score: 9.0,
    coverImage:
      'https://external-preview.redd.it/eQDrGAx61Azyz9TARuuDVNrQavH3TSru-EvPZjTbTmU.jpg?auto=webp&s=78c39bb611859451f6332a5fab109d6fd330ec82',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 12,
    title: 'Dark Souls',
    score: 9.0,
    coverImage:
      'https://sm.ign.com/t/ign_br/screenshot/d/dark-souls/dark-souls-1-concept-cover_ywnn.1080.jpg',
    summary:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
];

export default data;
