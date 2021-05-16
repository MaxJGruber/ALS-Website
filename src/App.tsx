import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import { ContactUs } from "./Pages/ContactUs";
import { FranceAndAdvice } from "./Pages/France&Advice";
import { Fees } from "./Pages/Fees";
import { Blog } from "./Pages/Blog";
import { Team } from "./Pages/Team";
import store from "./redux/store";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch: Function) => ({
  setContent: (content: Record<string, any>) =>
    dispatch({ type: "SET_CONTENT", content }),
});
const mapStateToProps = (state: Record<string, any>) => {
  return { content: state.content };
};

function App() {
  const [contentLanguage, setContentLanguage] = useState("en");

  useEffect(() => {
    if (contentLanguage !== store.getState().language.language) {
      setContentLanguage(store.getState().language.language);
    }
  }, [contentLanguage]);

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
export default connect(mapDispatchToProps, mapStateToProps)(App);
