'use strict';
// This script fetches data from a JSON file and updates the HTML elements with the current and previous timeframes for different activities.
// It also handles button clicks to switch between daily, weekly, and monthly views.
// The script uses async/await to handle asynchronous operations and event listeners to respond to button clicks.
// The script is designed to work with a specific HTML structure and CSS classes.
// The script starts by selecting the necessary HTML elements using querySelector.
// It selects the buttons for daily, weekly, and monthly views, as well as the current and previous timeframes for each activity card.
// The script then defines three functions: getDailyData, getWeeklyData, and getMonthlyData.
// Each function fetches data from the JSON file and updates the corresponding HTML elements with the current and previous timeframes.
// It also adds an active class to the clicked button and removes it from the others.

//buttons
const buttonDaily = document.querySelector('#daily');
const buttonWeekly = document.querySelector('#weekly');
const buttonMonthly = document.querySelector('#monthly');

//Activity card work
const workCurrent = document.querySelector('#work-current');
const workPrevious = document.querySelector('#work-previous');

//Activity card play
const playCurrent = document.querySelector('#play-current');
const playPrevious = document.querySelector('#play-previous');

//Activity card study
const studyCurrent = document.querySelector('#study-current');
const studyPrevious = document.querySelector('#study-previous');
//Activity card exercise
const exerciseCurrent = document.querySelector('#exercise-current');
const exercisePrevious = document.querySelector('#exercise-previous');
//Activity card social
const socialCurrent = document.querySelector('#social-current');
const socialPrevious = document.querySelector('#social-previous');
//Activity card self-care
const selfCareCurrent = document.querySelector('#selfcare-current');
const selfCarePrevious = document.querySelector('#selfcare-previous');

//callback to get daily data
const getDailyData = async () => {
  const response = await fetch('data.json');
  const data = await response.json();

  //Work

  workCurrent.textContent = `${data[0].timeframes.daily.current}`;
  workPrevious.textContent = `Yesterday - ${data[0].timeframes.daily.previous}`;

  //Play
  playCurrent.textContent = `${data[1].timeframes.daily.current}`;
  playPrevious.textContent = `Yesterday - ${data[1].timeframes.daily.previous}`;

  //Study
  studyCurrent.textContent = `${data[2].timeframes.daily.current}`;
  studyPrevious.textContent = `Yesterday - ${data[2].timeframes.daily.previous}`;

  //Exercise
  exerciseCurrent.textContent = `${data[3].timeframes.daily.current}`;
  exercisePrevious.textContent = `Yesterday - ${data[3].timeframes.daily.previous}`;

  //Social
  socialCurrent.textContent = `${data[4].timeframes.daily.current}`;
  socialPrevious.textContent = `Yesterday - ${data[4].timeframes.daily.previous}`;

  //Self-care
  selfCareCurrent.textContent = `${data[5].timeframes.daily.current}`;
  selfCarePrevious.textContent = `Yesterday - ${data[5].timeframes.daily.previous}`;

  // Set active class on the daily button
  buttonDaily.classList.add('active');
  // Remove active class from other buttons
  buttonWeekly.classList.remove('active');
  buttonMonthly.classList.remove('active');
};

//callback to get weekly data
const getWeeklyData = async () => {
  const response = await fetch('data.json');
  const data = await response.json();

  //Work

  workCurrent.textContent = `${data[0].timeframes.weekly.current}`;
  workPrevious.textContent = `Last Week - ${data[0].timeframes.weekly.previous}`;

  //Play
  playCurrent.textContent = `${data[1].timeframes.weekly.current}`;
  playPrevious.textContent = `Last Week - ${data[1].timeframes.weekly.previous}`;

  //Study
  studyCurrent.textContent = `${data[2].timeframes.weekly.current}`;
  studyPrevious.textContent = `Last Week - ${data[2].timeframes.weekly.previous}`;

  //Exercise
  exerciseCurrent.textContent = `${data[3].timeframes.weekly.current}`;
  exercisePrevious.textContent = `Last Week - ${data[3].timeframes.weekly.previous}`;

  //Social
  socialCurrent.textContent = `${data[4].timeframes.weekly.current}`;
  socialPrevious.textContent = `Last Week - ${data[4].timeframes.weekly.previous}`;

  //Self-care
  selfCareCurrent.textContent = `${data[5].timeframes.weekly.current}`;
  selfCarePrevious.textContent = `Last Week - ${data[5].timeframes.weekly.previous}`;

  // Set active class on the weekly button
  buttonWeekly.classList.add('active');
  // Remove active class from other buttons
  buttonDaily.classList.remove('active');
  buttonMonthly.classList.remove('active');
};

//callback to get monntly data
const getMonthlyData = async () => {
  const response = await fetch('data.json');
  const data = await response.json();

  //Work

  workCurrent.textContent = `${data[0].timeframes.monthly.current}`;
  workPrevious.textContent = `Last Month - ${data[0].timeframes.monthly.previous}`;

  //Play
  playCurrent.textContent = `${data[1].timeframes.monthly.current}`;
  playPrevious.textContent = `Last Month - ${data[1].timeframes.monthly.previous}`;

  //Study
  studyCurrent.textContent = `${data[2].timeframes.monthly.current}`;
  studyPrevious.textContent = `Last Month - ${data[2].timeframes.monthly.previous}`;

  //Exercise
  exerciseCurrent.textContent = `${data[3].timeframes.monthly.current}`;
  exercisePrevious.textContent = `Last Month - ${data[3].timeframes.monthly.previous}`;

  //Social
  socialCurrent.textContent = `${data[4].timeframes.monthly.current}`;
  socialPrevious.textContent = `Last Month - ${data[4].timeframes.monthly.previous}`;

  //Self-care
  selfCareCurrent.textContent = `${data[5].timeframes.monthly.current}`;
  selfCarePrevious.textContent = `Last Month - ${data[5].timeframes.monthly.previous}`;

  // Set active class on the monthly button
  buttonMonthly.classList.add('active');
  // Remove active class from other buttons
  buttonDaily.classList.remove('active');
  buttonWeekly.classList.remove('active');
};

buttonDaily.addEventListener('click', getDailyData);
buttonWeekly.addEventListener('click', getWeeklyData);
buttonMonthly.addEventListener('click', getMonthlyData);

// Set default view to weekly data when page loads
window.onload = getWeeklyData;
