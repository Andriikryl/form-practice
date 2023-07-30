"use client";

import React, { useCallback } from "react";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
import { error } from "console";
import TextField from "../textField/TextField";
export default function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = useCallback((data: unknown) => {
    console.log("onValid", data);
  }, []);

  console.log("sing up running render the function", errors);

  return (
    <div className={style.form__box}>
      <form className={style.form} onSubmit={handleSubmit(onValid)}>
        <h1>form</h1>
        <TextField
          id="email"
          label="email"
          InputProps={...register("email", { required: "email is required" })}
          error={errors.email?.message as string}
        />

        <TextField
          id="password"
          label="password"
          type="password"
          InputProps={...register("password", {
            required: "password is required",
          })}
          error={errors.password?.message as string}
        />

        <TextField
          id="confirm-password"
          label="confirm-password"
          type="password"
          InputProps={...register("confirmPassword", {
            required: "Confirm password is required",
          })}
          error={errors.confirmPassword?.message as string}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
