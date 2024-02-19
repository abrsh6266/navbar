import { social, links } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { useState } from "react";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="logo" alt="logo" />
        <button onClick={toggleLinks} className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <div
        className={
          showLinks ? "links-container show-container" : "links-container"
        }
      >
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
