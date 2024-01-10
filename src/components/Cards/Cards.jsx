import { unicalization } from "../../helpers/unicalization";
import css from "./Cards.module.css";

export const Cards = ({ title, symbol, keywords, spinner }) => {
  if (spinner) {
    return <h2>LOADINNGGGGGGGGGGGGGGGGG XD</h2>;
  }

  return (
    <div className={css.card}>
      <h2 className={css.emoji}>{symbol}</h2>
      <h2 className={css.name}> {title}</h2>
      <p className={css.text}>{unicalization(keywords)}</p>
    </div>
  );
};
