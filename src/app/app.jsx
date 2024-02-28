import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PortfolioPage from "./portfolio/page";
import ContactPage from "./contact/page";
import Homepage from "./page";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function App () {
  return (
    root.render(
      <Router>
        <Homepage />
        <PortfolioPage />
        <ContactPage />
        <Routes>
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    )
  )
};

export default App;