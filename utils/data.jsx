import { Home } from "../src/pages/Home";
import { Error } from "../src/pages/Error";
import { Pricing } from "../src/pages/Pricing";
import { AiOutlineCheck } from "react-icons/ai";

export const navigationData = [
  { path: "/", element: <Home /> },
  { Path: "/pricing", element: <Pricing /> },
  // { path: "*", element: <Error /> },
];

export const NavLinksData = [
  {
    pathname: "/pricing",
    title: "Pricing",
  },
  {
    pathname: "Features",
    title: "Features",
  },
  {
    pathname: "intergrations",
    title: "Intergrations",
    dropdown: [
      { pathname: "/Intergration-drop-one", title: "Inner Drop One" },
      { pathname: "/Intergration-drop-two", title: "Inner Drop Two" },
    ],
  },
  {
    pathname: "company",
    title: "Company",
  },
];

export const vexiconAppData = [
  {
    id: 0,
    title: "Check the latency",
    description:
      "Test and graph your Internet latency across the world in seconds.",
    activestate: false,
  },

  {
    id: 1,
    title: "Test the speed",
    description:
      "Measure the speed and quality of your Internet connection using our app and the world's most reliable test.",
    activestate: true,
  },

  {
    id: 2,
    title: "Control your transfer",
    description:
      "Monitor how much transfer you have used and the download and upload speeds.",
    activestate: false,
  },
];

export const managementData = [
  {
    imgscr: "/assets/img/Frame (6).png",
    name: "Vexicon App",
    title: "easy self installation",
    description:
      "Create an account to determine the best place to set up before installation.",
    reverse: false,
    buttonGroup: true,
  },

  {
    imgscr: "/assets/img/Frame (7).png",
    name: "Vexicon App",
    title: "manage your internet",
    description:
      "The app helps you customize settings, receive updates, access support and see real-time performance data such as download speed, latency and uptime.",
    reverse: true,
    buttonGroup: false,
  },
];

export const pricingdata = [
  {
    header: "smart",
    title: "Simple plan",
    price: "29.00",
    buttonchildren: "Check the offer",
    buttonColor: "#fff",
    buttonbg: "#000",
    renewal: "Renewal: $147.99/year",
    icon: <AiOutlineCheck />,

    stats: [
      { device: "10 devices" },
      { spped: "Test speed", colorChoice: true },
      { statistics: "Statistics", colorChoice: true },
    ],
  },

  {
    header: "Komfort",
    title: "Expanded plan",
    price: "59.00",
    buttonchildren: "Check the offer",
    renewal: "Renewal: $307.99/year",
    icon: <AiOutlineCheck />,

    stats: [
      { device: "Unlimited devices" },
      { spped: "Test speed" },
      { statistics: "Statistics", colorChoice: true },
    ],
    cover: true,
    buttonColor: "#000",
    buttonbg: "#E6DDFE",
  },

  {
    header: "pro",
    title: "Enterprise plan",
    price: "69.00",
    buttonchildren: "Check the offer",
    buttonColor: "#fff",
    buttonbg: "#000",
    renewal: "Renewal: $738.00/year",
    icon: <AiOutlineCheck />,

    stats: [
      {
        device: "unlimited' devices",
      },
      { spped: "Test speed" },
      { statistics: "Statistics" },
    ],
  },
];

export const footerleftlinkdata = [
  {
    pathname: "/termsofuse",
    title: "Terms of Use",
  },
  {
    pathname: "/Privacy",
    title: "Privacy Policy",
  },
  {
    pathname: "/contact",
    title: "Contact",
  },
  {
    pathname: "/blog",
    title: "Blog",
  },
];

export const footerrightdata = [
  {
    pathname: "/pricing",
    title: "Pricing",
  },
  {
    pathname: "/features",
    title: "Features",
  },
  {
    pathname: "/intergrations",
    title: "Intergrations",
  },
  {
    pathname: "/company",
    title: "Company",
  },
];
