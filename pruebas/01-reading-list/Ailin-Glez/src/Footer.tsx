import "./Footer.css";

import reactIcon from "./assets/react.svg";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/Ailin-Glez" target="_blank">
        🖥️ Created by <span>Ailin-Glez</span> with
      </a>
      <img src={reactIcon} alt="react icon" />
    </footer>
  );
}

export default Footer;
