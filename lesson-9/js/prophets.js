const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

function ordinalSuffixOf(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");
  let birthDate = document.createElement("p");
  let birthPlace = document.createElement("p");

  // Change the textContent property of the h2 element to contain the prophet's full name
  const fullName = `${prophet.name} ${prophet.lastname}`;
  h2.textContent = fullName;

    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute("alt", `Portait of ${fullName}, the ${ordinalSuffixOf(prophet.order)} Latter-day President`);
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(birthDate);
  card.appendChild(birthPlace);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}

// 0:
// birthdate: "23 December 1805"
// birthplace: "Vermont"
// death: "27 June 1844"
// imageurl: "https://media.ldscdn.org/images/media-library/gospel-art/latter-day-prophets/american-prophet-joseph-smith-jr-1178035-gallery.jpg"
// lastname: "Smith"
// length: 14
// name: "Joseph"
// numofchildren: 11
// order: 1


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });
