import React, { useLayoutEffect } from "react";
import css from "./SearchBar.module.css";

export const SearchBar = ({
  placeholder,
  onChange,
  value,
  type,
  className,
}) => {
  const rootClass = [css.input, className];
  return (
    <input
      className={rootClass.join(" ")}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};
