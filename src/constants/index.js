import {facebook, instagram, linkedin,residentiel,renovation,store,phone,helmet,mail  } from "../assets";

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
    id:"residentiel",
    icon:residentiel,
    title:"Résidentiel",
    content:"Lorem ipsum dolor sit amet. Non quae deleniti ut harum voluptatum eum voluptatem rerum et voluptatem recusandae aut nisi dolor ut alias reiciendis sed sint similique.",

  },
  {
    id:"commercial",
    icon:store,
    title:"Commercial",
    content:"Lorem ipsum dolor sit amet. Non quae deleniti ut harum voluptatum eum voluptatem rerum et voluptatem recusandae aut nisi dolor ut alias reiciendis sed sint similique.",


  },
  {
    title:"renovation",
    icon:renovation,
    title:"Rénovation",
    content:"Lorem ipsum dolor sit amet. Non quae deleniti ut harum voluptatum eum voluptatem rerum et voluptatem recusandae aut nisi dolor ut alias reiciendis sed sint similique.",


  }
]



export const footerLinks = [
      {
        id:"item-1",
        name: "Phone",
        value:"(999) 000 - 0000",
        icon: phone
      },
      {
        id:"item-2",
        name: "Mail",
        value:"info@kodcoconstruction.com",
        icon: mail
      },
      {
        id:"item-3",
        name: "RBQ",
        value:"RBQ 0000 - 0000 - 00",
        icon: helmet
      },

]

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];


export const projects = [
  {
    id: 1,
    title: "Project 1",
    category: "commercial",
    images: [instagram],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  {
    id: 2,
    title: "Project 2",
    category: "residentiel",
    images: [instagram],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  {
    id: 3,
    title: "Project 3",
    category: "renovation",
    images: [instagram],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
];
