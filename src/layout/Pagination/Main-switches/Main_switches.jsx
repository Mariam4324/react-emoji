import { Container } from "../../Container/Container";
import { Numbers } from "../Numbers/Numbers";
import { Right_list } from "../Right_list/Right_list";
import css from "./main_switches.module.css";

export const Pagination = () => {


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

        <Right_list />
      </div>
    </Container>
  );
};
