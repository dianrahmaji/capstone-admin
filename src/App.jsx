import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import createAxios from "./config/axios";
import dashboard from "~/config/dashboard";

import Login from "~/pages/Login";
import ResearchById from "~/pages/ResearchById";

function App() {
  const {
    data: { token },
  } = useSelector((state) => state.user);

  createAxios(token);

  return (
    <Routes>
      {dashboard.map(({ route, navigation }) => (
        <Route {...route} key={navigation.name} />
      ))}
      <Route path="/research/:id" element={<ResearchById />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
