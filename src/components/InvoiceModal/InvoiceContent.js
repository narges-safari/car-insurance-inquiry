import React from "react";
import "./InvoiceContent.scss";

export default function InvoiceContent({ data }) {
  return (
    <div id="invoice-content">
      <table id="customer-information">
        <thead>
          <h5 className="border-bottom-0 border-right-0">اطلاعات مشتری</h5>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>نام: </span>
              <span>{data.firstName}</span>
            </td>
            <td>
              <span>نام خانوادگی: </span>
              <span>{data.lastName}</span>
            </td>
            <td>
              <span>شماره موبایل: </span>
              <span>{data.mobile}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <table id="customer-information">
        <thead>
          <h5 className="border-bottom-0 border-right-0">اطلاعات بیمه</h5>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>نوع بیمه: </span>
              <span>{data.insuranceTitle}</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span>نوع خودرو: </span>
              <span>{data.carType && data.carType.name}</span>
            </td>
            <td>
              <span>مدل خودرو: </span>
              <span>{data.carBrand && data.carBrand.name}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>شرکت بیمه‌گر قبلی: </span>
              <span>{data.selectedCompany && data.selectedCompany.name}</span>
            </td>
            <td>
              <span></span>
            </td>
          </tr>
          <tr>
            <td>
              <span>درصد تخفیف ثالث: </span>
              <span>
                {data.selectedCarThirdDiscount &&
                  data.selectedCarThirdDiscount.name}
              </span>
            </td>
            <td>
              <span>درصد تخفیف حوادث راننده: </span>
              <span>
                {data.selectedDriverAccidentDiscount &&
                  data.selectedDriverAccidentDiscount.name}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
