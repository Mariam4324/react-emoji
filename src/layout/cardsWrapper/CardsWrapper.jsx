import { Cards } from "../../components/Cards/Cards";
import { Container } from "../Container/Container";
import css from "./cardsWrapper.module.css";

export const CardsWrapper = ({ cards }) => {
  return (
    <Container>
      <div className={css.cards_wrapper}>{cards}</div>
    </Container>
  );
};
