const requestURL = "data.json"
const cards = document.querySelector('div.cards-view');
const listButton = document.querySelector("#list-button");
const cardButton = document.querySelector("#grid-button");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['companies'];
        // console.table(jsonObject);
        businesses.forEach(displayCompanies);
    });

function displayCompanies(companies) {
  let card = document.createElement('section');

  //img
  let image = document.createElement('img');
  image.src = business.imgfile;
  image.setAttribute('alt', business.name);
  card.appendChild(image);

  //h2 name
  let h3 = document.createElement('h3');
  h3.textContent = business.name;
  card.appendChild(h3);

  //p address
  let p1 = document.createElement('p');
  p1.textContent = business.address;
  card.appendChild(p1);

  //p phone
  let p2 = document.createElement('p');
  p2.textContent = business.phone;
  card.appendChild(p2);

  //p website
  let p3 = document.createElement('p');
  p3.textContent = business.website;
  card.appendChild(p3);

  cards.appendChild(card);

}

listButton.addEventListener("click", ()=> {
    cards.classList.replace("card-view", "list-view")
});

cardButton.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "card-view")
});
