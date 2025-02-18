/* Project modal */ 

document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { title:"CV", 
            imageSrc:"assets/images/CV.PNG"  , 
            description:"Description du projet : Création d'un CV",
            creationDate: "Date de création : 14 Octobre 2023",
            images: [
              "assets/images/CV/Header_CV.jpg",
              "assets/images/CV/Interet_CV.jpg",
              "assets/images/CV/Competence_CV.jpg",
              "assets/images/CV/Aside_CV.jpg",
              "assets/images/CV/Education_CV.jpg",
              ],
            technologies: "Technologies utilisés : HTML5, CSS3",
            visitLink: "https://drive.google.com/file/d/1WwIK3sdgiRXrJpBVTpT_pES5jQ__YyS8/view?usp=sharing",
            githubLink: "https://github.com/Drocinera/CV-.git" },
           
           { title:"Cahier des charges", 
            imageSrc:"assets/images/Cahier-des-charges.PNG"  ,
            description:"Description du projet : Création d'un cahier des charges pour une entreprise fictive",
            creationDate: "Date de création : 10 Novembre 2023",
            images: [
              "assets/images/Cahier-des-charges/Titre-Cahier.PNG",
              "assets/images/Cahier-des-charges/sommaire-Cahier.PNG",
              "assets/images/Cahier-des-charges/Présentation-Cahier.PNG",
              "assets/images/Cahier-des-charges/Cibles-Cahier.PNG",
              "assets/images/Cahier-des-charges/Objectifs-Cahier.PNG",
              "assets/images/Cahier-des-charges/Quantitatif-Cahier.PNG",
              "assets/images/Cahier-des-charges/Périmètre-Cahier.PNG",
              "assets/images/Cahier-des-charges/Maquettage-Cahier.PNG",
              "assets/images/Cahier-des-charges/Graphisme-Cahier.PNG",
              "assets/images/Cahier-des-charges/spécificité-Cahier.PNG",
              "assets/images/Cahier-des-charges/Livrable-Cahier.PNG",
              "assets/images/Cahier-des-charges/Planning-Cahier.PNG",
              ],
            technologies: "Technologies utilisés : Editeur de texte",
            visitLink: "https://drive.google.com/file/d/1zhc1vbkaO7g1XD9E8UfyL6yGx12NF-yH/view?usp=drive_link",
        },
           
           { title:"Dynamiser un espace commentaire", 
            imageSrc:"assets/images/Dynamiser-un-espace-commentaire.PNG"  ,
            description:"Description du projet : Création d'un espace commentaire dynamique pour un site fictif",
            creationDate: "Date de création : 20 Novembre 2023",
            images: [
              "assets/images/Espace-commentaire/Liste-commentaire.PNG",
              "assets/images/Espace-commentaire/formulaire-commentaire.PNG",
              "assets/images/Espace-commentaire/Erreur-commentaire.PNG",
              "assets/images/Espace-commentaire/Dyanmique-commentaire.PNG",
             ],
            technologies: "Technologies utilisés : HTML5, CSS3, JavaScript",
            githubLink: "https://github.com/Drocinera/DynamiserUnEspaceCommentaires.git" },
  
            { title:"E-Commerce WordPress fictif", 
            imageSrc:"assets/images/la_vie_des_plantes_acceuil.PNG"  ,
            description:"Description du projet : Création d'un site e-commerce avec WordPress",
            creationDate: "Date de création : 23 Mars 2024",
            images: [
              "assets/images/La_vie_des_plantes/CE_Page_acceuil.PNG",
              "assets/images/La_vie_des_plantes/CE_Page_mon_panier.PNG",
              "assets/images/La_vie_des_plantes/CE_Page_boutique.PNG", 
              "assets/images/La_vie_des_plantes/CE_Page_contact.PNG",
              "assets/images/La_vie_des_plantes/CE_Page_a_propos.PNG",
             ],
            technologies: "Technologies utilisés : WordPress",
            githubLink: "https://github.com/Drocinera/Site_Commerce_WP.git" },
  
            { title:"Site vitrine \"Au Petit Village\" ", 
            imageSrc:"assets/images/Au-petit-village.PNG"  ,
            description:"Description du projet : Création d'un site vitrine fictif pour \"Au Petit Village\" ",
            creationDate: "Date de création : 03 Avril 2024",
            images: [
              "assets/images/Au-Petit-Village/page-acceuil-Angular.PNG",
              "assets/images/Au-Petit-Village/page-produit-angular.PNG",
              "assets/images/Au-Petit-Village/Page-propos-angular.PNG", 
             ],
            technologies: "Technologies utilisés : Html, CSS, TypeScript",
            githubLink: "https://github.com/Drocinera/angular-app.git" },
  
            { title:"Portail Professionel fictif \"Trouve ton artisan\" ", 
            imageSrc:"assets/images/Trouve-Ton-Artisan.PNG"  ,
            description:"Description du projet : Création d'un site portail professionel fictif pour \"Trouve ton artisan\" ",
            creationDate: "Date de création : 05 juin 2024",
            images: [
              "assets/images/Trouve-Ton-Artisan/Acceuil-Trouve-Ton-Artisan.PNG",
              "assets/images/Trouve-Ton-Artisan/Recherche-trouve-Ton-Artisan.PNG",
              "assets/images/Trouve-Ton-Artisan/Page-Alimentation-Trouve-Ton-Artisan.PNG", 
              "assets/images/Trouve-Ton-Artisan/Page-batiment-Trouve-Ton-Artisan.PNG", 
              "assets/images/Trouve-Ton-Artisan/Page-Fabrication-Trouve-Ton-Artisan.PNG",
              "assets/images/Trouve-Ton-Artisan/Page-Service-Trouve-Ton-Artisan.PNG",
              "assets/images/Trouve-Ton-Artisan/Contact-Artisan-Trouve-Ton-Artisan.PNG", 
             ],
            technologies: "Technologies utilisés : Html, SCSS, JavaScript",
            githubLink: "https://github.com/Drocinera/react-app-trouve-ton-artisan.git" },
  
            { title:"Projet Mediatheque Python ", 
            imageSrc:"assets/images/Python-logo-notext.svg"  ,
            description:"Description du projet : Création d'une médiatheque fictive en utilisant python ",
            creationDate: "Date de création : 21 Aout 2024",
            images: [
              "assets/images/Projet_Python-Mediatheque/Python-logo-notext.svg",
             ],
            technologies: "Technologies utilisés : Python",
            githubLink: "https://github.com/Drocinera/Python_Mediatheque.git" },
  
            { title:"Projet port de plaiscance ", 
            imageSrc:"assets/images/API_image.svg"  ,
            description:"Description du projet : Création d'une API pour des réservations de quai dans un port de plaisance",
            creationDate: "Date de création : 16 Septembre 2024",
            images: [
              "assets/images/Projet_API/API_image.svg",
             ],
            technologies: "Technologies utilisés : Javascript, EJS",
            githubLink: "https://github.com/Drocinera/port_de_plaisance.git" },
  
            { title:"Projet E-commerce Stubborn", 
            imageSrc:"assets/images/Acceuil_Stubborn.png"  ,
            description:"Description du projet : Création d'un site e-commerce fictif pour un magasin de sweat-shirt",
            creationDate: "Date de création : 18 Octobre 2024",
            images: [
              "assets/images/Symfony-Stubborn/Acceuil_Stubborn.PNG",
              "assets/images/Symfony-Stubborn/Boutique_stubborn.PNG",
              "assets/images/Symfony-Stubborn/Fiche_presentation_stubborn.PNG", 
              "assets/images/Symfony-Stubborn/Panier_remplis_Stubborn.PNG", 
              "assets/images/Symfony-Stubborn/Panier_Stubborn.PNG",
             ],
            technologies: "Technologies utilisés : PHP, Twig",
            githubLink: "https://github.com/Drocinera/Symfony_e_commerce.git" },
    ];

    const images = document.querySelectorAll(".carousel-item img");

    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            const project = projects[index]; // Associer image au bon projet

            if (project) {
                document.getElementById("projectModalLabel").textContent = project.title;
                document.getElementById("modalImage").src = project.imageSrc;
                document.getElementById("modalImage").alt = project.title;
                document.getElementById("modalDescription").textContent = project.description;
                document.getElementById("modalCreationDate").textContent = project.creationDate;
                document.getElementById("modalTechnologie").textContent = project.technologies
                document.getElementById("modalLink").href = project.visitLink;
                document.getElementById("modalGithub").href = project.githubLink;

                // Ajouter les images supplémentaires
                const extraImagesContainer = document.getElementById("modalExtraImages");
                extraImagesContainer.innerHTML = ""; // Vider avant d'ajouter
                project.images.forEach(imgSrc => {
                    const imgElement = document.createElement("img");
                    imgElement.src = imgSrc;
                    imgElement.classList.add("img-extra");;
                    extraImagesContainer.appendChild(imgElement);
                });

                const modal = new bootstrap.Modal(document.getElementById("projectModal"));
                modal.show();
            }
        });
    });
});


/* Footer */

  document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const currentYearSpans = document.querySelectorAll('[data-year]');
    currentYearSpans.forEach(element => {
      element.textContent = currentYear;
    });
  });