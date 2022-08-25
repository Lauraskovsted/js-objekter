let dyr = {
  navn: "gris",
  type: "pattedyr",
  billede: "http://mabe-kea.dk/E19/pics/pig.png",
  levested: "svinefarm",
};

console.log(`navn:${dyr.navn} type:${dyr.type} levested:${dyr.levested}`);

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("loaded");
}

const destination = document.querySelector("#dyr");
const fuldeTitel = `Dyr: ${dyr.navn} Type: ${dyr.type} Levested: ${dyr.levested}`;

destination.querySelector("p").textContent = fuldeTitel;
destination.querySelector("img").src = dyr.billede;
