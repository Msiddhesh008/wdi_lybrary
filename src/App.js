import "./index.css";
import Doughnut from "./Components/Charts/DoughnutChart/Doughnut";
import LineChart from "./Components/Charts/LineChart/LineChart";
import Dependecies from "./Components/Dependecies";
import Login from "./Components/AuthenticationAuthorization/Login";
import ComponentTitle from "./Components/ComponentTitle";
import DateFormatter from "./Components/Convertor/DateFormatter";
import { useState } from "react";

function App() {
  const [date, setDate] = useState("2023-12-02T16:06:56.704Z");
  return (
    <div className="App ">
      <div className="wdi-banner w-100 h-100 bg-black">
        <div className="w-100 h-50 d-flex justify-content-evenly p-5 bg-black align-items-end">
          <span style={{ fontSize: "50px" }} className="text-white fw-100">
            Welcome to WDI React Lybrary
          </span>
          <img
            src="https://www.wdipl.com/public/img/wdi_logo.svg"
            width={250}
            alt="logo"
          />
        </div>
        <div className="w-100 d-flex justify-content-evenly p-4 bg-black align-items-end ">
          <span
            className="text-black text-center bg-white p-3 h-100 w-100"
            style={{ fontSize: "30px", color: "#E8155D" }}
          >
            Please test your component section below
          </span>
        </div>
      </div>

      <section className="test_compnent d-flex flex-column justify-content-evenly align-items-center h-100 w-100">
        <img
          src="https://www.wdipl.com/public/img/black_logo.svg"
          className="bg-logo"
          width={80}
          alt=""
        />
        <div className="w-100 bg-black ps-4 pt-2 pb-2">
          <ComponentTitle title="Authentication and Authorization" />
          <Dependecies dependeciesCmd="yarn add react-hook-form @hookform/resolvers yup @mui/icons-material @mui/lab react-router-dom" />
        </div>

        <Login />
      </section>

      <section className="test_compnent d-flex flex-column justify-content-evenly align-items-center h-100 w-100">
        <img
          src="https://www.wdipl.com/public/img/black_logo.svg"
          className="bg-logo"
          width={80}
          alt=""
        />
        <div className="w-100 bg-black ps-4 pt-2 pb-2">
          <ComponentTitle title="Graphs ( Doughnut Chart )" />
          <Dependecies dependeciesCmd="yarn add react-chartjs-2 react-icons chart.js @mui/material @emotion/react @emotion/styled" />
        </div>
        <div className="d-flex justify-content-center p-5">
          <Doughnut />
        </div>
      </section>

      <section className="test_compnent d-flex flex-column justify-content-evenly align-items-center h-100 w-100">
        <img
          src="https://www.wdipl.com/public/img/black_logo.svg"
          className="bg-logo"
          width={80}
          alt=""
        />
        <div className="w-100 bg-black ps-4 pt-2 pb-2">
          <ComponentTitle title="Graphs ( Line Chart )" />
          <Dependecies dependeciesCmd=" yarn add react-chartjs-2 react-icons chart.js @mui/material @emotion/react @emotion/styled" />
        </div>
        <div className="d-flex p-5 justify-content-center">
          <LineChart />
        </div>
      </section>

      <section className="test_compnent d-flex flex-column justify-content-evenly align-items-center h-100 w-100">
        <img
          src="https://www.wdipl.com/public/img/black_logo.svg"
          className="bg-logo"
          width={80}
          alt=""
        />
        <div className="w-100 bg-black ps-4 pt-2 pb-2">
          <ComponentTitle title="Converters" />
          <Dependecies dependeciesCmd=" yarn add " />
        </div>
        <div className="d-flex flex-column align-items-center  w-100 p-5 gap-4 fs-4 justify-content-center">


          <div class="mb-3 gap-3 d-flex w-50">
            <span
              for="exampleFormControlInput1"
              class=" cad-text-large w-75 d-flex flex-column justify-content-center "
            >
              Enter UTC time format
            </span>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              value={date}
              placeholder="name@example.com"
            />

            <span className="text-white rounded-2 ps-3 pe-3 bg-black d-flex flex-column justify-content-center ">
              <DateFormatter inputDate={date} />
            </span>
          </div>

          <div class="mb-3 gap-3 d-flex w-50">
            <span
              for="exampleFormControlInput1"
              class=" cad-text-large w-75 d-flex flex-column justify-content-center "
            >
              DataType Converter 
            </span>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              value={""}
              placeholder="Pending"
            />

            <span className="text-white rounded-2 ps-3 pe-3 bg-black d-flex flex-column justify-content-center ">
              <span>Pending</span>
            </span>
          </div>

          <div class="mb-3 gap-3 d-flex w-50">
            <span
              for="exampleFormControlInput1"
              class=" cad-text-large w-75 d-flex text-black ps-3 flex-column justify-content-center "
            >
              Currency Converter 
            </span>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              value={""}
              placeholder="Pending"
            />

            <span className="text-white rounded-2 ps-3 pe-3 bg-black d-flex flex-column justify-content-center ">
              <span>Pending</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
