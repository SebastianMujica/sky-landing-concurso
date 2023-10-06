import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import MenuList from "./MenuList";

const { logo, navItems: items, callText, phone, phoneHref } = headerData;

const Header = ({ mainMenuClass = "", navItems = items, onePage = false }) => {
  const { scrollTop } = useScroll(100);
  const { toggleMenu, toggleSearch } = useRootContext();

  const handleToggleSearch = () => {
    toggleSearch();
    toggleMenu(false);
    document.body.classList.toggle("locked");
  };

  const handleToggleMenu = () => {
    document.body.classList.toggle("locked");
    toggleMenu();
  };

  return (
    <header className="main-header clearfix">
      <nav
        className={`${
          scrollTop
            ? "stricky-header stricked-menu stricky-fixed slideInDown"
            : "slideIn"
        } main-menu ${mainMenuClass} animated clearfix`}
      >
        <div
          className={`main-menu-wrapper clearfix${
            scrollTop ? " sticky-header__content" : ""
          }`}
        >
          <div className="main-menu-wrapper__left">
            <div className="main-menu-wrapper__logo" style={{ width:'100%',textAlign:"center"}}>
              <Link href="/">
                <Image src={logo.src} alt="" style={{ width:'150px'}} />
              </Link>
            </div>
          </div>
          <div className="main-menu-wrapper__right">
            <div className="main-menu-wrapper__call">
              <div className="main-menu-wrapper__call-icon">
                <span className="icon-phone-call"></span>
              </div>
              <div className="main-menu-wrapper__call-number">
                <p>{callText}</p>
                <h5>
                  <a href={`tel:${phoneHref}`}>{phone}</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
