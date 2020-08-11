import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ThirdParty.scss";

import { getDiscount } from "../../store/actions/carActions";
import { setInfoForm } from "../../store/actions/infoFormAction";

export default function ThirdParty() {
  const [carThirdDiscount, setCarThirdDiscount] = useState("");
  const [driverAccidentDiscount, setDriverAccidentDiscount] = useState("");

  const [selectedCarThirdDiscount, setSelectedCarThirdDiscount] = useState({
    name: "",
    id: "",
  });
  const [
    selectedDriverAccidentDiscount,
    setSelectedDriverAccidentDiscount,
  ] = useState({ name: "", id: "" });

  const dispatch = useDispatch();
  const informations = useSelector((state) => state.infoForm.infoForm);

  const submitHandler = () => {
    let preparedData = {
      ...informations,
      selectedCarThirdDiscount: selectedCarThirdDiscount,
      selectedDriverAccidentDiscount: selectedDriverAccidentDiscount,
    };
    dispatch(setInfoForm(preparedData));
  };

  useEffect(() => {
    dispatch(getDiscount()).then((res) => {
      setCarThirdDiscount(res.data.result);
      setDriverAccidentDiscount(res.data.result);
    });
  }, [dispatch]);

  return (
    <div className="rtl p-5">
      <h2>بیمه شخص ثالث</h2>
      <small className="color-silver font-weight-bold">
        درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.
      </small>
      <div className="p-20-0">
        <div className="dropdowns-container-party3">
          <select
            className="selcet-dropdown w-100"
            onChange={(e) =>
              setSelectedCarThirdDiscount({
                id: e.target.value,
                name: e.target.selectedOptions[0].text,
              })
            }
          >
            <option value="" disabled selected>
              درصد تخفیف ثالث
            </option>
            {carThirdDiscount &&
              carThirdDiscount.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.title}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="dropdowns-container-party3">
          <select
            className="selcet-dropdown w-100"
            onChange={(e) =>
              setSelectedDriverAccidentDiscount({
                id: e.target.value,
                name: e.target.selectedOptions[0].text,
              })
            }
          >
            <option value="" disabled selected>
              درصد تخفیف حوادث راننده
            </option>
            {driverAccidentDiscount &&
              driverAccidentDiscount.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.title}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <button
        className="green-button"
        onClick={submitHandler}
        disabled={
          !(
            !!selectedCarThirdDiscount.id && !!selectedDriverAccidentDiscount.id
          )
        }
      >
        استعلام قیمت
      </button>
    </div>
  );
}
