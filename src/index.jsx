/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes } from "@solidjs/router";

import '/src/css/materialize.css';
// import './css/materialize.css.map';
import '/src/css/index.css';
import Home from '/src/routes/Home';
import Snake from '/src/routes/Snake';

import Header from "/src/compos/Header";
import Footer from "/src/compos/Footer";

const root = document.getElementById('root');

// if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
//   throw new Error(
//     'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
//   );
// }

render(
  () => (
    <Router>
      <Header />
        <Routes>
          <Route path="/" component={Home} />
          {/* {/* <Route path="/ourClubs" component={OurClubs} /> */}
          <Route path="/snake" component={Snake} />
          {/* <Route path="/stats" component={Stats} /> */}
        </Routes>
      <Footer />
    </Router>
  ), root
);

{/* <script type="text/javascript" src="./src/compos/header.js"></script> */}
$(() => {

  const deskNavLinks = $('#nav-desk li');
  deskNavLinks.on('click', () => {
    deskNavLinks.removeClass('active');
    $(this).addClass('active');
  });

  $('.sidenav').sidenav();
});

