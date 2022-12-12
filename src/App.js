import PrivacyPolicy from "./views/PrivacyPolicy";
import Driver from "./views/Driver";
import Home from "./views/Home";
import Merchant from "./views/Merchant";
import Press from "./views/Press";
import TermsOfUse from "./views/TermsOfUse";

import {
  BrowserRouter as Switch,
  Routes,
  Route,
  Router,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/driver" element={<Driver />} />
          <Route exact path="/merchant" element={<Merchant />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route exact path="/termsofuse" element={<TermsOfUse />} />
          <Route exact path="/press" element={<Press />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
