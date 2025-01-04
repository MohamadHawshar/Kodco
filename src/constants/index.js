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
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  acq,
  rbq,
  pmp,
  gestion_bg,
  oiq,
  aeq,
  ccq,
  residential_bg,
  commercial_bg
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
    title: "Réalisation",
  },
];
export const services = [
  {
    id: "residentiel",
    icon: residential_bg,
    title: "Résidentiel",
    content: "PVP veille à ce que vos projets immobiliers soient achevés dans les délais et avec le degré d'excellence que vous exigez.",

  },
  {
    id: "commercial",
    icon: commercial_bg,
    title: "Commercial",
    content: "Vous pouvez faire confiance au professionnalisme de PVP pour tout travail, qu'il soit résidentiel ou commercial.",


  },
  {
    id: "renovation",
    icon: gestion_bg,
    title: "Gestion de projets",
    content: "PVP peut vous accompagner de la gestion d'appel d'offres à la livraison de vos projets.",


  }
]



export const footerLinks = [
  {
    id: "item-1",
    name: "Phone",
    value: "(514) 824 - 4860",
    icon: phone
  },
  {
    id: "item-2",
    name: "Mail",
    value: "gestionhkhoder@outlook.com",
    icon: mail
  },
  {
    id: "item-3",
    name: "RBQ",
    value: "RBQ 748 - 5708 - 01",
    icon: helmet
  },

]

export const socialMedia = [
  // {
  //   id: "social-media-1",
  //   icon: instagram,
  //   link: "https://m.facebook.com/PVP-Construction-104069065749709/?refid=13&__tn__=%2Cg",
  // },
  {
    id: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/PVP-Construction-104069065749709/",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/m-khoder-674a75235/?originalSubdomain=ca",
  },
];

export const categories = [
  { id: "all", title: "Tout" },
  { id: "residentiel", title: "Résidentiel" },
  { id: "commercial", title: "Commercial" },
  // { id: "renovation", title: "Rénovation" },
];

export const projects = [
  // {
  //   id: 3,
  //   title: "Titre de Project 5",
  //   category: ["residentiel","all"],
  //   images: [p5_i0,p5_i1,p5_i2,p5_i3,p5_i4],
  //   description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  // },
  // {
  //   id: 2,
  //   title: "Titre de Project 4",
  //   category: ["residentiel","all"],
  //   images: [p4_i0,p4_i1,p4_i2,p4_i3,p4_i4,p4_i5,p4_i6 ],
  //   description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  // },
  
  // {
  //   id: 4,
  //   title: "Titre de Project 1",
  //   category: ["residentiel","all"],
  //   images: [p1_i0, p1_i1,p1_i2],
  //   description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  // },
  {
    id: 0,
    title: "Titre de Project 3",
    category: ["commercial","all","renovation"],
    images: [  p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      p10,
      p11,
      p12,
      p13],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  // {
  //   id: 1,
  //   title: "Titre de Project 2",
  //   category: ["residentiel","all"],
  //   images: [p2_i0],
  //   description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  // },
  
 

//   {
//     id: 5,
//     title: "Titre de Project 6",
//     category: ["residentiel","all","renovation"],
//     images: [
//       p6_i6,
//       p6_i0,
//       p6_i1,
//       p6_i2,
//       p6_i3,
//       p6_i4,
//       p6_i5,
//       p6_i7,
//       p6_i8,
//     ],
//     description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
//   },
];

export const certificats = [
  {
    id: 0,
    title: "pmp",
    image: pmp,
    alt: "pmp",
  },
  {
    id: 1,
    title: "rbq",
    image: rbq,
    alt: "rbq",
  },
  {
    id: 2,
    title: "oiq",
    image: oiq,
    alt: "oiq",
  },
  {
    id: 3,
    title: "aeq",
    image: aeq,
    alt: "aeq",
  },
  {
    id: 5,
    title: "ccq",
    image: ccq,
    alt: "ccq",
  }
];