const apiKey = process.env.REACT_APP_RAWG_API_KEY;

// Getting the date to get the popular, upcoming and recent games
// const getCurrentMonth = () => {
//   const month = new Date().getMonth() + 1;
//   if (month < 10) {
//     return `0${month}`;
//   }
//   return month;
// };
// const getCurrentDay = () => {
//   const day = new Date().getDate();
//   if (day < 10) {
//     return `0${day}`;
//   }
//   return day;
// };
// const currentYear = new Date().getFullYear();
// const currentMonth = getCurrentMonth();
// const currentDay = getCurrentDay();
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
// const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const allGames = `games?key=${apiKey}`;

// eslint-disable-next-line import/prefer-default-export
export default allGames;
