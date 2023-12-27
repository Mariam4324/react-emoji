import React from "react";
import css from "./Header.module.css";
import { SearchBar } from "../../ui/SearchBar/SearchBar";

export const Header = ({ inputValue, inputHandler }) => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>Emoji Finder</h1>
      <h2 className={css.subtitle}>Find emoji by keywords</h2>
      <SearchBar
        onChange={inputHandler}
        className={css.search}
        type="text"
        placeholder="Enter emoji"
        value={inputValue}
      />
    </header>
  );
};
