import svg from './svg';

export type price = {
  price: number,
  text?: string,
}

export type Product = {
  key: number,
  title: string,
  prices: price[],
  caption: string,
  description: string,
  svg?: string,
}

export const products: Product[] = [
  {
    key: 0,
    title: "Virtual Office",
    prices: [
      {price:75}
    ],
    caption: "Your Gateway to Flexibility and Professionalism",
    description: "Elevate your business presence with our Virtual Office solution. Enjoy the perks of a business address and mail handling services all without the need for a physical workspace. Maintain flexibility while projecting a professional image, allowing you to focus on what matters most—growing your business. Experience the convenience and efficiency of our Virtual Office at Soma.",
    svg: svg.virtualDesk,
  },{
    key: 1,
    title: "Hotdesk",
    prices: [
      {price:160}
    ],
    caption: "Work Flexibly and Connect Seamlessly",
    description: "Experience the freedom of our Hotdesk Solution, designed for professionals on the go. With our flexible workspace, you can enjoy the benefits of a fully equipped desk whenever you need it. Whether you're a freelancer, remote worker, or constantly on the move, our Hotdesk Solution provides you with a productive environment and the opportunity to connect with like-minded individuals. Embrace flexibility, enhance your productivity, and make meaningful connections at Soma.",
    svg: svg.hotDesk
  },{
    key: 2,
    title: "Dedicated Desk",
    prices: [
      {price:230, text: "near windows"},
      {price:250, text: "increased privacy"},
    ],
    caption: "Your Personalised Workspace for Maximum Productivity",
    description: "Experience the ultimate in workspace customisation with our Dedicated Desk Solution. Enjoy the luxury of having a designated desk exclusively for your use, complete with all the amenities you need to thrive. Personalise your space to suit your preferences, create a home for your ideas, and establish a routine that fosters productivity. Embrace the convenience and comfort of our Dedicated Desk Solution at Soma, where your workspace becomes an extension of your professional identity.",
    svg: svg.dedicatedDesk
  },{
    key: 3,
    title: "Private Office",
    prices:  [
      {price:400, text: "single"},
      {price:600, text: "double"},
    ],
    caption: "Tailored Spaces for Productivity and Privacy",
    description: "Discover the ideal workspace for your business with our Private Office Solutions. Whether you're a solopreneur or a small team, our one and two person private offices offer a secluded and professional environment to focus and collaborate. Experience the benefits of a dedicated space designed to meet your specific needs, complete with modern amenities and a personalised atmosphere. Elevate your work experience, enhance productivity, and enjoy the privacy you deserve in our private offices.",
    svg: svg.privateOffice
  }
];

// export const productTitles = products.map(currProd => (
//   currProd.title
// ));