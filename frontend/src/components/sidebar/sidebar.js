import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../content/sidebar";
import "./sidebar.css";
import { IconContext} from "react-icons";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{}}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle customNeuStyle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="mt-5">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="nav-text customNeuStyleLink mb-5">
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
             <li className='nav-text customNeuStyleLink'>
            <a  target={"_blank"} href="https://drive.google.com/file/d/1fS1HntvtsrtXYTjvTYIb79cqv9TgpJKf/view?usp=sharing" rel="noopener noreferrer">
             <FaIcons.FaEnvelopeOpenText></FaIcons.FaEnvelopeOpenText> <span>Resume</span>
            </a>
          </li>
          </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
