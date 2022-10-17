import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const history = useHistory(); //change the history
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search); //default javascript constructor funtion

  const isSortingAscending = queryParams.get("sort") === "asc";

  const changeSortinghandler = () => {
    history.push("/quotes?sor=" + (isSortingAscending ? "desc" : "asc")); //here pushing the re rendering the components
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortinghandler}>
          Sort {isSortingAscending ? "Desending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
