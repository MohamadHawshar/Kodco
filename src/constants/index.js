import {
  facebook, 
  instagram, 
  linkedin, 
  residentiel, 
  renovation, 
  store, 
  phone, 
  helmet, 
  mail,
  p1_i0,
  p1_i1,
  p2_i0,
  p3_i0,
  p3_i1,
  p3_i2,
  p3_i3,
  p3_i4,
  p4_i0,
  p5_i0,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "Contact",
    title: "contact",
  },
  {
    id: "Projects",
    title: "Nos Réalisation",
  },
];
export const services = [
  {
    id: "residentiel",
    icon: residentiel,
    title: "Résidentiel",
    content: "Lorem ipsum dolor sit amet. Non quae deleniti ut harum voluptatum eum voluptatem rerum et voluptatem recusandae aut nisi dolor ut alias reiciendis sed sint similique.",

  },
  {
    id: "commercial",
    icon: store,
    title: "Commercial",
    content: "Lorem ipsum dolor sit amet. Non quae deleniti ut harum voluptatum eum voluptatem rerum et voluptatem recusandae aut nisi dolor ut alias reiciendis sed sint similique.",


  },
  {
    title: "renovation",
    icon: renovation,
    title: "Rénovation",
    content: "Lorem ipsum dolor sit amet. Non quae deleniti ut harum voluptatum eum voluptatem rerum et voluptatem recusandae aut nisi dolor ut alias reiciendis sed sint similique.",


  }
]



export const footerLinks = [
  {
    id: "item-1",
    name: "Phone",
    value: "(514) 246 - 1568",
    icon: phone
  },
  {
    id: "item-2",
    name: "Mail",
    value: "administration@kodcoconstruction.com",
    icon: mail
  },
  {
    id: "item-3",
    name: "RBQ",
    value: "RBQ 5769 - 7021 - 01",
    icon: helmet
  },

]

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://m.facebook.com/Kodco-Construction-104069065749709/?refid=13&__tn__=%2Cg",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://m.facebook.com/Kodco-Construction-104069065749709/?refid=13&__tn__=%2Cg",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://m.facebook.com/Kodco-Construction-104069065749709/?refid=13&__tn__=%2Cg",
  },
];

export const categories = ["Tous", "Résidentiel", "Commercial", "Rénovation"];

export const projects = [
  {
    id: 1,
    title: "Titre de Project 1",
    category: "residentiel",
    images: [p1_i0, p1_i1],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  {
    id: 2,
    title: "Titre de Project 2",
    category: "residentiel",
    images: [p2_i0],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  {
    id: 3,
    title: "Titre de Project 3",
    category: "commercial",
    images: [p3_i0, p3_i1, p3_i2, p3_i3, p3_i4],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  {
    id: 4,
    title: "Titre de Project 4",
    category: "residentiel",
    images: [p4_i0],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  {
    id: 5,
    title: "Titre de Project 5",
    category: "residentiel",
    images: [p5_i0],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
];
