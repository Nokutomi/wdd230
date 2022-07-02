let spot1 = document.querySelector(".main-spotlight1");
let spot2 = document.querySelector(".main-spotlight2");

function displaySpotlight(items) {
  const business1 = items[0];
  const business2 = items[1];

  spot1.innerHTML = `<h2>${business1.name}</h2>
   <div><a href="${business1.website}" target="_blank"><img src="${business1.imageurl}" width="100" height="75"/></a></div>
   <p>${business1.address}</p>
   <p>${business1.phone}</p>`;

  spot2.innerHTML = `<h2>${business2.name}</h2>
   <div><a href="${business2.website}" target="_blank"><img src="${business2.imageurl}" width="100" height="75"/></a></div>
   <p>${business2.address}</p>
   <p>${business2.phone}</p>`;
}

const requestURL = "store/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject;

    const filteredBusinesses = businesses.filter(
      (business) => business["membership-level"] === "Gold"
    );
    // console.log(filteredBusinesses);
    displaySpotlight(filteredBusinesses);
  });
