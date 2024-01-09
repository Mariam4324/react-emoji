import { Layout } from "../layout/Layout";
import { CardsWrapper } from "../layout/cardsWrapper/CardsWrapper";
import "./styles/global.css";
import { data } from "../assets/data";
import { Cards } from "../components/Cards/Cards";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  // ----------
  // const [data, setData] = useState([]);
  // const [limitCards, setLimitCards] = useState(6);
  // const [page, setPage] = useState(0);
  // const [lastPage, setLastPage] = useState(null);
  // ---------

  const inputHandler = (ev) => {
    setInputValue(ev.target.value);
    setPage(0);
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

  return (
    <>
      <Layout inputValue={inputValue} inputHandler={inputHandler}>
        <CardsWrapper cards={cards} />
      </Layout>
    </>
  );
};
