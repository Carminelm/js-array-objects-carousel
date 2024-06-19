//Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione

const images = [
    {
      image: "01.webp",
      title: "Marvel's Spiderman Miles Morale",
      text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    },
    {
      image: "02.webp",
      title: "Ratchet & Clank: Rift Apart",
      text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    },
    {
      image: "03.webp",
      title: "Fortnite",
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
      image: "04.webp",
      title: "Stray",
      text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    },
    {
      image: "05.webp",
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ];
 

 //variabili globale
 const leftSlider = document.getElementById("left-slider");
 const rightSlider = document.getElementById("right-slider");
 const infoTitle = document.getElementById("info-title");
 const infoText = document.getElementById("info-text");
 infoTitle.innerHTML = images[0].title;
 infoText.innerHTML = images[0].text;
 
 // ciclo per inserire le immagini 
 
 for (i = 0; i < images.length; i++) {
   const singleImg = document.createElement("img");
   singleImg.src = `img/${images[i].image}`;
   singleImg.classList.add("left-img");
 
   if (i === 0) {
     singleImg.classList.add("attiva");
   }
 
   leftSlider.append(singleImg);
 }
 
 
 
 for (i = 0; i < images.length; i++) {
   const singleImg = document.createElement("img");
   singleImg.src = `img/${images[i].image}`;
   singleImg.classList.add("right-img");
 
   if (i === 0) {
     singleImg.classList.add("seleziona");
   }
   rightSlider.append(singleImg);
 }
 
