import React,{useEffect} from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "shakil", text: "Learing React is Fun!" },
  { id: "q2", author: "samia jannat", text: "Learing React is Great!" },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true); //true control the loading state

  useEffect(()=>{
    sendRequest()
  },[sendRequest]);


  if(status === 'pending'){
    return(
      <div className='centered'>
        <LoadingSpinner/>
      </div>
    )
  }
  if(error){
    return <p className='centered focuses'>{error}</p>
  }


  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
