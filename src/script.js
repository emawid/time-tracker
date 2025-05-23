'use strict';

//Buttons
const buttons = document.querySelectorAll('.btn');

//Span elements for current and previous timeframes
const current = document.querySelectorAll('.current');
const previous = document.querySelectorAll('.previous');

//Callback to fetch data from JSON file and render it
const getData = async time => {
  const response = await fetch('./data.json');
  const data = await response.json();

  current.forEach((element, index) => {
    element.textContent = `${data[index].timeframes[time].current}`;
  });

  let str = '';

  time === 'daily'
    ? (str = 'Yesterday')
    : time === 'weekly'
    ? (str = 'Last Week')
    : (str = 'Last Month');

  previous.forEach((element, index) => {
    element.textContent = `${str} - ${data[index].timeframes[time].previous}`;
  });
};

//Function to toggle active class

const toggleActiveClass = clickedButton => {
  buttons.forEach(btn => btn.classList.remove('active'));
  clickedButton.classList.add('active');
};

//Listen to click events on buttons and render data
buttons.forEach(button => {
  //render data on click
  button.addEventListener('click', e => {
    getData(e.target.id);
    toggleActiveClass(e.target);
  });
});

// Set default view to weekly data when page loads
window.onload = getData('weekly');
