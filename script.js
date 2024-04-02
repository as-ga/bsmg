let cardsArray = [
  {
    name: "CSS", //no
    img: "source/css.png",
  },
  {
    name: "HTML", //yes
    img: "source/html.png",
  },
  {
    name: "jQuery", //no
    img: "source/jQuery.png",
  },
  {
    name: "JS", //no
    img: "source/js.png",
  },
  {
    name: "Node", //no
    img: "source/node.png",
  },
  {
    name: "Python", //no
    img: "source/python.png",
  },
];

const parentDiv = document.querySelector("#card-section");

// step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray);
console.log(gameCard);

let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

let clickCount = 0;
let firstCard = "";
let secondCard = "";

// styling the match card
const card_matches = () => {
  let card_selected = document.querySelectorAll(".card_selected");

  card_selected.forEach((curElem) => {
    curElem.classList.add("card_match");
  });
};

// step 7

const resetGame = () => {
  firstCard = "";
  secondCard = "";
  clickCount = 0;

  let card_selected = document.querySelectorAll(".card_selected");

  card_selected.forEach((curElem) => {
    curElem.classList.remove("card_selected");
  });
};

// step 4
parentDiv.addEventListener("click", (event) => {
  let curCard = event.target;

  if (curCard.id === "card-section") {
    return false;
  }

  clickCount++;

  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card_selected");
    } else {
      secondCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card_selected");
    }

    if (firstCard !== "" && secondCard !== "") {
      if (firstCard === secondCard) {
        // curCard.classList.add('card_match')
        setTimeout(() => {
          card_matches();
          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 1000);
      }
    }
  }
});

// step 1 to add the card
for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;

  const front_div = document.createElement("div");
  front_div.classList.add("front-card");

  const back_div = document.createElement("div");
  back_div.classList.add("back-card");

  back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

  parentDiv.appendChild(childDiv);

  childDiv.appendChild(front_div);
  childDiv.appendChild(back_div);
}
