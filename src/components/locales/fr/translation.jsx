import { CgWebsite } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { Link as Link1 } from "react-scroll";
import client1 from '../../../assets/images/team/01.jpg'
import client2 from '../../../assets/images/team/02.jpg'
import client3 from '../../../assets/images/team/03.jpg'
import client4 from '../../../assets/images/team/04.jpg'
import client5 from '../../../assets/images/team/05.jpg'
import formation5 from '../../../assets/images/formation/formation05.jpg'
import formation6 from '../../../assets/images/formation/formation6.jpg'
import formation17 from '../../../assets/images/formation/formation17.jpg'
import formation8 from '../../../assets/images/formation/formation8.jpg'
import formation9 from '../../../assets/images/formation/formation9.jpg'
import formation10 from '../../../assets/images/formation/formation10.jpg'
import formation11 from '../../../assets/images/formation/formation11.jpg'
import formation12 from '../../../assets/images/formation/formation12.jpg'
import formation13 from '../../../assets/images/formation/formation13.jpg'
import formation14 from '../../../assets/images/formation/formation14.jpg'
import formation15 from '../../../assets/images/formation/15.jpg'
import formation16 from '../../../assets/images/formation/16.jpg'
import formation18 from '../../../assets/images/formation/formation18.jpg'
import formation19 from '../../../assets/images/formation/formation19.jpg'

import service1 from '../../../assets/images/service/service1.png'
import service2 from '../../../assets/images/service/service2.png'
import service3 from '../../../assets/images/service/service3.png'
import service4 from '../../../assets/images/service/service4.png'
import service5 from '../../../assets/images/service/service5.png'
import belgium from '../../../assets/images/job/belgium.png'
import allemagne from '../../../assets/images/job/germany.png'
import croatie from '../../../assets/images/job/croatie.png'
import italy from '../../../assets/images/job/italy.png'
import spain from '../../../assets/images/job/spain.png'
import facade from '../../../assets//images/job/facade.png'
import resume from '../../../assets/images/job/resume.png'
import recrutocean from '../../../assets/images/service/recrutocean.png'
import recrutinter from '../../../assets/images/service/recrutinter2.png'
import form from '../../../assets/images/form.pdf'
import { FaGithub, FaLinkedin, FaLock, FaComments, FaCode } from "react-icons/fa";
// export const teamTitle = "Rencontrez Notre Équipe de Développement";
// export const teamDescription = "Nous sommes une équipe passionnée d'experts dédiée à la création de solutions innovantes. Explorez plus sur chaque membre de l'équipe ci-dessous et découvrez les technologies dans lesquelles ils excellent.";
// export const membersTitle = "Nos Membres de l'Équipe";
// export const viewDetails = "Voir les Détails";

// export const teamMembers = [
//     {
//       id: 1,
//       name: "ENNACHOUM ZAKARIA",
//       role: "Développeur Full Stack",
//       photo: "path/to/photo1.jpg",
//       github: "https://github.com/Umbrator",
//       linkedin: "https://linkedin.com/in/ennachoum-zakaria-264134231/",
//     },
//     // Add other members...
//   ];
const heroImage1 = "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice.png?alt=media&token=b54504fc-6722-431f-8787-d75218233c1b"
export const servicesFR = [
    {
        title: "Sécurité",
        description: "Assurez la sécurité de vos applications avec les derniers protocoles.",
        icon: "FaLock",
    },
    {
        title: "Consultation",
        description: "Conseils d'experts sur l'architecture système, stratégie technologique, etc.",
        icon: "FaComments",
    },
    {
        title: "Développement",
        description: "Développement front-end et back-end, adapté à vos besoins.",
        icon: "FaCode",
    },
];

