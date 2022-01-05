import {
  currentDate,
  lastYear,
  nextYear,
} from '../../utils/date-query-request';

const apiKey = process.env.REACT_APP_RAWG_API_KEY;

export const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const searchGame = `games?key=${apiKey}&search=`;
export const gameByGenre = `games?key=${apiKey}&genres=`;
export const gamesByPlatform = `games?key=${apiKey}&platforms=`;
export const gameDetails = 'games/';
export const gameScreenshots = '/screenshots';
export const gameGenres = `genres`;
export const gamesPlatforms = `platforms`;
