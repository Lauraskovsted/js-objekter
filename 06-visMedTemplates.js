//Øvelse 6

let dyrArray = [
  {
    navn: "Frø",
    type: "Amfibie",
    billede: "http://mabe-kea.dk/E19/pics/frog.png",
    levested: "Søen",
  },
  {
    navn: "Gris",
    type: "Pattedyr",
    billede: "http://mabe-kea.dk/E19/pics/pig.png",
    levested: "Svinefarmen",
  },
  {
    navn: "Ræv",
    type: "Pattedyr",
    billede: "http://mabe-kea.dk/E19/pics/fox.png",
    levested: "Skov",
  },
  {
    navn: "Sild",
    type: "Fisk",
    billede: "http://mabe-kea.dk/E19/pics/sild.jpg",
    levested: "Havet",
  },
  {
    navn: "Krokodille",
    type: "Krybdyr",
    billede: "http://mabe-kea.dk/E19/pics/kroko.jpg",
    levested: "Zoo",
  },
];

console.log(dyrArray);

document.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
  console.log("loaded Igen");

  const listevisning = document.querySelector("#liste");
  const dyrTemplate = document.querySelector("template");
  // Indsætter liste med anonym funktion
  dyrArray.forEach((dyrArray) => {
    let klon = dyrTemplate.cloneNode(true).content;
    klon.querySelector("h3").textContent = dyrArray.navn;
    klon.querySelector("img").src = dyrArray.billede;
    klon.querySelector("p").textContent = "Type: " + dyrArray.type;
    klon.querySelector("p:last-child").textContent =
      "Levested: " + dyrArray.levested;
    listevisning.appendChild(klon);
  });
}
