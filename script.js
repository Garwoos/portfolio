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

        // Vérifie si l'index courant correspond à l'index du projet cliqué avant d'ouvrir le pop-up
        if (currentIndex == index) {
            showProjectPopup(currentIndex);
        }
        // Mettre à jour l'index courant
        currentIndex = index;

        // Gérer le dépassement des limites pour faire une boucle
        if (currentIndex < 0) {
            currentIndex = totalProjects - 1;
        } else if (currentIndex >= totalProjects) {
            currentIndex = 0;
        }

        updateCarousel();
    });
});

// Initialiser l'affichage
updateCarousel();

// Données des projets
const projectsData = [
    {
        title: "Heavent",
        description: `<strong>Contexte : </strong>
         <br><br>
        Heavent est une application de gestion d’événements conçue pour simplifier l’organisation pour les professionnels et les particuliers.<br>
            Elle permet de créer, rechercher et réserver des événements, tout en assurant une gestion sécurisée des données utilisateurs grâce à une authentification et un hachage des mots de passe.<br>
            L’interface utilisateur, développée avec JavaFX et SceneBuilder, propose une navigation fluide avec un menu personnalisé, une barre de recherche et des notifications pour suivre les modifications.<br>
            Heavent utilise une base de données MySQL pour stocker les informations, tandis que la logique de l’application repose sur Java et le framework Spring Boot.<br>
            <h2>Fonctionnalités</h2>
            <ul>
                <li><strong>Création d'Événements :</strong> Ajout de détails (date, lieu, type d'événement).</li>
                <li><strong>Recherche & Réservation :</strong> Filtrage par catégorie, lieu, date et réservation en ligne.</li>
                <li><strong>Gestion des Utilisateurs :</strong> Authentification sécurisée avec mots de passe hachés.</li>
                <li><strong>Notifications :</strong> Alertes pour changements de réservation et rappels.</li>
                <li><strong>Tableau de Bord :</strong> Statistiques d'événements et suivi des réservations.</li>
            </ul>

            <h2>Détails Techniques</h2>
            <ul>
                <li><strong>Interface :</strong> Développée avec JavaFX/SceneBuilder pour une navigation fluide.</li>
                <li><strong>Backend :</strong> Java et Spring Boot pour la logique métier, sécurisée par Spring Security.</li>
                <li><strong>Base de Données :</strong> MySQL avec ORM via JPA/Hibernate.</li>
                <li><strong>Notifications en Temps Réel :</strong> Mises à jour instantanées avec WebSockets.</li>
            </ul>
            <br>
            <strong> Lien GitHub : </strong> <a href="https://github.com/Garwoos/Heavent" target="_blank"> https://github.com/Garwoos/Heavent </a> </strong>
            `,
        image: "images/heavent.png"
    },
    {
        title: "Gestionnaire de ticket pour Alias Informatique",
        description: `Contexte : Durant ton stage de première année de BTS SIO (Services Informatiques aux Organisations), tu as travaillé sur la création d'un gestionnaire de tickets pour Alias Informatique. Ce projet a permis à l’entreprise de centraliser et d'organiser les demandes clients sous forme de tickets, facilitant la gestion des tâches des collaborateurs.<br><br>
            <strong>Fonctionnalités :</strong><br>
            - Gestion des Tickets : La plateforme permet d'enregistrer, visualiser, et gérer les tickets, avec des colonnes indiquant des informations clés comme le numéro de ticket, le client associé, le nom de la tâche (libellé) et l'état d'avancement.<br>
            - Affichage des Informations : Le tableau affiche la date, les informations du client, le ticket, et l'état en temps réel.<br>
            - Suivi des Statuts : Un suivi des statuts de chaque tâche permet aux collaborateurs de voir les tickets en cours, traités ou en attente.<br><br>
            <strong>Détails Techniques :</strong><br>
            - Interface Utilisateur : Le design est simple et fonctionnel, facilitant la navigation avec des colonnes et des sections bien définies.<br>
            - Technologie : WinDev a été utilisé pour développer cette interface. WinDev permet de créer des applications de gestion performantes et adaptées aux besoins de l'entreprise.<br><br>
            <strong>Objectif :</strong> L'objectif principal de ce projet était d’améliorer la réactivité de l’équipe d’Alias Informatique en optimisant la gestion des demandes clients, réduisant ainsi les délais de traitement des tickets.`,
        image: "images/gestionnaire_ticket.png"
    },
    {
        title: "Projet 3",
        description: `Description détaillée du Projet 3.`,
        image: "projet3_image.png"
    },
];

// Fonction pour afficher le pop-up du projet
function showProjectPopup(index) {
    const popupProject = document.querySelector('.popup-project');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectImage = document.getElementById('project-image');

    // Met à jour le titre, la description et l'image du projet
    projectTitle.textContent = projectsData[index].title;
    projectDescription.innerHTML = projectsData[index].description;
    projectImage.src = projectsData[index].image;

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
