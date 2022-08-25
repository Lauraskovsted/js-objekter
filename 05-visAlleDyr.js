// //variabel dyr, som indhold en array (en liste).
// let dyr = {
//   navn: "Gris",
//   type: "Pattedyr",
//   billede: "http://mabe-kea.dk/E19/pics/pig.png",
//   levested: "Svinefarm",
// };

// //Tjekker property bliver vist i konsolen
// console.log(`navn:${dyr.navn} type:${dyr.type} levested:${dyr.levested}`);

// document.addEventListener("DOMContentLoaded", start);

// function start() {
//   console.log("loaded");
// }

// const destination = document.querySelector("#dyr");
// const fuldeTitel = `Dyr: ${dyr.navn} Type: ${dyr.type} Levested: ${dyr.levested}`;

// //Bruger textContent til at indsætte min const i h3 og udvælger mere specifikt ved at skrive dyr.navn.
// destination.querySelector("h3").textContent = dyr.navn;
// destination.querySelector("img").src = dyr.billede;

// destination.querySelector("p").textContent = "Type: " + dyr.type;

// //Bruger last-child til at vælge det sidste p i vores html. (pseudo selector)
// destination.querySelector("p:last-child").textContent =
//   "Levested: " + dyr.levested;

//Øvelse 5

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
  // Indsætter liste med anonym funktion
  dyrArray.forEach((dyrArray) => {
    listevisning.innerHTML += `<p> ${dyrArray.navn} ${dyrArray.type} fra ${dyrArray.levested} </p>`;
  });
}
