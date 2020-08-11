import React from "react";
import { useSelector } from "react-redux";

import "./Navbar.scss";
import logo from "../../assets/icons/logo.svg";
import userIcon from "../../assets/icons/user.svg";

export default function Navbar() {
  const firstName = useSelector(
    (state) => state.infoForm.infoForm && state.infoForm.infoForm.firstName
  );

  const lastName = useSelector(
    (state) => state.infoForm.infoForm && state.infoForm.infoForm.lastName
  );

  return (
    <ul className="navbar-ul">
      <li className="profile">
        {firstName && lastName ? (
          <>
            {firstName} {lastName}
            <img className="ml-5" src={userIcon} alt="user-icon" width={16} />
          </>
        ) : (
          "ثبت نام"
        )}
      </li>
      <li className="nav-title">سامانه مقایسه و خرید بیمه آنلاین</li>
      <li>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </li>
    </ul>
  );
}
