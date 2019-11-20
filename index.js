import "babel-core/register";
import "babel-polyfill";

("use strict");

let timeLineInfo;

getData();

function getData() {
  let fetchData = fetch("https://v2-api.sheety.co/2d953e1a09a4d62db89c0f444ce7a8dd/timeline/timeline?fbclid=IwAR1BdZx057x8y2AYjnoIaza5YN9cP7il5o61rNQigy8qcOdyhUhYwIo4mus");
  fetchData
    .then(response => {
      //   console.log(response);
      return response.json();
    })
    .then(data => {
      timeLineInfo = data.timeline;
      console.log(timeLineInfo);
    });

  displayData();
}

function displayData() {
  timeLineInfo.forEach(day => {
    // console.log(day);
  });

  document.querySelector(`#day${day.id}.textContent = ${day.day};`);
}
