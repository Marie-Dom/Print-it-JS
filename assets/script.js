const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Mise en place des constantes pour les flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

//Declaration de la variable slideIndex à 0
let slideIndex = 0;

//event listener clic gauche

arrowLeft.addEventListener('click', ()=> {
	if (slideIndex == 0) {
		slideIndex = slides.length -1;
	} else {
	    slideIndex -=1;//decremente de 1
    }
	console.log("Vous avez cliqué sur la flèche gauche")
});

// event listener clic droit
arrowRight.addEventListener('click', ()=> {
	if (slideIndex == slides.length -1) {
		slideIndex = 0;
	} else {
	    slideIndex += 1;//incremente de 1
    }
	console.log("Vous avez cliqué sur la flèche droite")

});


// Récupération de la balise générale "dots" contenant les div enfants à créer
const dotsContainer = document.querySelector('.dots');

// Mise en place des bullets-points à l'aide de la boucle "for"

for (let i = 0; i < slides.length; i++) {
	let newDot = document.createElement('div');
	// cela crée une balise contenant 1 bullet Point
	newDot.classList.add('dot');
	// rattachement des nouvelles balises "enfants" à la balise générale "dots" "parent"
	dotsContainer.appendChild(newDot);
	// sélection du premier bullet point dans le tableau
	if (i == 0) {
		dotsContainer.children[i].classList.add('dot_selected');
	}
}


