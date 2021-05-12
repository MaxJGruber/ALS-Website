import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import { ContactUs } from "./Pages/ContactUs";
import { FranceAndAdvice } from "./Pages/France&Advice";
import { Fees } from "./Pages/Fees";
import { Blog } from "./Pages/Blog";
import { Team } from "./Pages/Team";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/servies/real-estate" component={FranceAndAdvice} />
        <Route
          exact
          path="/servies/property-management"
          component={FranceAndAdvice}
        />
        <Route
          exact
          path="/servies/financial-advice"
          component={FranceAndAdvice}
        />
        <Route
          exact
          path="/servies/relocation-services"
          component={FranceAndAdvice}
        />
        <Route
          exact
          path="/why-pay-for-professional-advice"
          component={FranceAndAdvice}
        />
        <Route
          exact
          path="/living-working-in-france/healthcare-cover"
          component={FranceAndAdvice}
        />
        <Route
          exact
          path="/living-working-in-france/french-taxes-social-charges"
          component={FranceAndAdvice}
        />
        <Route exact path="/fees" component={Fees} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
