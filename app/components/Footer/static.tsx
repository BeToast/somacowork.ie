import { icons } from "static/svg";

export const footerRows:{key:number, cont:React.ReactNode, svg: JSX.Element, href: string}[] = [
  {
    key: 0,
    cont: <p>Facebook</p>,
    svg: icons.facebook,
    href: "https://www.facebook.com/somamoycullen/",
  },
  {
    key: 1,
    cont: <p>086-737-1443</p>,
    svg: icons.phone,
    href: "tel:+353-86-737-1443",
  },
  {
    key: 2,
    cont: <p>somacowork@gmail.com</p>,
    svg: icons.email,
    href: "mailto:somacowork@gmail.com",
  },
  {
    key: 3,
    cont: <p>Unit 8, Gáirdín Mhaíre, Moycullen, Galway</p>,
    svg: icons.address,
    href: "https://goo.gl/maps/8jQbBoeRW46ePxuh8"
  },
];