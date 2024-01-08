import { useState } from "react";
import css from "./right_list.module.css";

export const Right_list = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.label}>Per page</div>

      <div className={css.box}>
        <div className={css.limit}>12</div>
        <div className={css.arrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#ABB5BE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
