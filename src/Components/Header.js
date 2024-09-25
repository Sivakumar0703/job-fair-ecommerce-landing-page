import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../asserts/ecom-logo.png";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div id="header">
        <div id="menu">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu-btn"
            aria-expanded="false"
            aria-controls="menu-btn"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div id="logo">
          <div>
            <img id="logo" src={logo} alt="logo" />
          </div>
        </div>

        <div id="search">
          <input
            placeholder="Search Here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
        </div>

        <div id="login">
          <button className="btn btn-primary m-2">Login</button>
          <button className="btn btn-warning m-2">
            {" "}
            <span>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </button>
        </div>
      </div>

      <div className="collapse" id="menu-btn">
        <div>
          <span className="option">Login</span>
        </div>
        <div>
          <span className="option">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