export const clientDataFr = [
    {
        image: client1,
        clientitle: "Ce que disent nos utilisateurs",
        name: "Calvin Carlo",
        title: "Manager",
        desc: "J'ai été impressionné par le soutien personnalisé que j'ai reçu de cette équipe. Leur expertise en placement international m'a aidé à obtenir un poste fantastique à l'étranger. Je recommande vivement leurs services !"
    },
    {
        image: client2,
        name: "Christa Smith",
        title: "Manager",
        desc: "Naviguer sur les marchés de l'emploi internationaux peut être intimidant, mais cette entreprise a grandement facilité les choses. Leur support multilingue et leur assistance pour les documents étaient de premier ordre. Je n'aurais pas pu y parvenir sans eux !"
    },
    {
        image: client3,
        name: "Jemina Clone",
        title: "Manager",
        desc: "J'avais besoin d'aide pour des placements professionnels dans plusieurs pays, et leur soutien sur mesure a été exceptionnel. L'attention portée aux détails et le professionnalisme de l'équipe ont rendu le processus fluide et sans stress."
    },
    {
        image: client4,
        name: "Smith Vodka",
        title: "Manager",
        desc: "L'assistance pour les documents a été un sauveur pour ma recherche d'emploi internationale. Leurs conseils étaient clairs et efficaces, et leur capacité à soutenir en plusieurs langues était un énorme avantage."
    },
    {
        image: client5,
        name: "Cristino Murfi",
        title: "Manager",
        desc: "J'ai été impressionné par leur compréhension des complexités du placement international. Le soutien était personnalisé, et leur équipe multilingue a veillé à ce que je sois bien préparé pour chaque étape du processus."
    }
];
export const blogDataFR = [
    {
        id: 1,
        image: formation6,
        Title: "Formation",
        text: "Cette formation en gestion administrative enseigne aux participants les compétences essentielles pour exceller dans les tâches administratives, en couvrant la gestion de la documentation, l'optimisation des processus organisationnels, et la communication professionnelle. Elle combine théorie et pratique pour des compétences applicables immédiatement en entreprise.",
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        blogetitle: "Formations Trends",
        title: 'langague',
        desc: 'Ocean Connecting offers a comprehensive language learning program covering...',
        detail: 'Ocean Connecting offers a comprehensive language learning program covering levels A1 to C2. It features young teachers, engaging activities, educational trips, and flexible schedules. Students benefit from regular level assessments, free access to PCs and Wi-Fi, and air-conditioned classrooms. The program also provides psychological monitoring and guidance, ensuring a supportive learning environment.this program aims to enhance language proficiency through interactive and diverse methods, accommodating different learning paces and needs.',
        type: 'language',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 2,
        image: formation9,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: 'Formation Agent de Checkin Aeroport',
        desc: 'La formation pour un Agent de Check-in Aéroport prépare les professionnels ...',
        detail: "La formation pour un Agent de Check-in Aéroport prépare les professionnels à gérer efficacement l'enregistrement des passagers et à assurer le bon déroulement des opérations aéroportuaires. Elle couvre l'accueil des passagers, la vérification des documents et la gestion des bagages, tout en utilisant des systèmes informatiques de réservation et de contrôle des bagages. Les participants apprennent également les procédures de sécurité aéroportuaire, les réglementations internationales, et les techniques de service client pour offrir une expérience agréable. La formation comprend des simulations pratiques pour appliquer les connaissances acquises et développer des compétences en communication et en gestion des situations d'urgence.",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 3,
        image: formation8,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: "Formation DJ",
        desc: 'La formation DJ enseigne les compétences nécessaires pour devenir un DJ...',
        detail: "La formation DJ enseigne les compétences nécessaires pour devenir un DJ professionnel, en couvrant les techniques de mixage, l'utilisation des équipements modernes comme les platines et les contrôleurs, ainsi que les bases de la production musicale pour créer des remixes et des morceaux originaux. Les participants apprennent également à gérer des événements, à organiser des sets, et à interagir avec le public. En plus des aspects techniques, la formation aide à développer une identité artistique personnelle, à promouvoir son travail en ligne et à construire un portfolio. Elle est idéale pour les débutants et les DJs souhaitant perfectionner leurs compétences et entrer dans le monde de la musique.",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 4,
        image: formation15,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: 'Formation de conduitendes bateaux et des voliers',
        desc: 'Cette formation offre une expérience complète pour les passionnés de navigation...',
        detail: "Cette formation offre une expérience complète pour les passionnés de navigation, incluant des cours théoriques et pratiques sur la sécurité, les techniques de voile, et la navigation côtière et hauturière. Les sessions sont dirigées par des instructeurs expérimentés et comprennent des pratiques intensives en mer. Les participants peuvent obtenir des certifications reconnues, leur permettant de piloter divers types de bateaux et de voiliers. Rejoignez-nous pour développer vos compétences nautiques et vivre une aventure maritime inoubliable!",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 5,
        image: formation16,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: 'HOME & FAMILY',
        desc: 'La formation Home & Family est conçue pour offrir des compétences pratiques et ...',
        detail: "La formation Home & Family est conçue pour offrir des compétences pratiques et des connaissances approfondies sur la gestion de la vie domestique et des relations familiales. Elle aborde des sujets variés allant de l'organisation du foyer à la gestion des finances familiales, en passant par les techniques de communication et de résolution de conflits. L'objectif est de fournir aux participants les outils nécessaires pour créer un environnement familial harmonieux et bien organisé.",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 6,
        image: formation14,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: "Formation d'installation et Usilisation VAR",
        desc: 'La formation en installation et utilisation des VAR (Value Added Resellers)...',
        detail: "La formation en installation et utilisation des VAR (Value Added Resellers) vise à fournir aux professionnels les compétences nécessaires pour installer, configurer et utiliser efficacement les solutions technologiques proposées par les VAR. Elle couvre les étapes d'installation des matériels et logiciels, la configuration avancée, ainsi que l'utilisation quotidienne des outils et applications. Les participants apprennent également à fournir un support technique, diagnostiquer et résoudre les problèmes, effectuer la maintenance préventive, et optimiser les performances des solutions. Cette formation est essentielle pour garantir une gestion efficace des solutions VAR et assurer une performance optimale des systèmes",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 7,
        image: formation12,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: 'formation a la navigation maritime',
        desc: 'La formation à la navigation maritime enseigne aux participants les compétences ...',
        detail: "La formation à la navigation maritime enseigne aux participants les compétences essentielles pour naviguer en toute sécurité en mer, en couvrant l'utilisation des outils de navigation comme les cartes maritimes et les systèmes GPS, ainsi que la compréhension des réglementations internationales. Les participants apprennent à planifier des trajets, à gérer les conditions météorologiques, et à assurer la sécurité du navire et de l'équipage. La formation inclut également des techniques de sauvetage et de gestion des situations d'urgence, garantissant une navigation efficace et sécurisée tout en respectant les règles maritimes.",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 8,
        image: formation13,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: 'Pierres et métaux précieux',
        desc: 'La formation sur les pierres et métaux précieux fournit une compréhension ...',
        detail: "La formation sur les pierres et métaux précieux fournit une compréhension approfondie des caractéristiques, de l'évaluation et de l'entretien de ces matériaux précieux. Les participants apprennent à identifier et évaluer les pierres précieuses et les métaux précieux, en utilisant des critères de qualité et de certification. La formation couvre également les techniques de traitement et d'entretien pour préserver leur valeur, ainsi que les tendances du marché et les pratiques commerciales. En outre, elle aborde les enjeux éthiques et les pratiques durables liés à l'extraction et au commerce de ces ressources.",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 9,
        image: formation11,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: "Développer l'argriculture et la pêche",
        desc: "La formation pour développer l'agriculture et la pêche vise à optimiser...",
        detail: "La formation pour développer l'agriculture et la pêche vise à optimiser les pratiques agricoles et halieutiques tout en garantissant la durabilité et la rentabilité. Elle couvre des techniques modernes de culture et de gestion des sols, ainsi que des méthodes de gestion durable des stocks de poissons et des écosystèmes aquatiques. Les participants apprennent à utiliser les dernières technologies et innovations, à adopter des pratiques respectueuses de l'environnement, et à élaborer des stratégies économiques pour améliorer la productivité et accéder aux marchés. Cette formation est essentielle pour les agriculteurs, pêcheurs, et gestionnaires de ressources naturelles souhaitant améliorer leurs pratiques et assurer un développement durable dans leurs secteurs respectifs.",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 10,
        image: formation10,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: "Sciences de la terre et Séismes",
        desc: 'La formation en sciences de la Terre et séismes offre une compréhension ...',
        detail: "La formation en sciences de la Terre et séismes offre une compréhension approfondie des processus géologiques, des mécanismes des séismes, et des techniques d'évaluation des risques sismiques. Elle couvre les principes fondamentaux de la géologie, les mouvements des plaques tectoniques, et les causes des séismes, ainsi que les méthodes de surveillance et de prévision des tremblements de terre. Les participants apprennent également à évaluer les risques sismiques, développer des stratégies pour réduire les risques, et préparer les infrastructures et les communautés aux impacts des séismes. Cette formation est essentielle pour les chercheurs, ingénieurs, et professionnels en gestion des risques souhaitant renforcer leur expertise en sismologie et en réduction des risques.",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 11,
        image: formation19,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: "Etudes Formation Recrutements National Et International",
        desc: 'Études Formation Recrutements National et International (EFRNI) est ...',
        detail: "Études Formation Recrutements National et International (EFRNI) est une formation spécialisée qui vise à développer des compétences avancées dans le domaine du recrutement, tant au niveau national qu'international. Elle couvre les enjeux liés au recrutement dans divers contextes culturels et légaux, tout en enseignant l'utilisation des outils modernes pour identifier et attirer les talents. La formation met également l'accent sur l'optimisation des processus de sélection et sur l'importance de la gestion des talents pour assurer la rétention et le développement des employés dans une perspective globale",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 12,
        image: formation17,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: "Apprendre le théatre pour les enfants",
        desc: 'La formation « Apprendre le théâtre pour les enfants » initie les jeunes...',
        detail: "La formation « Apprendre le théâtre pour les enfants » initie les jeunes à l’art dramatique en développant leur confiance en soi, leurs compétences en communication, et leur créativité. À travers des jeux de rôle, des improvisations, et des exercices de création, les enfants apprennent à exprimer leurs émotions et idées tout en renforçant leur esprit d'équipe et leur capacité à travailler en groupe. La formation introduit également les bases du théâtre, comme la prise de parole en public et la gestion du stress de la scène, offrant ainsi une expérience enrichissante qui stimule à la fois leur développement personnel et leurs compétences sociales",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 13,
        image: formation18,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: "Formation ascenseur",
        desc: 'La formation sur les ascenseurs est conçue pour fournir aux participants...',
        detail: "La formation sur les ascenseurs est conçue pour fournir aux participants une compréhension complète des systèmes d'ascenseurs, de leur installation à leur maintenance. Elle couvre les principes de fonctionnement des ascenseurs, les procédures de sécurité, et les techniques de dépannage. Les participants apprendront à installer, entretenir, et réparer les ascenseurs tout en respectant les normes de sécurité et de réglementation en vigueur. La formation est idéale pour les techniciens, ingénieurs, et toute personne impliquée dans le secteur des ascenseurs, offrant les compétences nécessaires pour assurer le bon fonctionnement et la sécurité des équipements.",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },
    {
        id: 14,
        image: formation5,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register: "Pour vous inscrire, cliquez simplement ici",
        resrveButton: "Réserver",
        title: "la conduite de train et de tramway",
        desc: 'La formation à la conduite de train et de tramway prépare les participants...',
        detail: "La formation à la conduite de train et de tramway prépare les participants à piloter ces véhicules de manière sécurisée et efficace. Elle couvre les aspects techniques de la conduite, y compris le maniement des commandes, la gestion des systèmes de signalisation, et le respect des procédures de sécurité. Les participants apprennent également à gérer les situations d'urgence, à optimiser la consommation d'énergie et à assurer le confort des passagers. La formation inclut des simulations pratiques et théoriques pour développer des compétences approfondies en conduite et en gestion des opérations ferroviaires et de tramway, tout en respectant les normes réglementaires en vigueur.",
        type: 'Formation',
        button: "En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show: "Tout afficher"
    },

]
export const serviceDataFR = [

    {
        id: 1,
        icon: <SlNote />,
        Servicetitle: "Découvrez nos services",
        image: service1,
        Bouton: "Apprendre encore plus",
        link:"/formation",

    },
    {
        id: 2,
        icon: <MdOutlineCleaningServices />,
        title: 'Nettoyage des Façades',
        image: service2,
        Bouton: "Apprendre encore plus",
        link: "/teamglass"
    },

    {
        id: 3,
        icon: <IoHomeOutline />,
        title: " Domiciliation d'Entreprise ",
        image: service3,
        Bouton: "Apprendre encore plus",
        link: <Link1 to="contact" className="text-sky-500" smooth={true} duration={1000} activeClass='active' spy={true}>Contact Us <i className="mdi mdi-chevron-right align-middle"></i></Link1>,

    },
    {
        id: 4,
        title: 'Developpement',
        icon: <CgWebsite />,
        image: service4,
        para1: 'Service de Developpement',
        Bouton: "Apprendre encore plus",
        link: "/team" ,

    },
    {
        id: 5,
        title: 'Recruitment',
        image: service5,
      

        link:"/jobs",


    },
    {
        id: 6,
        title: "Infirmière de soins aux patients",
        image: heroImage1,
        para1: "Recruitment Service",
        link:"/nurse",
    }
]
export const Titlefr = [
    {
        Title: "Études Formation Recrutement National et International",
        button: "Contactez-nous",
        Learn: " Pour en savoir plus",
    }
]
export const NurseFR = [{
    title: "Soins infirmiers compatissants auxquels vous pouvez faire confiance",
    desc: "Notre équipe dévouée d'infirmiers professionnels est là pour fournir des soins de la plus haute qualité avec empathie et respect. Votre santé et votre confort sont notre priorité absolue.",
    contact: "Contactez-nous dès aujourd'hui",
    about: "À propos de nous",
    descab: "Nous sommes une équipe d'infirmiers diplômés et expérimentés dédiée à fournir des soins exceptionnels dans le confort de votre domicile. Des soins post-opératoires à la gestion des maladies chroniques, notre objectif est d'améliorer votre qualité de vie grâce à des services personnalisés et compatissants."
}];
export const CardFr = [{
    title: "Points forts de nos soins infirmiers",
    Comfort: "Confort du patient",
    textCom: "Assurer le plus grand confort à nos patients grâce à des soins personnalisés et compatissants.",
    detail: "DÉTAIL",
    Caregiver: "Soutien aux aidants",
    textCare: "Soutenir les aidants familiaux avec les ressources et le répit dont ils ont besoin pour s'occuper de leurs proches.",
    Safety: "Sécurité et sûreté",
    textsafe: "Maintenir un environnement sûr et sécurisé pour tous les patients grâce à des mesures de sécurité rigoureuses."
}]
export const ServicesSectionFR = [{
    title: "Nos services de soins",
    Patient: "Soins aux patients",
    descp: "Prendre soin du patient pendant sa maladie.",
    Dressing: "Changement de pansement",
    descd: "Changement de pansements (chirurgicaux et dermatologiques, etc.).",
    Injections: "Injections",
    desci: "Types d'injections intramusculaires et sous-cutanées.",
    Medical: "Ordonnance médicale",
    decsm: "Avec une ordonnance médicale (obligatoire).",
    Umbilical: "Soins du cordon ombilical",
    descu: "Soins du cordon ombilical pour les bébés.",
    Postpartum: "Soins post-partum",
    decccp: "Soins pour la mère après l'accouchement.",
    IV: "Changement de perfusion",
    descI: "Changement de perfusion intraveineuse.",
    Blood: "Pression artérielle & Glucose",
    decsB: "Surveillance de la pression artérielle et du glucose sanguin."
}];

