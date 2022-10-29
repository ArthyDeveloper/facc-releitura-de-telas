// Footer //
const CoopLink = document.querySelector('.CoopLink');
CoopLink.addEventListener('click', function(){
    window.location.assign("https://www.instagram.com/coopeise/");
});

const SFP = document.querySelector('.SFP');
SFP.addEventListener('click', function(){
    window.location.assign("https://github.com/ArthyDeveloper/facc-releitura-de-telas");
});

// Botões //
const ArtistasB = document.querySelector('.ArtistasB');
const GaleriaB = document.querySelector('.GaleriaB');

const artistasDiv = document.querySelector('.Titulo3Div');
ArtistasB.addEventListener('click', function(){
    artistasDiv.scrollIntoView({behavior: "smooth", block: "center"})
})

const releiturasDiv = document.querySelector('.Titulo4Div');
GaleriaB.addEventListener('click', function(){
    releiturasDiv.scrollIntoView({behavior: "smooth", block: "center"})
})

console.log("Site feito por Arthur Queiroz de Oliveira, 3º Ano A");