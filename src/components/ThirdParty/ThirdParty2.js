import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ThirdParty.scss";

import { getInsuranceCompany } from "../../store/actions/insuranceActions";
import { setInfoForm } from "../../store/actions/infoFormAction";

export default function ThirdParty(props) {
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [companySelected, setCompanySelected] = useState({ name: "", id: "" });

  const dispatch = useDispatch();

  const informations = useSelector((state) => state.infoForm.infoForm);

  const submitHandler = () => {
    let preparedData = {
      ...informations,
      selectedCompany: companySelected,
    };
    dispatch(setInfoForm(preparedData));
    props.history.push("/third-party3");
  };

  useEffect(() => {
    dispatch(getInsuranceCompany()).then((res) => {
      setInsuranceCompany(res.data.result);
    });
  }, [dispatch]);

  return (
    <div className="rtl p-5">
      <h2>بیمه شخص ثالث</h2>
      <small className="color-silver font-weight-bold">
        شرکت بیمه‌گر قبلی خود را انتخاب کنید.
      </small>
      <div className="dropdowns-container">
        <select
          required="required"
          className="selcet-dropdown w-100"
          onChange={(e) =>
            setCompanySelected({
              id: e.target.value,
              name: e.target.selectedOptions[0].text,
            })
          }
        >
          <option value="" disabled selected>
            شرکت بیمه‌گر قبلی
          </option>
          {insuranceCompany &&
            insuranceCompany.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.company}
                </option>
              );
            })}
        </select>
      </div>
      <button
        className="white-green-border-button float-right"
        onClick={() => window.history.back()}
      >
        مرحله قبل
      </button>
      <button
        disabled={!!!companySelected.id}
        className="white-green-border-button float-left"
        onClick={submitHandler}
      >
        مرحله بعد
      </button>
    </div>
  );
}
