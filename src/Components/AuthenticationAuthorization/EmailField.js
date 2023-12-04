import React, { useState } from "react";
import * as Yup from "yup";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, CircularProgress } from "@mui/material";
import { ReportGmailerrorred } from "@mui/icons-material";

const EmailField = ({setForgotPasswordEmailId, setAuthorized, setForgotPassword}) => {
    const [isLoading, setIsLoading] = useState(false);
  const emailSchema = Yup.object().shape({
    email_address: Yup.string()
      .email("Email address must be a valid email")
      .required("Email is required"),
  });

  const {
    register: emailRegister,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors }, // Changed from emailFormState to formState
    reset: resetEmail,
  } = useForm({ mode: "all", resolver: yupResolver(emailSchema) });

  const onSubmit = (value) => {
    setForgotPasswordEmailId(value.email_address)
    if (value.email_address === "client@gmail.com") {
      setAuthorized(true);
    } else {
      alert("Unauthorized user")
      setAuthorized(false);
      setForgotPassword(false);
    }
    console.log(value);
    resetEmail()
  };

  return (
    <form
      onSubmit={handleEmailSubmit(onSubmit)}
      className={`d-flex flex-column  justify-content-start h-100`}
    >
      <div className="mb-3 ">
        <label htmlFor="exampleInputEmail1" className="form-label text-primary">
          Email address
        </label>
        <input
          type="text"
          style={{
            padding: "12px",
          }}
          className="form-control ps-3  p-3 border-primary"
          id="exampleInputEmail1"
          placeholder="Email address"
          aria-describedby="emailHelp"
          {...emailRegister("email_address")}
        />

        <div
          htmlFor="exampleInputEmail1"
          className="form-label text-primary form-text text-danger"
        >
          {emailErrors.email_address?.message}
        </div>
      </div>
      <Button
        type="submit"
        className={`${
          isLoading ? "opacity-75" : ""
        } btn mt-2 pt-2 fs-5 cad-fw-700 pb-2 button-contained`}
      >
        {isLoading ? <CircularProgress size={36} color="inherit" /> : "Next"}
      </Button>
    </form>
  );
};

export default EmailField;
