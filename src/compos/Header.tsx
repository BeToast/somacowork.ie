import "./Header.css";
import { A } from "@solidjs/router";
// import { } from "../staticExports.js";

//// Typescript types ////
type Page = {
  title: string;
  href: string;
};
//////////////////////////

export default function Header() {
  // pages : this where you add new pages
  const pages: Array<Page> = [
    {title: 'Home', href:'/'},
    {title: 'Snake', href:'/snake'},
    // {title: 'Fixtures', href:'/fixtures'},
  ];

  return (
  <header>
    <ul id="nav-side" class="sidenav">
      <div class="center-align">
        {pages.map(page => <li class="sidenav-close"><A href={page.href}>{page.title}</A></li>)}
      </div>
    </ul>
    <nav>
      <div class="nav-wrapper white">
        <a href="#" data-target="nav-side" class="sidenav-trigger green-text darken-2 no-margin-right"><i class="material-icons" style="font-size:40px">menu</i></a>
        <div>
        <A href="/" class="brand-logo valign-wrapper no-margin-right">
          <img class="header-img hide-at-502 show-at-320" src={''}/>
          <img class="header-img hide-at-320" src={''}/>
        </A>
        </div>
        <ul id="nav-desk" class="right hide-on-med-and-down">
          {pages.map(page => <li><A class="green-text darken-2" href={page.href}>{page.title}</A></li>)}
        </ul>
      </div>
    </nav>
  </header>);
}

// function deskHeader(pages:Array<Page>){
//   return (
//     <nav>
//       <div class="nav-wrapper">
//         <A href="/" class="brand-logo">Logo</A>
//         <a href="#" data-target="nav-side" class="sidenav-trigger"><i class="material-icons">menu</i></a>
//         <ul id="nav-desk" class="hide-on-small-and-down right">
//           {pages.map(page => 
//             <li><A href={page.href}>{page.title}</A></li>
//           )}
//           </ul>
//         </div>
//       </nav>
//   );
// }

// function mobileHeader(pages:Array<Page>){
//   return (
//     <ul id="nav-side" class="sidenav">
//       {pages.map(page => 
//         <li><A href={page.href}>{page.title}</A></li>
//       )}
//       </ul>
//   );
// }


