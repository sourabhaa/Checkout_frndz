import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListing from "./Pages/UserListing";
import Pages from "./Pages/Pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/userlist" element={<UserListing />} />
          <Route path="/profile/:id" element={<Pages />} />
          <Route path="/post" element={<Pages />} />
          <Route path="/todo" element={<Pages />} />
          <Route path="/gallery" element={<Pages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
