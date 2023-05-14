import React from "react";

function Footer() {
  return (
    <footer className="footer row bg-info pt-5 pb-3">
      <div className="social col">
        <section>Social Medias</section>
        <ul>
          <li>
            <a href="uuinfo@ethionet.et"> Email <i className="fa fa-envelope"/></a>
          </li>
          <li>
            <a href="twitter.com/uu_twt_official">Twitter <i className="fab fa-twitter"/></a>
          </li>
          <li>
            <a href="t.me/uu_tgm_official">Telegram <i className="fab fa-telegram-plane"></i></a>
          </li>
          <li>
            <a href="facebook.com/unityunoversity">Facebook <i className="fab fa-facebook-f"/> </a>
          </li>
        </ul>
      </div>
      <div className="Contact col">
        <section>Contact info</section>
        <ul>
          <li>Main office, Gerji Campus</li>
          <li>+251-11-6298154 (Operator)</li>
          <li>+251-11-6298154 (Registrar)</li>
          <li>+251-11-6298154 (President)</li>
        </ul>
      </div>
      <div className="campus col">
          <section>Campuses</section>
        <ul>
          <li>Al-Amoudi campus-Gerji(Addiss Ababa)</li>
          <li>Keranyo campus-Keranyo(Addiss Ababa)</li>
          <li>Geferssa campus-Burayou(Addiss Ababa)</li>
        </ul>
      </div>
      <div className="col">
        <section>Campuses</section>
        <ul>
          <li>Adama campus-Adama</li>
          <li>Rukiya campus-Dessie</li>
          <li>CMC/Arega campus-CMC</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
