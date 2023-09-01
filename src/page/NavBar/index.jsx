import React, {useState} from "react";
import "../NavBar/Style.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [search, setSearch] = useState(false);
  const [toggle, setToggle] = useState(false);

  const clickSearch = () => {
    setSearch(search === false ? true : false);
  };

  const display = () => {
    setToggle(!toggle ? true : false);
  };

  return (
    <div className="navBar">
      <div className="navbox">
        <div className="toggle-box">
          <div className="toggle-button">
            {!toggle?<Button
              onClick={display}
              endIcon={
                <DehazeIcon style={{color: "white", fontSize: "30px"}} />
              }
            />:<Button
            onClick={display}
            endIcon={
              <CloseIcon style={{color: "white", fontSize: "30px"}} />
            }/>}
          </div>
        </div>
        <div className="nav-log">
          <div className="nav-log-box">
            <div className="nav-log-inner-box">
              <p>
                Trust<span className="circle">.</span>
              </p>
            </div>
          </div>
        </div>

        {!search ? (
          <>
            <div className="nav-menu">
              <ul className="menu-list">
                <li className="menu-item">
                  <a className="link" href="#Home">
                    PC&Laptop
                  </a>
                </li>
                <li className="menu-item">
                  <a className="link" href="#Home">
                    Mobile
                  </a>
                </li>
                <li className="menu-item">
                  <a className="link" href="#Home">
                    Smart Home
                  </a>
                </li>
                <li className="menu-item">
                  <a className="link" href="#Home">
                    Gaming
                  </a>
                </li>
                <li className="menu-item">
                  <a className="link" href="#Home">
                    Business
                  </a>
                </li>
                <li className="menu-item">
                  <a className="link" href="#Home">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav-search-action">
              <Button
                onClick={clickSearch}
                endIcon={
                  <SearchIcon style={{color: "white", fontSize: "50px"}} />
                }
              />
            </div>
          </>
        ) : (
          <>
            <div className="search-box">
              <div className="nav-search-action">
                <Button
                  onClick={clickSearch}
                  endIcon={
                    <SearchIcon style={{color: "white", fontSize: "50px"}} />
                  }
                />
              </div>
              <div className="search-input">
                <input type="text" name="searchData" placeholder="Search" />
              </div>
              <div className="search-close-action">
                <Button
                  onClick={clickSearch}
                  endIcon={
                    <ClearIcon style={{color: "white", fontSize: "48px"}} />
                  }
                />
              </div>
            </div>
          </>
        )}
      </div>

      {toggle && (
        <div className={toggle?"modlue":"modlue modlue-close"}>
          <div className="modlue-box">
            <div className="toggle-nav-menu">
              <ul className="menu-list">
                <li className="toggle-menu-item">
                  <a className="link" href="#Home">
                    PC&Laptop
                  </a>
                </li>
                <li className="toggle-menu-item">
                  <a className="link" href="#Home">
                    Mobile
                  </a>
                </li>
                <li className="toggle-menu-item">
                  <a className="link" href="#Home">
                    Smart Home
                  </a>
                </li>
                <li className="toggle-menu-item">
                  <a className="link" href="#Home">
                    Gaming
                  </a>
                </li>
                <li className="toggle-menu-item">
                  <a className="link" href="#Home">
                    Business
                  </a>
                </li>
                <li className="toggle-menu-item">
                  <a className="link" href="#Home">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
