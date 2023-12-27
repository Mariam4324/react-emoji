import { unicalization } from "../../helpers/unicalization";
import css from "./cards.module.css";

export const Cards = ({ title, symbol, keywords }) => {
  return (
    <div className={css.card}>
      <h2 className={css.emoji}>{symbol}</h2>
      <h2 className={css.name}> {title}</h2>
      <p className={css.text}>{unicalization(keywords)}</p>
    </div>
  );
};
