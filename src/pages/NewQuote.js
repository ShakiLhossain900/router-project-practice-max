import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  //useHistory navigate korbe at the same  time ata navigate 
  //howar pore amara kothay jete cacci submit korar por log y valueo jabe and ata page  change kore jei page er location debu oi page jabe
const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push('/quotes')
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
