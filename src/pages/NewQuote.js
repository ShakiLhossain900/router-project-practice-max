import {useEffect} from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from '../hooks/use-http';
import {addQuote} from '../lib/api';

const NewQuote = () => {
const {sendRequest, status}= useHttp(addQuote);
const history = useHistory();




const addQuoteHandler = (quoteData) => {
  sendRequest(quoteData)
  history.push("/quotes");
};



return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;








//useHistory navigate korbe at the same  time ata navigate
//howar pore amara kothay jete cacci submit korar por log y valueo jabe and ata page  change kore jei page er location debu oi page jabe
