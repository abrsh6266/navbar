import { social, links } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { useRef, useState } from "react";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
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
        className="links-container"
        ref={linksContainerRef}
        style={linkStyles}
      >
        <ul className="links" ref={linksRef}>
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
      {/* {social links} */}
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const { id, icon, url } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