export const NavbarFR = [{
    Home: "Accueil",
    Services: "Services",
    Formation: "Formation",
    Jobs: "Emplois",
    gallery: "GALERIE",
    About: "À propos",
    Contact_us: "Contactez-nous"
}
]
export const AboutFR = [{
    h1: " À propos d'Ocean Connecting  ",
    ask: "Qui sommes-nous ?",
    title: "Nous sommes spécialisés dans le placement international et l'assistance documentaire, offrant un soutien sur mesure en plusieurs langues pour vous aider à naviguer dans les opportunités de carrière internationales.",
    desc: "Notre entreprise fournit des services de placement international et un soutien expert en plusieurs langues. Nous aidons les clients à trouver des opportunités de carrière à l'étranger et offrons une aide complète pour la préparation de documents en diverses langues. Notre objectif est de faciliter une transition fluide et efficace vers des carrières internationales.",
    year: "Années d'expérience",
    International: "Soutien aux carrières internationales",
    Services: "Services"
}]
export const recruitmentFR = [
    {
        id: 1,
        h1: "Recrutement",
        title: 'Recrutement International',
        desc: 'Relier les talents mondiaux aux opportunités au-delà des frontières. Nous simplifions le recrutement international pour vous aider à trouver les meilleurs candidats dans le monde entier.',
        image: recrutinter,
        title2: 'Services de Recrutement International',
        desc2: 'Notre entreprise se spécialise dans la mise en relation des meilleurs talents avec des opportunités mondiales. Nous proposons des solutions complètes de recrutement international, y compris la recherche, la présélection et le placement des candidats. En tirant parti de notre vaste réseau et de notre expertise sur divers marchés, nous aidons les entreprises à trouver les talents adéquats pour stimuler leur croissance et leur succès au-delà des frontières.',
        button: "Postulez maintenant",
        type: "International"
    },
    {
        id: 2,
        title: 'Recrutement OceanConnecting',
        desc: 'Connecter les meilleurs talents avec des organisations de premier plan à l’échelle nationale. Rationaliser votre processus de recrutement pour des résultats efficaces et efficients.',
        image: recrutocean,
        title2: 'Recrutement OceanConnecting',
        desc2: 'Nous sommes ravis de vous inviter à postuler pour un poste dans notre entreprise. Rejoignez notre équipe et contribuez à notre environnement dynamique tout en faisant avancer votre carrière. Explorez des opportunités de croissance, d’innovation et d’impact avec nous.',
        button: "Postulez maintenant",
        type: "National"
    },
];
export const jobsFR = [
    {
        id: 1,
        image: resume,
        h1: "Offres d'emploi",
        Find: "Trouvez votre emploi de rêve avec nous",
        title: "Demande de contrat de travail à l'étranger ",
        type: 'International',
        menu1: "Documents requis : ",
        secteur: " L'acte judiciaire (Apostil) est délivré par le tribunal et traduit en anglais par le ministère des affaires étrangères. ",
        menu2: "Images requises :",
        niveaulanguage: "Une photo de vous, une copie de votre passeport, une vidéo et une photo de vous en train d'exercer la profession que vous souhaitez exercer.",
        menu6: "Plus d'informations :",
        more: ' Vous pouvez obtenir le formulaire en cliquant sur le bouton de Télécharger , 🙏🏻 et pour vous faciliter la tâche, vous pouvez nous envoyer les documents originaux (PDF).',
        action: 'Demande',
        link: form,
        model: true
    },

    {
        id: 2,
        job: "Agences de placement",
        ocean: "Ocean connect",
        image: croatie,
        title: 'Contrat de travail en Croatie',
        type: 'International',
        secteur: 'Construction / Forge / Menuiserie / Peinture / Mécanicien électrique / Climatisation / Chauffeur Permi D / Boucher / Hôtellerie.',
        niveaulanguage: "La langue n'est pas nécessaire.",
        timevisa: 'La durée du visa est de 5 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 60,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D9%83%D8%B1%D9%88%D8%A7%D8%AA%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du contrat  :",
        menu6: "Plus d'informations :",
        action: 'Demande',


    },
    {
        id: 3,
        image: allemagne,
        title: 'Contrat de travail en Allemagne',
        type: 'International',
        secteur: ' Santé et soins infirmiers / Hôtels / Programmation',
        niveaulanguage: 'Langue B1 nécessaire.',
        timevisa: 'La durée du visa est de 8 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 80,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du contrat  :",
        menu6: "Plus d'informations :",
        action: 'Demande',

    },
    {
        id: 4,
        image: belgium,
        title: 'Contrat de travail en Belgique',
        type: 'International',
        secteur: 'Santé et soins infirmiers / Hôtels / Programmation  ',
        niveaulanguage: 'Langue B1 nécessaire.',
        timevisa: 'La durée du visa est de 8 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 60,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A8%D9%84%D8%AC%D9%8A%D9%83%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du contrat :",
        menu6: "Plus d'informations :",
        action: 'Demande',
    },
    {
        id: 5,
        image: italy,
        title: 'Contrat de travail en Italie',
        type: 'International',
        secteur: 'Santé et soins infirmiers / Hôtels / Agriculture.',
        niveaulanguage: 'Langue B1 nécessaire.',
        timevisa: 'La durée du visa est de 8 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 60,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du Contrat :",
        menu6: "Plus d'informations :",
        action: 'Demande',
    },
    {
        id: 6,
        image: spain,
        title: 'Contrat de travail en Espagne',
        type: 'International',
        secteur: 'Santé et soins infirmiers / Hôtels / Agriculture.',
        niveaulanguage: 'Langue B1 nécessaire.',
        timevisa: 'La durée du visa est de 8 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 60,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du Contrat :",
        menu6: "Plus d'informations :",
        action: 'Demande',
    },
    {
        id: 7,
        image: facade,
        title: 'Nettoyant pour façades de bâtiments',
        type: 'National',
        secteur: 'service de nettoyage',
        niveaulanguage: " La langue n'est pas nécessaire.",
        timevisa: 'niveau BAC.',
        contratime: 'contrat CDI - CDD .',
        pricecontrat: 'AGADIR .',
        more: " Connaissance des produits chimiques - Tolérance psychologique - Bonne communication - Aptitude à utiliser l'équipement - Précision et souci du détail - Travail en hauteur - Aptitude physique - Conscience de la sécurité ",
        link: "#",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Niveau d'éducation:",
        menu4: "Type Contrat :",
        menu5: "Région :",
        menu6: "Plus d'informations :",
        action: 'Demande',
    },
    // Assurez-vous que chaque offre d'emploi a un identifiant unique
];
export const ContactFR = [{
    title: "CONTACTEZ-NOUS",
    desc: "Nous aimerions avoir de vos nouvelles ! Remplissez le formulaire ci-dessous avec votre nom, votre e-mail et votre message, et nous vous répondrons dans les plus brefs délais. Merci de nous avoir contactés !",
    name: "Votre Nom :",
    email: "Votre E-mail :",
    question: "Votre Question :",
    comment: "Votre Commentaire :",
    Message: "Envoyer le Message"
}]
export const placementfr = [
    {
        job: "Agences de placement",
    }

]

