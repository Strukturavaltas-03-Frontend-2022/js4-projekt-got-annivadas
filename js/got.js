//Adatok lekérése, szűrése, rendezése

let characters = [];

const getChars = async (url) => {
  const response = await fetch('./json/got.json');
  const data = await response.json();
  data.forEach((char) => characters.push(char));
  aliveAndSortedChars(characters);
};

const aliveAndSortedChars = (array) => {
  let sortedChars = array
    .filter((char) => !char.hasOwnProperty('dead'))
    .sort((a, b) => {
      const x = a.name;
      const y = b.name;
      return x < y ? -1 : x > y ? 1 : 0;
    });
  uploadChars(sortedChars);
};

getChars();

//Karakterek feltöltése HTML-be

 const charContainer = document.querySelector(".char__container");

const uploadChars = (array) => {
  array.forEach((char, i) => {
    const charDiv = document.createElement('div');
    const charDivImg = document.createElement('img');
    const charDivName = document.createElement('div');
    charDiv.classList.add('charDiv');
    charDivName.classList.add('charDivName');
    charDiv.appendChild(charDivImg);
    charDiv.appendChild(charDivName);
    charContainer.appendChild(charDiv);
    charDivImg.setAttribute('src', char.portrait);
    charDivName.innerHTML = char.name;

    let contentCharContainer = document.querySelectorAll('.charDiv');
  });
}; 

