import "./App.css";

import React, { useState, useEffect } from "react";

import Main from "./Main";

import Pdf from "./Valut.pdf";

function Head() {
  const [allValut, SetallValtut] = useState([]);

  const [dollar, Setdollar] = useState("");

  const [evro, Setevro] = useState("");

  const [shekel, SetShekel] = useState("");

  const [grivna, Setgrivna] = useState("");

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        SetallValtut(data);

        allValut.map((item, index) => {
          if (item.cc === "USD") {
            Setdollar(item.rate);
          }

          if (item.cc === "EUR") {
            Setevro(item.rate);
          }

          if (item.cc === "ILS") {
            SetShekel(item.rate);
          }
        });

        return data;
      });
    // console.log(allValut);
  });

  return (
    <div className="App">
      <h2 className="h2main">Header component</h2>
      <div className="textmain">
        <h2 className="h2"> Звідки я брав ці дані API</h2>
        <a
          target="_blank"
          className="href"
          href="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
        >
          Тут
        </a>
      </div>
      <div className="textmain">
        <h2 className="h2"> Завдання скачати </h2>
        <a target="_blank" className="href" href={Pdf} download>
          Тут
        </a>
      </div>
      <div className="kursvalut">
        <div>1 Долар Сша = {dollar} Украинская гривна </div>
        <div>1 Євро = {evro} Украинская гривна</div>
        <div>1 Shekel ={shekel} Украинской гривне </div>
      </div>
      <Main Us={dollar} Eu={evro} ILS={shekel} />
    </div>
  );
}

export default Head;
