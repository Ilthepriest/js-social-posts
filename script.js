/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
-id del post, numero progressivo da 1 a n
-nome autore,
-foto autore,
-data in formato americano (mm-gg-yyyy),
-testo del post,
-immagine (non tutti i post devono avere una immagine),
-numero di likes. */

// Milestone 1

const posts = [
    {
        id: 452,
        nomeAutore: "Francesco Rossi",
        fotoAutore: "https://i.picsum.photos/id/383/300/300.jpg?hmac=kHvlx_u4NdH5T113u1zp_vWeeO9r94Hn6U9IqLfuCXg",
        data: "25-10-2022",
        testoPost: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi!",
        immaginePost: "https://i.picsum.photos/id/1082/500/300.jpg?hmac=ctez6hcqDrYsD6KK1Zvv4UjVY4cL03oNeg1daYc2Ss4",
        likes: 5
    },

    {
        id: 892,
        nomeAutore: "Marco Belli",
        fotoAutore: "https://i.picsum.photos/id/278/200/200.jpg?hmac=ttIZUII9b-qTWIpyIHChMPIA802dHskBJGR2EAa-Ywc",
        data: "25-10-2022",
        testoPost: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam illum soluta asperiores vel mollitia cumque ab accusamus necessitatibus repellat.",
        immaginePost: "https://picsum.photos/500/300",
        likes: 12
    }
]

//Milestone 2

const containerElement = document.querySelector(".container")

posts.forEach((element, index, array) => {
    const post = element;
    let card = document.createElement("div");
    card.classList.add("card");
    containerElement.append(card)
})

let carte = document.querySelectorAll(".card");


posts.forEach((element, index, array) => {
    const post = element;

    // Creo div logo
    let divProfilo = document.createElement("div")
    divProfilo.classList.add("logo")
    carte[index].append(divProfilo)

    //Credo div per utente
    let divUtente = document.createElement("div")
    divUtente.classList.add("utente")
    carte[index].append(divUtente)
    divUtente.innerHTML += `${post.nomeAutore} <br> `
    divUtente.innerHTML += `${post.data}`
    
    //Seleziono tutti i div .logo
    let logoElement = document.querySelectorAll(".logo");

    //creo elemento img e appendo ai div appena creati .logo
    let imgProfilo = document.createElement("img");
    imgProfilo.src = post.fotoAutore;
    logoElement[index].append(imgProfilo);
  
    //Creo elemento div per le scritte
    let scritta = document.createElement("div")
    scritta.classList.add("boxScritta")
    carte[index].append(scritta)
    scritta.innerHTML += `${post.testoPost} <br>`
    
    //Creo elemento img per l'immagine dei post
    let img = document.createElement("img");
    img.src = post.immaginePost;
    carte[index].append(img);

    //Creo div per flex
    let flex = document.createElement("div")
    flex.classList.add("flex")
    carte[index].append(flex)

    const flex_element = document.querySelectorAll(".flex")

    //Creo elemento div per l'icon
    let like = document.createElement("div")
    like.classList.add("like")
    flex_element[index].append(like)
    like.innerHTML += `<i class="fa-solid fa-thumbs-up"> Mi piace</i>`

    //Creo elemento div per quanti mi piace
    let quantiLike = document.createElement("div")
    quantiLike.classList.add("quantiLike")
    flex_element[index].append(quantiLike)
    quantiLike.innerHTML += `Piace a ${post.likes} persone.`
    
});


let icon = document.querySelector("i");
let likePersone = document.querySelector(".quantiLike");

icon.addEventListener("click", blu);

function blu(){
    // icon.style.color = "blue"
    icon.classList.toggle("blue")
    likePersone.innerHTML = `Piace a ${posts[0].likes + 1} persone.`;
    console.log(posts[0].likes);
}

