import { useState, useEffect } from "react";
import { Layout } from "../layout/Layout";
import { CardsWrapper } from "../layout/cardsWrapper/CardsWrapper";
import "./styles/global.css";
import { data } from "../assets/data";
import { Cards } from "../components/Cards/Cards";
import { Pagination } from "../layout/Pagination/Switches/Switches";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [limitPage, setLimitPage] = useState(6);

  const inputHandler = (ev) => {
    setInputValue(ev.target.value);
  };

  const cards = data
    .filter(
      (card) =>
        card.title
          .trim()
          .toLowerCase()
          .includes(inputValue.trim().toLowerCase()) ||
        card.keywords
          .trim()
          .toLowerCase()
          .includes(inputValue.trim().toLowerCase())
    )
    .map((card) => (
      <Cards
        key={card.title}
        title={card.title}
        symbol={card.symbol}
        keywords={card.keywords}
      />
    ));

  useEffect(() => {
    const fetchData = async () => {
      setSpinner(true);
      const emojiLink = `http://api.codeoverdose.space/api/emoji?search=${inputValue}&page=${currentPage}&limit=${limitPage}`;
      const res = await fetch(emojiLink);
      const emojiJson = await res.json();
      console.log(emojiJson);
      setSpinner(false);
    };
    fetchData();
  }, [inputValue, limitPage, currentPage]);

  return (
    <>
      <Layout inputValue={inputValue} inputHandler={inputHandler}>
        <CardsWrapper cards={cards} />
        <Pagination />
      </Layout>
    </>
  );
};
