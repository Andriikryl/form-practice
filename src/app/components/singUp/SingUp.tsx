"use client";
import React, { useCallback } from "react";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
import TextField from "../textField/TextField";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SingupShema = z
  .object({
    email: z.string().min(1).email(),
    password: z.string().min(6).max(24),
    confirmPassword: z.string().min(6).max(24),
  })
  .refine(
    (form) => {
      return form.confirmPassword === form.password;
    },
    {
      message: "Password must match",
      path: ["confirmPassword"],
    }
  );

export default function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SingupShema),
  });

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
          InputProps={register("email")}
          error={errors.email?.message as string}
        />

        <TextField
          id="password"
          label="password"
          type="password"
          InputProps={register("password")}
          error={errors.password?.message as string}
        />

        <TextField
          id="confirm-password"
          label="confirm-password"
          type="password"
          InputProps={register("confirmPassword")}
          error={errors.confirmPassword?.message as string}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
