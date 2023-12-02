import React, { useState } from "react";
import "./Login.css";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
// import { login } from "../../service/auth.service";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import google from "../../Assets/google-icon.png";
import windows from "../../Assets/wondows-icon.png";
import EmailField from "./EmailField";
import ConfirmPasswordField from "./ConfirmPasswordField";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Toster = ({ open, status, message, handleClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={status === 200 ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

const loginSchema = Yup.object().shape({
  email_address: Yup.string()
    .email("Email address must be a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(/[A-Z]/, "Password must contain atleast one uppercase")
    .matches(/[a-z]/, "Password must contain atleast one lowercase")
    .matches(/[@#&]/, "Password must contain special character @,#,&")
    .min(8, "password must be at least 8 characters"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all", resolver: yupResolver(loginSchema) });

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotPasswordEmailId, setForgotPasswordEmailId] = useState("");
  const [authorized, setAuthorized] = useState(false);

  
  console.log(authorized, forgotPassword);

  const onSubmit = async (value) => {
    // const { status, data } = await login(value);

    setIsLoading(true);
    setStatus(status);
    // setMessage(data?.message);
    setOpen(true);

    if (status === 200) {
      // setTimeout(navigate(`/splash-screen`), 2000);
      // setTimeout(navigate(`/`), 4000)
    }
    setIsLoading(false);
    reset();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  let logScreen;

  if (forgotPassword === true && authorized === false) {
    console.log(authorized, forgotPassword);
    logScreen = logScreen = (
      <EmailField
        setAuthorized={setAuthorized}
        setForgotPasswordEmailId={setForgotPasswordEmailId}
      />
    );
  } else if (forgotPassword === false && authorized === false) {
    console.log(authorized, forgotPassword);
    logScreen = (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column  justify-content-start h-100 "
      >
        <div>
          <label
            htmlFor="exampleInputEmail1"
            className="form-label text-primary"
          >
            Email address
          </label>
          <input
            type="text"
            className="form-control p-3 ps-3 border-primary"
            id="exampleInputEmail1"
            placeholder="Email address"
            aria-describedby="emailHelp"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            {...register("email_address")}
          />

          <div
            htmlFor="exampleInputEmail1"
            className="form-label text-primary form-text text-danger"
          >
            {errors.email_address?.message}
          </div>
        </div>
        <div>
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-primary"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control p-3 ps-3 border-primary"
            id="exampleInputPassword1"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            {...register("password")}
          />
          <div
            htmlFor="exampleInputPassword1"
            className="form-label text-primary form-text text-danger"
          >
            {errors.password?.message}
          </div>
        </div>

        <span className="text-center ">
          <span
            onClick={() => setForgotPassword(true)}
            className="cad-text-medium float-end text-primary text-decoration-none pointer"
          >
            Forgotten password?
          </span>
        </span>

        <div className="form-check mb-3 d-flex justify-content-start gap-3">
          <input
            className=" w-auto pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label>keep me logged in</label>
        </div>

        <div className="col-8 d-flex flex-column gap-2 align-self-center mt-2">
          <LoadingButton
            loading={isLoading}
            type="submit"
            className="btn mt-2 pt-1 fs-5 cad-fw-700 pb-1 button-contained"
          >
            <span>Log in</span>
          </LoadingButton>

          <LoadingButton
            type=""
            className="border mt-2 cad-text-medium pt-2 fs-6 cad-fw-500 pb-2 button-outlinedd"
          >
            <img className="me-3" width={24} src={google} alt="" />
            <span>Sign Up With Google</span>
          </LoadingButton>

          <LoadingButton
            type=""
            className="border cad-text-medium mt-2 pt-2 fs-6 cad-fw-500 pb-2 button-outlinedd"
          >
            <img className="me-2" width={28} src={windows} alt="" />
            <span>Sign Up With Microsoft</span>
          </LoadingButton>
        </div>
      </form>
    );
  } else {
    logScreen = (
      <ConfirmPasswordField
        setAuthorised={setAuthorized}
        forgotPassword={setForgotPassword}
      />
    );
  }

  return (
    <div className="login">
      <Toster
        open={open}
        status={status}
        message={message}
        handleClose={handleClose}
      />
      <div className="container  d-flex align-items-center w-100  h-100">
        <div className="d-flex w-100 justify-content-center align-items-center  h-75 p-0">
          <div className="col-left pe-3 pag- d-flex flex-column  col-7 h-50 d-flex align-items-start justify-content-center">
            <h1 style={{ fontSize: "60px" }} className="cad-fw-800">
              CAD <span className="cad-fw-500">IT Solution</span>
            </h1>
            <p style={{ color: "#1c1e21" }} className=" fs-4 cad-fw-600">
              Empowering Visions, Engineering Solutions: Your CAD IT Partner.
            </p>
            <p
              style={{ color: "#1c1e21" }}
              className="cad-text-large cad-fw-600"
            >
              Don’t Have An Account?{" "}
              <span
                className="text-decoration-underline"
                to="https://cadits.betadelivery.com/Registration"
              >
                Create An Account
              </span>
            </p>
          </div>

          <div className=" col-right col-5 h-auto  p-3">{logScreen}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
