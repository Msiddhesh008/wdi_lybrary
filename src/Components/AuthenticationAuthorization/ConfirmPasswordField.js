import React, { useState } from "react";
import * as Yup from 'yup'
import { set, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, CircularProgress} from "@mui/material";

const ConfirmPasswordField = ({setMessage, setStatus , setOpen, emailSwitch, setAuthorised, forgotPassword }) => {
    const [isPasswordLoading, setIsPasswordLoading] = useState(false)



    
    const passwordSchema = Yup.object().shape({

    new_password: Yup.string()
    .required('Password is required')
    .matches(/[A-Z]/, 'Password must contain atleast one uppercase')
    .matches(/[a-z]/, 'Password must contain atleast one lowercase')
    .matches(/[@#&]/, 'Password must contain special character @,#,&')
    .min(8, 'password must be at least 8 characters'),
  
    confirm_password: Yup.string()
      .required('Password is required')
      .matches(/[A-Z]/, 'Password must contain atleast one uppercase')
      .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
      .matches(/[a-z]/, 'Password must contain atleast one lowercase')
      .matches(/[@#&]/, 'Password must contain special character @,#,&')
      .min(8, 'password must be at least 8 characters'),
  })
  

  const {
    register: passwordRegister,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passErrors }, // Changed from passwordFormState to formState
    reset: resetPassword,
  } = useForm({ mode: 'all', resolver: yupResolver(passwordSchema) })


    
  
  const onConfirmPasswordSubmit = (value) => {
    setIsPasswordLoading(true)
    setTimeout(() => {
      if (value.new_password === value.confirm_password) {
        setIsPasswordLoading(false)
        resetPassword()
        alert("Login successfull")
        forgotPassword(false)
        setAuthorised(false)
      } else {
        // setEmailSwitch(false)
        setIsPasswordLoading(false)
        resetPassword()
        alert("Pasword mismatch")
      }
    }, 3000);

    

  };
  return (
    <form
    onSubmit={handlePasswordSubmit(onConfirmPasswordSubmit)}
    className={`d-flex flex-column  justify-content-start h-100`}
  >
     <div className="">
      <label
        htmlFor="createPassword1"
        className="form-label text-primary"
      >
       Create password
      </label>
      <input
        type="password"
        style={{
          padding:"12px"
        }}
        className="form-control ps-3 p-3 border-primary"
        id="createPassword1"
        placeholder="Create password"
        {...passwordRegister("new_password")}
      />
      <label
        htmlFor="exampleInputPassword1"
        className="form-label text-primary form-text text-danger"
      >
        {passErrors.new_password?.message}
      </label>
    </div> 

    
    <div className="">
      <label
        htmlFor="exampleInputPassword1"
        className="form-label text-primary"
      >
       Confirm password
      </label>
      <input
        type="password"
        style={{
          padding:"12px"
        }}
        className="form-control ps-3 p-3 border-primary"
        id="exampleInputPassword1"
        placeholder="Confirm password"
        {...passwordRegister("confirm_password")}
      />
      <label
        htmlFor="exampleInputPassword1"
        className="form-label text-primary form-text text-danger"
      >
        {passErrors.confirm_password?.message}
      </label>
    </div>
    <Button
      type="submit"
      className={`${isPasswordLoading ? "opacity-75" : ""} btn mt-2 pt-2 fs-5 cad-fw-700 pb-2 button-contained`}>
      {isPasswordLoading ? <CircularProgress size={36} color="inherit" /> :
      "Submit"}
    </Button>
  </form>
  )
}

export default ConfirmPasswordField