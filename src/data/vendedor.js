import bg from "@/images/shapes/contact-one-shape.png";

export const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Tu nombre",
    required: true,
  },
  {
    name: "cedula",
    type: "text",
    placeholder: "Tu cédula",
    required: true,
  },
  {
    name: "phone",
    type: "text",
    placeholder: "Tu teléfono",
    required: true,
  },
  {
    name: "pdvname",
    type: "text",
    placeholder: "Nombre de PVD",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Tu Email",
    required: true,
  },
  {
    name: "codigo",
    type: "text",
    placeholder: "Tu codigo",
    required: true,
  },
  {
    name: city,
    type: "text",
    placeholder: "Tu ciudad",
    required: true,
  },
];

const common = {
  phone: "+1- ( 246 ) 333 - 0079",
  phoneHref: "12463330079",
  email: "needhelp@company.com",
};

export const contactOne = {
  bg,
  tagline: "contact with us",
  title: "We are Here to Help You & Your Business",
  text: "Pellentesque ultricies quam dui, id portt tor leo \n iaculis nec. Phasellus ac neque.",
  timeRange: "8:00 am - 6:00 pm",
  inputs,
  bottomTitle: "Visit Our Office",
  contacts: [
    {
      id: 1,
      title: "Austin",
      text: "22 Texas West Hills",
      ...common,
    },
    {
      id: 2,
      title: "Boston",
      text: "22 Texas West Hills",
      ...common,
    },
    {
      id: 3,
      title: "New York",
      text: "22 Texas West Hills",
      ...common,
    },
    {
      id: 4,
      title: "Dubai",
      text: "22 Texas West Hills",
      ...common,
    },
  ],
};

export const contactPage = {
  tagline: "Viaja con Sky",
  title: "Have Any Question?",
  title2: "Registra tu cupon",
  inputs,
};

export const contactDetails = {
  title: "Get in Touch",
  text: "Nulla quis commodo ligula. Curabitur bibendum ante at nibh lobortis, nec volutpat mauris faucibus.",
  address: "60 Road Broklyn Golden Street of New York. USA",
  contactIcon: "icon-phone1",
  ...common,
};
