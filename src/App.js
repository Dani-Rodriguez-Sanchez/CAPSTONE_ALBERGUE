import logo from "./images/logo.svg";
import React, { useRef } from "react";
import { useState } from "react";
import "./styles/App.css";

//import { Routes, Route, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { withNamespaces } from "react-i18next";
import i18n from "./i18n";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";

import Map from "./components/Map.js";
import Modal from "./components/modal";
import Responsive from "./components/carousel";
import Blog from "./pages/Blog.js";

import logo_cranes from "./images/cranes.png";
import {
  MdLocalLaundryService,
  MdOutlineWifi,
  MdElectricBike,
  MdCoffee,
} from "react-icons/md";

function App({ t }) {
  const localizacionRef = useRef(null);
  const serviciosRef = useRef(null);
  const galeriaRef = useRef(null);
  const articuloRef = useRef(null);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);

  return (
    <div className="App">
      <ScrollToTop />

      <div className="Navbar">
        <img className="logo" src={logo} alt="Logo" />

        <div className="languageButtons">
          <button onClick={() => changeLanguage("es")} className="boton-idioma">
            es
          </button>
          |
          <button onClick={() => changeLanguage("en")} className="boton-idioma">
            en
          </button>
        </div>

        <ul>
          <li
            onClick={() => scrollToSection(localizacionRef)}
            className="buttons"
          >
            {t("localization")}
          </li>
          <li onClick={() => scrollToSection(serviciosRef)} className="buttons">
            {t("services")}
          </li>
          <li onClick={() => scrollToSection(galeriaRef)} className="buttons">
            {t("gallery")}
          </li>
          <li onClick={() => scrollToSection(articuloRef)} className="buttons">
            {t("contact")}
          </li>
        </ul>
      </div>

      <div className="presentacion">
        <div className="presentacion_logo_text">
          <img className="logo_cranes" src={logo_cranes} alt="Logo_cranes" />
          <div class="box_text_presentation">
            <h1>Albergue Las Grullas</h1>
            <h2>{t("welcome")}</h2>
            <h3>{t("presentation")}</h3>
          </div>
        </div>
      </div>

      <div ref={localizacionRef} className="localizacion">
        <div classname="mapa">
          <div className="texto-mapa">
            <h1>{t("where")}</h1>
          </div>
          <Map />
        </div>
      </div>

      <div ref={serviciosRef} className="servicios">
        <h1 className="titulos">{t("services")}</h1>
        <div className="services-icons">
          <div>
            <button onClick={() => cambiarEstadoModal1(!estadoModal1)}>
              <MdLocalLaundryService size={100} />
            </button>
          </div>

          <div>
            <button onClick={() => cambiarEstadoModal2(!estadoModal2)}>
              <MdOutlineWifi size={100} />
            </button>
          </div>

          <div>
            <button onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <MdElectricBike size={100} />
            </button>
          </div>

          <div>
            <button onClick={() => cambiarEstadoModal4(!estadoModal4)}>
              <MdCoffee size={100} />
            </button>
          </div>
        </div>

        <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
          <h1>{t("laundry")}</h1>
        </Modal>

        <Modal estado={estadoModal2} cambiarEstado={cambiarEstadoModal2}>
          <h1>{t("wifi")}</h1>
        </Modal>

        <Modal estado={estadoModal3} cambiarEstado={cambiarEstadoModal3}>
          <h1>{t("bike")}</h1>
        </Modal>

        <Modal estado={estadoModal4} cambiarEstado={cambiarEstadoModal4}>
          <h1>{t("breakfast")}</h1>
        </Modal>
      </div>

      <div ref={galeriaRef} className="galeria">
        <div>
          <div>
            <Responsive />
          </div>
          <h1 className="titulos">{t("enjoy")}</h1>
        </div>
      </div>
      <div ref={articuloRef} className="articulo">
        <h1 className="titulos">{t("articles")}</h1>
        <div>
          <Blog />
        </div>

        <FloatingWhatsApp
          phoneNumber="635723824"
          accountName="Albergue Las Garzas"
          initialMessageByServer={t("Hi there! How can I assist you?")}
          statusMessage={t("Available")}
          placeholder={t("Write here...")}
          allowEsc={true}
        />
      </div>
    </div>
  );
}

export default withNamespaces()(App);
