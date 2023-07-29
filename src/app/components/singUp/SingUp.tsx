"use client";

import React, { useCallback } from "react";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
import { error } from "console";
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
        <div className={style.flex__group}>
          <label className={style.label} htmlFor="email">
            email
          </label>
          <input
            type="email"
            {...register("email", { required: "email is required" })}
          />
          {errors.email?.message ? (
            <p className={style.error}>{errors.email?.message as string}</p>
          ) : null}
        </div>
        <div className={style.flex__group}>
          <label className={style.label} htmlFor="password">
            password
          </label>
          <input
            type="password"
            {...register("password", { required: "password is required" })}
          />
          {errors.password?.message ? (
            <p className={style.error}>{errors.password?.message as string}</p>
          ) : null}
        </div>
        <div className={style.flex__group}>
          <label className={style.label} htmlFor="confirm password">
            confirm password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "confirm password is required",
            })}
          />
          {errors.confirmPassword?.message ? (
            <p className={style.error}>
              {errors.confirmPassword?.message as string}
            </p>
          ) : null}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
