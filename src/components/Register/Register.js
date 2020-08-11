import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Register.scss";

import { setInfoForm } from "../../store/actions/infoFormAction";

const MOBILE_REGEX = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/g;
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{4,10})$/;

export default function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(null);
  const [errorMessage, setErrorMessage] = useState({
    firstNameERROR: "",
    lastNameERROR: "",
    mobileERROR: "",
    passwordERROR: "",
  });
  const [isNumberError, setIsNumberError] = useState(false);

  const test = () => {
    setFirstName("نرگس");
    setLastName("صفری");
    setMobile("09187562259");
    setPassword("Test123");
  };

  const dispatch = useDispatch();

  const isNumber = (value) =>
    setIsNumberError(typeof Number(value.trim()) !== "number");

  useEffect(() => {
    isFormValid();
  }, [firstName, lastName, mobile, password]);

  const registerHandler = (e) => {
    e.preventDefault();
    let preparedData = {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      password: password,
    };
    if (isFormValid()) {
      dispatch(setInfoForm(preparedData));
      props.history.push("/insure-select");
    }
  };

  const isFormValid = () => {
    setHasError(false);
    let _hasError = false;
    let _firstName_isValid = firstName && !!isJustPersian(firstName);
    let _lastName_isValid = lastName && !!isJustPersian(lastName);
    let _mobile_isValid = mobile && !!mobile.trim().match(MOBILE_REGEX);
    let _password_isValid = password && !!password.trim().match(PASSWORD_REGEX);

    let NEW_ERROR = {};

    if (!_firstName_isValid && _firstName_isValid !== "") {
      setHasError(true);
      _hasError = true;
      NEW_ERROR = {
        ...NEW_ERROR,
        firstNameERROR: "نام باید تماما به زبان فارسی باشد.",
      };
    } else {
      NEW_ERROR = { ...NEW_ERROR, firstNameERROR: "" };
    }
    if (!_lastName_isValid && _lastName_isValid !== "") {
      setHasError(true);
      _hasError = true;
      NEW_ERROR = {
        ...NEW_ERROR,
        lastNameERROR: "نام خانوادگی باید تماما به زبان فارسی باشد.",
      };
    } else {
      NEW_ERROR = { ...NEW_ERROR, lastNameERROR: "" };
    }
    if (!_mobile_isValid && _mobile_isValid !== "") {
      setHasError(true);
      _hasError = true;

      NEW_ERROR = {
        ...NEW_ERROR,
        mobileERROR: "شماره تلفن همراه شامل ۱۱ کاراکتر باشد",
      };
      if (isNumberError) {
        NEW_ERROR = {
          ...NEW_ERROR,
          mobileERROR: ".شماره موبایل باید عدد باشد",
        };
      }
    } else {
      NEW_ERROR = { ...NEW_ERROR, mobileERROR: "" };
    }

    if (!_password_isValid && _password_isValid !== "") {
      setHasError(true);
      _hasError = true;
      NEW_ERROR = {
        ...NEW_ERROR,
        passwordERROR:
          "گذرواژه باید حداقل شامل ۴ کاراکتر و حداکثر ۱۰ کاراکتر و شامل حروف کوچک و بزرگ باشد.",
      };
    } else {
      NEW_ERROR = { ...NEW_ERROR, passwordERROR: "" };
    }
    setErrorMessage({ ...errorMessage, ...NEW_ERROR });

    return !_hasError;
  };

  const isAnyEmpty = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      mobile === "" ||
      password === ""
    ) {
      return true;
    }
  };

  const inputOnChange = (type, value) => {
    switch (type) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const isJustPersian = (str) => {
    var p = /^[\u0600-\u06FF\s]+$/;

    if (!p.test(str)) {
      return "";
    } else {
      return str;
    }
  };

  return (
    <form className="form-container">
      <h2 onClick={test}>ثبت نام</h2>
      <div className="field-container">
        <div className="inner-div">
          <input
            className="input-field ml-10"
            required="required"
            placeholder="نام"
            type="text"
            id="txtn"
            value={firstName}
            onChange={(e) => inputOnChange("firstName", e.target.value)}
          />
          <input
            className="input-field mr-10"
            required="required"
            placeholder="نام خانوادگی "
            type="text"
            value={lastName}
            onChange={(e) => inputOnChange("lastName", e.target.value)}
          />
        </div>
        <div className="inner-div">
          <span>
            <small className="error-message">
              {errorMessage.firstNameERROR}
            </small>
          </span>
          <span>
            <small className="error-message">
              {errorMessage.lastNameERROR}
            </small>
          </span>
        </div>
        <div className="inner-div">
          <input
            className="input-field"
            required="required"
            placeholder="شماره موبایل"
            // type="number"
            maxLength={11}
            value={mobile}
            onChange={(e) => inputOnChange("mobile", isNumber(e.target.value))}
          />
        </div>
        <div className="inner-div">
          <span>
            <small className="error-message">{errorMessage.mobileERROR}</small>
          </span>
        </div>
        <div className="inner-div">
          <input
            className="input-field"
            required="required"
            placeholder="رمز عبور"
            type="password"
            minlength={4}
            maxLength={10}
            value={password}
            onChange={(e) => inputOnChange("password", e.target.value)}
          />
        </div>
        <div className="inner-div">
          <span>
            <small className="error-message">
              {errorMessage.passwordERROR}
            </small>
          </span>
        </div>
      </div>
      <button
        className={`green-button float-left 
        ${isAnyEmpty() || hasError === true ? `has-error` : ""}
        `}
        onClick={registerHandler}
      >
        ثبت نام
      </button>
    </form>
  );
}
