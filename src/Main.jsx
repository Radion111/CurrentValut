import React from "react";
import { useState, useEffect, useRef } from "react";

import "./App.css";

function Main({ Us, Eu, ILS }) {
  const [inputvalue1, setinputvalue1] = useState("");

  const [inputvalue2, setinputvalue2] = useState("");

  //? Это для даних
  const selector1 = useRef("");
  const selector2 = useRef("");
  let input1 = useRef("");
  let input2 = useRef("");

  function handleChange1() {
    setinputvalue1(input1.current.value);

    let seter1 = input1.current.value;

    let main2Select2 = selector2.current.value;

    let select1 = selector1.current.value;

    let result = (seter1 * select1) / main2Select2;

    setinputvalue2(result);
  }

  // ! нужно зделать расчет под все купюри
  // ! нужно зделать если при виборе селектора не онулиривалось все

  //? a*b = c и a = c/b.
  function handleChange2() {
    setinputvalue2(input2.current.value);

    let seter2 = input2.current.value;

    let main1Select1 = selector1.current.value;

    let select2 = selector2.current.value;
    // Изменить здесь
    let result = (seter2 * select2) / main1Select1;

    setinputvalue1(result);
  }

  return (
    <div className="Maindiv">
      <h2 className="h2main">Main component</h2>
      <div className="flexcolum">
        <div className="firstcolum">
          <input
            className="inputMain"
            type="number"
            ref={input1}
            onChange={handleChange1}
            value={inputvalue1}
          />
          <div className="checker">
            <select
              name="select"
              ref={selector1}
              onChange={handleChange1}
              className="select"
            >
              <option value={1} selected>
                Гривна
              </option>
              <option value={Eu}>Euro</option>
              <option value={Us}>Dollar</option>
              <option value={ILS}>Shekel</option>
            </select>
          </div>
        </div>
        <div className="secondcolum">
          <input
            className="inputMain"
            type="number"
            ref={input2}
            onChange={handleChange2}
            value={inputvalue2}
          />
          <div className="checker">
            <select
              name="select"
              ref={selector2}
              className="select"
              onChange={handleChange2}
            >
              <option value={1}>Гривна</option>
              <option value={Eu}>Euro</option>
              <option value={Us} selected>
                Dollar
              </option>
              <option value={ILS}>Shekel</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
