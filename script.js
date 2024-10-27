let currentIndex = 0;

// Met à jour le carrousel en fonction de l'index actuel
function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const projectWidth = document.querySelector('.project').offsetWidth + 30; // Inclure la marge
    const totalProjects = document.querySelectorAll('.project').length;

    // Calcul de la position pour centrer le projet actuel
    const scrollPosition = -(currentIndex - 1) * projectWidth;

    // Appliquer la translation pour centrer l'élément sélectionné
    carousel.style.transform = `translateX(${scrollPosition}px)`;

    // Gérer l'opacité et l'échelle pour indiquer l'élément sélectionné
    document.querySelectorAll('.project').forEach((proj, index) => {
        proj.classList.remove('active');
        if (index === currentIndex) {
            proj.classList.add('active');
        }
    });
}

// Ajout d'événements de clic sur chaque projet
document.querySelectorAll('.project').forEach((project, index) => {
    project.addEventListener('click', () => {
        const totalProjects = document.querySelectorAll('.project').length;

        // Mettre à jour l'index courant
        currentIndex = index;

        // Gérer le dépassement des limites pour faire une boucle
        if (currentIndex < 0) {
            currentIndex = totalProjects - 1;
        } else if (currentIndex >= totalProjects) {
            currentIndex = 0;
        }

        updateCarousel();

        // Vérifie si l'index courant correspond à l'index du projet cliqué avant d'ouvrir le pop-up
        if (currentIndex === index) {
            showProjectPopup(currentIndex);
        }
    });
});

// Initialiser l'affichage
updateCarousel();

// Données des projets
const projectsData = [
    {
        title: "Projet 1",
        description: "Description détaillée du Projet 1.",
    },
    {
        title: "Projet 2",
        description: "Description détaillée du Projet 2.",
    },
    {
        title: "Projet 3",
        description: "Description détaillée du Projet 3.",
    },
];

// Fonction pour afficher le pop-up du projet
function showProjectPopup(index) {
    const popupProject = document.querySelector('.popup-project');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');

    // Met à jour le titre et la description du projet
    projectTitle.textContent = projectsData[index].title;
    projectDescription.textContent = projectsData[index].description;

    // Afficher le pop-up avec effet de fondu
    popupProject.classList.add('show');
    setTimeout(() => {
        popupProject.style.opacity = '1';
    }, 0);
}

// Gérer la fermeture du pop-up
const closePopupButton = document.querySelector('.close');
closePopupButton.addEventListener('click', () => {
    const popupProject = document.querySelector('.popup-project');
    popupProject.style.opacity = '0';
    setTimeout(() => {
        popupProject.classList.remove('show');
    }, 500); // Correspond à la durée de l'animation de fondu
});

// Fermer le pop-up si l'utilisateur clique à l'extérieur
document.querySelector('.popup-project').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        const popupProject = document.querySelector('.popup-project');
        popupProject.style.opacity = '0';
        setTimeout(() => {
            popupProject.classList.remove('show');
        }, 500); // Correspond à la durée de l'animation de fondu
    }
});

// Récupération de l'élément image et du popup
const profilePic = document.getElementById('profile-pic');
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close');

// Ouvrir le popup lors du clic sur l'image
profilePic.addEventListener('click', () => {
    popup.classList.add('show'); // Ajoute la classe pour afficher le popup avec fondu
    popup.style.display = 'flex'; // Change à flex pour rendre le popup visible
    setTimeout(() => {
        popup.style.opacity = '1'; // Modifie l'opacité après un court délai
    }, 10); // Délai pour s'assurer que le style display est appliqué avant l'opacité
});

// Fermer le popup
closePopup.addEventListener('click', () => {
    popup.style.opacity = '0'; // Diminue l'opacité
    setTimeout(() => {
        popup.style.display = 'none'; // Masque le popup après la transition
        popup.classList.remove('show'); // Masque le popup après la transition
    }, 500); // Correspond au délai de transition CSS
});

// Fermer le popup en cliquant en dehors du contenu
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.opacity = '0'; // Diminue l'opacité
        setTimeout(() => {
            popup.style.display = 'none'; // Masque le popup après la transition
            popup.classList.remove('show'); // Masque le popup après la transition
        }, 500); // Correspond au délai de transition CSS
    }
});