export const footerDataFr = {
    "socialLinks": [ // Changed from array to object
        { "id": 1, "label": "Facebook", "to": "https://www.facebook.com/the.ocean.connecting/" },
        { "id": 2, "label": "Instagram", "to": "https://www.instagram.com/oceanconnecting.ma/" },
        { "id": 3, "label": "YouTube", "to": "https://www.youtube.com/@OceanConnecting" },
        { "id": 4, "label": "LinkedIn", "to": "https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" }
    ],
    "contactInfo": [
        {
            "id": 1,
            "Icon": "HiLocationMarker",
            "title": "Adresse",
            "content": "Immeubles Coralia, 2ème étage, ISLAN, Hay Mohammadi, AGADIR"
        },
        {
            "id": 2,
            "Icon": "PiPhoneCallFill",
            "title": "Appelez-nous",
            "content": "+212 704-309787"
        },
        {
            "id": 3,
            "Icon": "MdMarkEmailRead",
            "title": "Envoyez-nous un e-mail",
            "content": "oceanconnecting.ma@gmail.com"
        }
    ],
    "pageElements": [
        { "id": 1, "label": "Accueil", "link": "/Home" },
        { "id": 2, "label": "Services", "link": "/Services" },
        { "id": 3, "label": "Formation", "link": "/Formation" },
        { "id": 4, "label": "À propos de nous", "link": "/About" },
        { "id": 5, "label": "Contact", "link": "/Contact" }
    ],
    "pagelangague": [
        { "id": 1, "label": "Anglais", "link": "/Home" },
        { "id": 2, "label": "Espagnol", "link": "/Services" },
        { "id": 3, "label": "Allemagne", "link": "/Formation" },
        { "id": 4, "label": "Italie", "link": "/About" },
        { "id": 5, "label": "Frances", "link": "/Contact" }
    ],
    "ourServices": [
        { "id": 1, "label": "Development Informatique", "link": "/Development" },
        { "id": 2, "label": "Formation", "link": "/Formation" },
        { "id": 3, "label": "Des façades propres", "link": "/facades" },
        { "id": 4, "label": "Recrutement", "link": "/Recruitment" },
        { "id": 5, "label": "Domiciliation", "link": "/Domiciliation" }
    ],
    "ourFormation": [
        { "id": 1, "label": "First aid", "link": "/Development" },
        { "id": 2, "label": "Dj training", "link": "/Formation" },
        { "id": 3, "label": "elevator training", "link": "/facades" },
        { "id": 4, "label": "airport checkin agent training", "link": "/Recruitment" },
        { "id": 5, "label": "training in cinematography and directing", "link": "/Domiciliation" }
    ],
    "footerText": {
        "logoAlt": "RAKAR Logo",
        "mainDescription": "NOUS SOMMES PROFESSIONNELS",
        "detailedDescription": "Nous sommes spécialisés dans le placement et l'assistance documentaire à l'échelle mondiale, offrant un soutien sur mesure dans plusieurs langues pour vous aider à naviguer dans les opportunités de carrière internationales.",
        "ourServicesTitle": "Nos services",
        "ourPageTitle": "Nos pages",
        "ourlangagueTitle": "Langues enseignées",
        "ourFormationTitle": "Formation",

    },
    "footerCopyright": {
        "text": "Droit d'auteur © ",
        "company": "Ocean Connecting",
        "allRightsReserved": "Tous droits réservés.",
        "message": "Nous vous remercions de votre visite sur notre site web et vous souhaitons la bienvenue à ",

    }
}; 




