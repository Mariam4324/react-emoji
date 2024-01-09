import { useState } from "react";
import css from "./right_list.module.css";
import { useRef } from "react";

export const Right_list = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [num, setNum] = useState(6);

  function limitNum(page) {
    setNum(page);
  }

  window.onclick(() => {
    
  })

  return (
    <div className={css.wrapper}>
      <div className={css.label}>Per page</div>

      <div className={css.box}>
        <div className={css.limit}>{num}</div>
        <div className={css.arrow}>
          <svg
            onClick={() => setIsOpen(!isOpen)}
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

      <div className={isOpen ? css.limit_open : css.limit_close}>
        <ul className={css.limit_List}>
          <li className={css.limit_item} onClick={() => limitNum(6)}>
            6
          </li>
          <li className={css.limit_item} onClick={() => limitNum(12)}>
            12
          </li>
          <li className={css.limit_item} onClick={() => limitNum(24)}>
            24
          </li>
          <li className={css.limit_item} onClick={() => limitNum(48)}>
            48
          </li>
        </ul>
      </div>
    </div>
  );
};
