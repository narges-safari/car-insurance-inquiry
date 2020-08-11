import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./InsureSelect.scss";
import { setInfoForm } from "../../store/actions/infoFormAction";

import insuranceIcon from "../../assets/icons/insurance.svg";
import InsuranceButton from "./InsuranceButton";

function InsureSelect(props) {
  const dispatch = useDispatch();
  const informations = useSelector((state) => state.infoForm.infoForm);

  const insuranceSelectHandler = (insuranceTitle) => {
    let preparedDate = {
      ...informations,
      insuranceTitle: insuranceTitle,
    };
    dispatch(setInfoForm(preparedDate));
    props.history.push("/third-party1");
  };
  return (
    <div className="rtl p-5">
      <h2>انتخاب بیمه</h2>
      <div className="insurance-container">
        <InsuranceButton
          insuranceSelectHandler={() => insuranceSelectHandler("شخص ثالث")}
          img={insuranceIcon}
          insuranceTitle="شخص ثالث"
          disable={false}
          disabledButtonClassName="disabled-button"
          enabledButtonClassName="cursor-pointer"
        />
        <InsuranceButton
          onClick={(e) => insuranceSelectHandler("بدنه")}
          img={insuranceIcon}
          insuranceTitle="بدنه"
          disable={true}
          disabledButtonClassName="disabled-button"
          enabledButtonClassName="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default InsureSelect;
