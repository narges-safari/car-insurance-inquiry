import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ThirdParty.scss";

import { getCarTypes } from "../../store/actions/carActions";
import { setInfoForm } from "../../store/actions/infoFormAction";

export default function ThirdParty(props) {
  const [carTypes, setCarTypes] = useState("");
  const [selectedCarType, setSelectedCarType] = useState({ name: "", id: "" });
  const [carBrands, setCarBrands] = useState("");
  const [selectedCarBrand, setSelectedCarBrand] = useState({
    name: "",
    id: "",
  });

  const dispatch = useDispatch();

  const informations = useSelector((state) => state.infoForm.infoForm);

  const onCarTypeSelect = (carOptionValue, carOptionName) => {
    setCarBrands(carTypes[carOptionValue].brand);
    setSelectedCarType({ name: carOptionName, id: carOptionValue });
  };

  const onCarBrandSelect = (brandOptionValue, brandOptionName) => {
    setSelectedCarBrand({ name: brandOptionName, id: brandOptionValue });
  };

  useEffect(() => {
    dispatch(getCarTypes()).then((res) => {
      setCarTypes(res.data.result);
    });
  }, [dispatch]);

  const submitCarTypeHandler = (e) => {
    e.preventDefault();
    let preparedData = {
      ...informations,
      carType: selectedCarType,
      carBrand: selectedCarBrand,
    };
    dispatch(setInfoForm(preparedData));
    props.history.push("/third-party2");
  };
  return (
    <form className="rtl p-5">
      <h2>بیمه شخص ثالث</h2>
      <small className="color-silver font-weight-bold">
        نوع و مدل خودروی خود را انتخاب کنید.
      </small>
      <div className="dropdowns-container">
        <select
          required
          className="selcet-dropdown w-50"
          onChange={(e) =>
            onCarTypeSelect(e.target.value, e.target.selectedOptions[0].text)
          }
        >
          <option value="" disabled selected>
            نوع خودرو
          </option>
          {carTypes &&
            carTypes.map((item, index) => {
              return (
                <option key={index} name={item.carType} value={index}>
                  {item.carType}
                </option>
              );
            })}
        </select>
        <select
          required
          className="selcet-dropdown w-50"
          onChange={(e) =>
            onCarBrandSelect(e.target.value, e.target.selectedOptions[0].text)
          }
        >
          <option value="" disabled selected>
            مدل خودرو
          </option>
          {carBrands &&
            carBrands.map((item, index) => {
              return (
                <option key={index} name={item.name} value={index}>
                  {item.name}
                </option>
              );
            })}
        </select>
      </div>
      <button
        className="white-green-border-button float-right"
        onClick={() => window.history.back()}
      >
        بازگشت
      </button>
      <button
        disabled={!(!!selectedCarType.id && !!selectedCarBrand.id)}
        className="white-green-border-button float-left"
        onClick={submitCarTypeHandler}
      >
        مرحله بعد
      </button>
    </form>
  );
}
