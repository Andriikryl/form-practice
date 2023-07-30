import React, { RefCallback } from "react";
import style from "./style.module.css";
import { RefCallBack } from "react-hook-form";

interface TextFieldProps {
  id?: string;
  label: string;
  error: string;
  InputProps?: {
    onChange?: (ev: any) => unknown;
    onBlur?: (ev: any) => unknown;
    ref?: RefCallback<HTMLInputElement>;
    name?: string;
    min?: number | string;
    max?: number | string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
  };
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
