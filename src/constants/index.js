import {
  blackImg,
  blueImg,
  carousel1Img,
  carousel2Img,
  carousel3Img,
  carousel4Img,
  carousel5Img,
  carousel6Img,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  ipadAirImg,
  ipadImg,
  ipadMiniImg,
  ipadProImg,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "iPad", "iPhone", "Support"];
export const altNavLists = ["Overview", "Tech Specs"];
export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const imageCarousel = [
  {
    title: "Productivity",
    desc: "Your workplace can be any plance.",
    img: carousel1Img,
  },
  {
    title: "Creativity",
    desc: "Take your inner artist out and about.",
    img: carousel2Img,
  },
  {
    title: "Learning",
    desc: "Your classroom can be anywhere.",
    img: carousel3Img,
  },
  {
    title: "Entertainment",
    desc: "Kick bac. Tune in. Game on.",
    img: carousel4Img,
  },
  {
    title: "Apple Pencil",
    desc: "Dream it up. Jot it down.",
    img: carousel5Img,
  },
  {
    title: "iPadOS + Apps",
    desc: "Everyday superpowers. Built right in.",
    img: carousel6Img,
  },
];

export const ipadLineup = [
  {
    title: "iPad Pro",
    desc: "The ultimate iPad experience with our most advanced technology.",
    img: ipadProImg,
    color: "#C9C8C2",
    size: '12.9"',
    price: 1199,
    displayType: "Ultra Retina XDR display",
    colorSpec: "P3 wide color",
    extraDesc: "Nano-texture display glass option on 1TB and 2TB models",
  },
  {
    title: "iPad Air",
    desc: "Serious performance in a thin and light design.",
    img: ipadAirImg,
    color: "#C9C8C2",
    size: '11.9"',
    price: 1099,
    displayType: "Liquid Retina display",
    colorSpec: "P3 wide color",
    extraDesc:
      "Measured diagonally as a rectangle, the 13-inch iPad Air is 12.9 inches, and the 11-inch iPad Air is 10.86 inches. Actual viewable area is less.",
  },
  {
    title: "iPad",
    desc: "The colorful, all‑screen iPad for the things you do every day.",
    img: ipadImg,
    color: "#C9C8C2",
    size: '10.3"',
    price: 950,
    displayType: "Liquid Retina display",
    colorSpec: "sRGB color",
  },
  {
    title: "iPad mini",
    desc: "The full iPad experience in an ultraportable design.",
    img: ipadMiniImg,
    color: "#C9C8C2",
    size: '8.3"',
    price: 799,
    displayType: "Liquid Retina display",
    colorSpec: "sRGB color",
  },
];
