import css from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.line}></div>
      <p className={css.text}>2022 © Made with love by me</p>
    </footer>
  );
};
