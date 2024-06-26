import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import WorksPage from "./works/page";
import ContactPage from "./contact/page";
import Homepage from "./page";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function App() {
  
  return (
    root.render(
      <Router>
        <Homepage />
        <WorksPage />
        <ContactPage />
        <Routes>
          <Route path="/works" element={<WorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    )
  )
}

export default App;