let currDate = Date.now();
const visitsDisplay = document.querySelector(".visits");

const oneDayInMiliseconds = 24 * 60 * 60 * 1000;

const zeroHours = (dateNum) => {
  let date = new Date(dateNum);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return new Date(year, month, day);
};

// localStorage.setItem("last-visit", 1653879600000);

if (!window.localStorage.getItem("previous-visit")) {
  localStorage.setItem(
    "previous-visit",
    Number(zeroHours(currDate) - oneDayInMiliseconds)
  );
}
if (!window.localStorage.getItem("last-visit")) {
  localStorage.setItem("last-visit", Number(zeroHours(currDate)));
}

const previousVisit = Number(window.localStorage.getItem("previous-visit"));
const lastVisit = Number(window.localStorage.getItem("last-visit"));

// console.log(previousVisit)
// console.log(lastVisit)

let prevDay = new Date(previousVisit);
let lastDay = new Date(lastVisit);

// console.log(prevDay)
// console.log(lastDay)
// console.log(Number(currDate));
let days = currDate - lastDay;
// console.log(days);
// console.log(oneDayInMiliseconds);

// console.log(days > oneDayInMiliseconds)

if (days > oneDayInMiliseconds) {
  // console.log("mais de 1 dia");
  localStorage.setItem("previous-visit", Number(lastDay));
  localStorage.setItem("last-visit", Number(zeroHours(currDate)));

  let daysText = Math.floor(days / oneDayInMiliseconds);
  // console.log(daysText);

  visitsDisplay.textContent = daysText;
} else {
  // console.log("menos de 1 dia");
  let daysText = Number((lastDay - prevDay) / oneDayInMiliseconds);
  // //     console.log(lastDay);
  // //     console.log(prevDay);
  console.log(daysText);
  visitsDisplay.textContent = daysText;
}
/*
 */
