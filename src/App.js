import { Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuouteDetails from "./pages/QuouteDetails";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Switch>
      {/* amara switch use korle must amara exact use korte hobe na hoy ata route move korbe na */}
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuouteDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
