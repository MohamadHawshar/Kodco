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
  p1_i2,
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
  p4_i1,
  p4_i2,
  p4_i3,
  p4_i4,
  p4_i5,
  p4_i6,
  p5_i1,
  p5_i2,
  p5_i3,
  p5_i4,
  p6_i0,
  p6_i1,
  p6_i2,
  p6_i3,
  p6_i4,
  p6_i5,
  p6_i6,
  p6_i7,
  p6_i8,
  acq,
  rbq,
  gcr,
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
    title: "Nos Réalisation",
  },
];
export const services = [
  {
    id: "residentiel",
    icon: residential_bg,
    title: "Résidentiel",
    content: "Kodco veille à ce que vos projets immobiliers soient achevés dans les délais et avec le degré d'excellence que vous exigez.",

  },
  {
    id: "commercial",
    icon: commercial_bg,
    title: "Commercial",
    content: "Vous pouvez faire confiance au professionnalisme de Kodco pour tout travail, qu'il soit résidentiel ou commercial.",


  },
  // {
  //   id: "renovation",
  //   icon: renovation,
  //   title: "Rénovation",
  //   content: "Lorem ipsum dolor sit amet. Non quae deleniti ut harum voluptatum eum voluptatem rerum et voluptatem recusandae aut nisi dolor ut alias reiciendis sed sint similique.",


  // }
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
    value: "info@kodcoconstruction.com",
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
  // {
  //   id: "social-media-1",
  //   icon: instagram,
  //   link: "https://m.facebook.com/Kodco-Construction-104069065749709/?refid=13&__tn__=%2Cg",
  // },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/Kodco-Construction-104069065749709/",
  },
  {
    id: "social-media-4",
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
  {
    id: 3,
    title: "Titre de Project 5",
    category: ["residentiel","all"],
    images: [p5_i0,p5_i1,p5_i2,p5_i3,p5_i4],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  {
    id: 2,
    title: "Titre de Project 4",
    category: ["residentiel","all"],
    images: [p4_i0,p4_i1,p4_i2,p4_i3,p4_i4,p4_i5,p4_i6 ],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  
  {
    id: 4,
    title: "Titre de Project 1",
    category: ["residentiel","all"],
    images: [p1_i0, p1_i1,p1_i2],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  {
    id: 0,
    title: "Titre de Project 3",
    category: ["commercial","all","renovation"],
    images: [p3_i0, p3_i1, p3_i2, p3_i3, p3_i4],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  {
    id: 1,
    title: "Titre de Project 2",
    category: ["residentiel","all"],
    images: [p2_i0],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
  
 

  {
    id: 5,
    title: "Titre de Project 6",
    category: ["residentiel","all","renovation"],
    images: [
      p6_i6,
      p6_i0,
      p6_i1,
      p6_i2,
      p6_i3,
      p6_i4,
      p6_i5,
      p6_i7,
      p6_i8,
    ],
    description: ["lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
  },
];

export const certificats = [
  {
    id: 0,
    title: "acq",
    image: acq,
    alt: "acq",
  },
  {
    id: 1,
    title: "rbq",
    image: rbq,
    alt: "rbq",
  },
  {
    id: 2,
    title: "gcr",
    image: gcr,
    alt: "gcr",
  },
  {
    id: 3,
    title: "ccq",
    image: ccq,
    alt: "ccq",
  },
];