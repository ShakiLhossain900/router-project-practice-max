import { Fragment,useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";


// const DUMMY_QUOTES = [
//   { id: "q1", author: "shakil", text: "Learing React is Fun!" },
//   { id: "q2", author: "samia jannat", text: "Learing React is Great!" },
// ];

const QuouteDetails = () => {
  const match = useRouteMatch(); //useRouteMatch use kore main path app change holeo amader sob jaygay change kora lage na jdoi amara useRouteMatch use
  const params = useParams();

  const {quoteId} = params;

const {sendRequest, status, error, data:loadedQuote}=useHttp(getSingleQuote, true);   //object disstructuring return by the hook
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId); //we are no longer use dummy we start use dynamamic that's why we changes this

useEffect(() => {
sendRequest(quoteId);
},[sendRequest, quoteId])

if(status === 'pending'){
  return <div className="centered">
    <LoadingSpinner/>
  </div>
}

if(error) {
  return <p className='centered'> {error}</p>
}

  if (!loadedQuote) {
    return <p>No quote found!!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      {/* changees */}
      <Route path={match.path} exact>
        <div className="centered">
          {/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
          {/* changes */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuouteDetails;
