import "./Footer.css";
// import { } from "../staticExports.js";

export default function Footer() {
  // pages : this where you add new pages
  return (
    <footer class="page-footer white">
      <div class="container">
        <div class="row">
          <div class="col s12 center-align">
            <div class="special">
              <a class="green-text text-darken-2 no-margin-right" href="https://www.biblegateway.com/passage/?search=Colossians%203%3A23-24&version=NIV" target="_blank">
                <img class="icon-img" src={''}/>
                Click this!
              </a>
            </div>  
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container center-align">
          <img class="footer-img" src={''}/>
          <img class="footer-img" src={''}/>
        </div>
      </div>
    </footer>
  );
}


