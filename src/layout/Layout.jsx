import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export const Layout = ({ children, inputValue, inputHandler,  }) => {
  return (
    <>
      <Header inputValue={inputValue} inputHandler={inputHandler} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
