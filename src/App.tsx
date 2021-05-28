import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import { ContactUs } from "./Pages/ContactUs";
import { Fees } from "./Pages/Fees";
import { Blog } from "./Pages/Blog";
import { Team } from "./Pages/Team";
import { Services } from "./Pages/Services";
import store from "./redux/store";
import { LivingAndWorking } from "./Pages/Living&Working";
import { WhyUs } from "./Pages/WhyUs";
import CookiesBanner from "./Components/CookiesBanner";
import { Legal } from "./Pages/Legal";
import { TermsAndConditionsEn } from "./Pages/Terms&ConditionEn";

export default function App() {
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
        <Route exact path="/services" component={Services} />
        <Route
          exact
          path="/why-pay-for-professional-advice"
          component={WhyUs}
        />
        <Route
          exact
          path="/living-working-in-france"
          component={LivingAndWorking}
        />
        <Route exact path="/fees" component={Fees} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about-us" component={Team} />
        <Route exact path="/legal" component={Legal} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
      <CookiesBanner />
    </div>
  );
}
