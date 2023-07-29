"use client";

import React, { useCallback } from "react";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
export default function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = useCallback(() => {
    console.log("onValid");
  }, []);

  return (
    <div className={style.form__box}>
      <form className={style.form} onSubmit={handleSubmit(onValid)}>
        <h1>form</h1>
        <div className={style.flex__group}>
          <label htmlFor="email">email</label>
          <input type="email" />
          <p>an erro</p>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
