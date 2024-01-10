import { useState } from "react";
import { Container } from "../../Container/Container";
import { Numbers } from "../Numbers/Numbers";
import css from "./Switches.module.css";

export const Pagination = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [num, setNum] = useState(6);

  // function limitNum(page) {
  //   setNum(page);
  // }
  return (
    <Container>
      <div className={css.flex_wrapper}>
        <ul className={css.left_list}>
          <li className={css.first_switch}>
            <a className={css.switch_link} href="#">
              first
            </a>
          </li>

          <Numbers />

          <li className={css.last_switch}>
            <a className={css.switch_link} href="#">
              Last
            </a>
          </li>
        </ul>

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
              <li
                className={css.limit_item}
                onClick={() => {
                  setNum(6);
                  setIsOpen(false);
                }}
              >
                6
              </li>
              <li
                className={css.limit_item}
                onClick={() => {
                  setNum(12);
                  setIsOpen(false);
                }}
              >
                12
              </li>
              <li
                className={css.limit_item}
                onClick={() => {
                  setNum(24);
                  setIsOpen(false);
                }}
              >
                24
              </li>
              <li
                className={css.limit_item}
                onClick={() => {
                  setNum(48);
                  setIsOpen(false);
                }}
              >
                48
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
