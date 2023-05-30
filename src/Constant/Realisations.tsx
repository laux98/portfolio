import { realisationsType } from "../Types";
import projet1 from "../Assets/projet_1.jpeg";
import projet2 from "../Assets/projet_2.jpeg";
import projet3 from "../Assets/projet_3.jpeg";
import projet4 from "../Assets/projet_4.jpg";
import projet5 from "../Assets/projet_5.jpg";
import projet6 from "../Assets/projet_6.jpeg";

const realisations: realisationsType = [
  {
    title: "Détection de Poisson",
    picture: projet6,
    date: "2022 (3 Semaines)",
    techno: ["Roboflow", "React", "YOLO"],
    place: "Imerir, Perpignan",
    description: [
      "Projet réalisé en collaborant avec l'Observatoire Océanologique de Banyuls-sur-Mer consistant à effectuer une reconnaissance des espèces de poissons dans des aquariums de deux méthodes",
      "La première méthode est en utilisant une borne reliée à une caméra et filmant l'aquarium. Le visiteur peut sélectionner le poisson dont il veut avoir les informations.",
      "La seconde méthode est d'utiliser une application web, de prendre en photo l'espèce voulue, et par la suite pouvoir accéder à ses informations.",
      "Le travail en amont a été de prendre des milliers de photos des différentes espèces, de labelliser les images, puis de faire apprendre un réseau de neurones en utilisant le dataset.",
    ],
  },
  {
    title: "Jeu de voiture",
    picture: projet5,
    date: "2022 (3 Semaines)",
    techno: ["C++ / QT", "Intelligence Artificielle", "Open CV"],
    place: "Imerir , Perpignan",
    description: [
      "Projet de troisième année d'IMERIR consistant à créer un jeu vidéo de course de voiture",
      "Le jeu peut se jouer au clavier, avec une manette de console standard ou avec une manette confectionnée avec une imprimante 3D",
      "La piste de la course est symbolisée par des jetons en carton et récupérée grâce à open cv afin d'être modélisée dans le jeu.",
      "Le jeu propose une interface 2D, une interface 3D et les projets entres les équipes étaient compatibles pour pouvoir tous jouer ensembles dans un réseau local.",
      "Réalisation d'une intelligence artificielle qui joue une partie.",
    ],
  },
  {
    title: "Gestion de logistique",
    picture: projet4,
    date: "2021 (1 Semaine)",
    techno: ["Arduino", "C++ / QT", "MQTT", "Sql Lite", "STM", "Detection d'image Open Cv"],
    place: "Imerir, Perpignan",
    description: [
      "Projet de seconde année d'Imerir consistant à stimuler le stockage de marchandises dans un entrepôt. Les colis sont représentés par des boules plastiques de couleurs et transportés par un robot suiveur de ligne sur un piste.",
      "Le robot passe devant une caméra qui, à l'aide d'open cv, determinera la couleur de la boule et donc l'endroit de stockage",
      "La communication inter programmes se fait avec MQTT.",
    ],
  },
  {
    title: "Medic BOT",
    picture: projet3,
    date: "2021 (2 Semaines)",
    techno: ["Python", "Web Service", "Fast Api", "SQLite", "Arduino", "Java"],
    place: "Imerir, Perpignan",
    description: [
      "Projet de première année d'Imerir consistant à créer un système de livraison de médicament et dont la finalité est de déplacer un robot suiveur de ligne sur une piste représentant un plan d'hôpital afin de délivrer des médicaments.",
      "Les livraisons de médicaments sont saisies dans une base de données via une interface Java et par la suite, le web service communique avec une carte arduino via une api pour lui spécifier quel médicament livrer à quelle chambre, et quel chemin emprunter.",
    ],
  },
  {
    title: "Jeu Minotaure",
    picture: projet2,
    date: "2020 (1 semaine)",
    techno: ["Python", "TKinter", "Algorithmique"],
    place: "Imerir, Perpignan",
    description: [
      "Projet de première année d'Imerir consistant à créer un labyrinthe dans lequel un personnage devait automatiquement trouver la sortie en utilisant l'algorithme du mur gauche",
      "Le jeu était entrecoupé d'une phrase de tir ou il fallait appuyait sur une touche au bon moment pour réaliser le tir",
    ],
  },
  {
    title: "Detection incendie",
    picture: projet1,
    date: "2019 (6 mois)",
    techno: ["RaspberryPi", "Python", "C++", "GSM"],
    place: "Lycée Pablo Picasso, Perpignan ",
    description: [
      "Projet réalisé dans le cadre du BTS consistant à créer des modules placés en fôrets afin de détecter les départs d'incendies.",
      "Communique avec un serveur qui lui même communiquera avec les pompiers via un envoie de mail et une alerte par SMS.",
    ],
  },
];

export { realisations };
