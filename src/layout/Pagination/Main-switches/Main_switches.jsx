import { Container } from "../../Container/Container";
import css from "./pagination.module.css";

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

          <li className={css.last_switch}>
            <a className={css.switch_link} href="#">
              Last
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};
