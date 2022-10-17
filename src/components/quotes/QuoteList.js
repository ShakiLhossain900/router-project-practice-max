import { Fragment } from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {

  const history = useHistory();  //change the history
  const location = useLocation();

 new URLSearchParams();   //default javascript constructor funtion
  
  const changeSortinghandler =() =>{
     history.push('/quotes?sort=asc');   //here pushing the re rendering the components
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortinghandler}>Sort Ascending</button>
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
