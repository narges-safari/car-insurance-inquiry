import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Register from "./components/Register/Register";
import InsureSelect from "./components/Insure/InsureSelect";
import ThirdParty1 from "./components/ThirdParty/ThirdParty1";
import ThirdParty2 from "./components/ThirdParty/ThirdParty2";
import ThirdParty3 from "./components/ThirdParty/ThirdParty3";
import InvoiceModal from "./components/InvoiceModal/InvoiceModal";

function App() {
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const informations = useSelector((state) => {
    let _informations =
      state.infoForm && state.infoForm.infoForm ? state.infoForm.infoForm : {};
    if (
      !!Object.entries(_informations).length &&
      _informations.selectedCarThirdDiscount &&
      _informations.selectedDriverAccidentDiscount
    ) {
      !showInvoiceModal && setShowInvoiceModal(true);
      return _informations;
    }
  });
  return (
    <div>
      <Navbar />
      <Background />
      <div className="index">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/insure-select" component={InsureSelect} />
            <Route path="/third-party1" component={ThirdParty1} />
            <Route path="/third-party2" component={ThirdParty2} />
            <Route path="/third-party3" component={ThirdParty3} />
          </Switch>
        </BrowserRouter>
      </div>
      {showInvoiceModal ? (
        <InvoiceModal
          info={informations ? informations : {}}
          onClose={() => {
            setShowInvoiceModal(!showInvoiceModal);
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
