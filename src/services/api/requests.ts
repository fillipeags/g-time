import { currentDate, lastYear, nextYear } from '../../utils/dateFilters';

const apiKey = process.env.REACT_APP_RAWG_API_KEY;

const requests = {
  popularGames: `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`,
  upcomingGames: `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`,
  newGames: `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`,
  searchGame: `games?key=${apiKey}&search=`,
  getSpecificGame: `games/:id?key=${apiKey}`,
  gameByGenre: `games?key=${apiKey}&genres=`,
  gamesByPlatform: `games?key=${apiKey}&platforms=`,
  gameDetails: `games?key=${apiKey}`,
  gameScreenshots: '/screenshots',
  gameGenres: `genres`,
  gamesPlatforms: `platforms`,
  gameTrailer: `movies?key=${apiKey}`,
};

export default requests;
