import React from "react";
import style from "./style.module.css";

interface TextFieldProps {
  id?: string;
  label: string;
  error: string;
  InputProps?: unknown;
  type?: string;
}

export default function TextField(props: TextFieldProps) {
  return (
    <div className={style.flex__group}>
      <label className={style.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type ?? "text"}
        id={props.id}
        {...(props.InputProps ?? {})}
      />
      {props.error ? <p className={style.error}>{props.error}</p> : null}
    </div>
  );
}
