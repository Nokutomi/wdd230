// Updating the Copyright Year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const copyrightElem = document.querySelector("#copyright");
copyrightElem.textContent = `© ${currentYear}`;


// Updating the Last Modified date
// const lastUpdated = new Date(Date.UTC(2022, 3, 23, 19, 14, 253));
const lastUpdated = new Date(document.lastModified);
const dateOptions = {
  month: "numeric",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};
dateOptions.timeZone = 'UTC';
dateOptions.timeZoneName = 'short';
const lastUpdatedText = lastUpdated.toLocaleDateString("en-US", dateOptions);
const lastUpdatedElem = document.querySelector("#last-updated");
lastUpdatedElem.textContent = `Last Updated: ${lastUpdatedText}`;
