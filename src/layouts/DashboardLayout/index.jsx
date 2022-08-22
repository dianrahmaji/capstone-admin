import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const {
    data: { token },
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  return (
    <>
      <NavigationBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-1 flex-col md:pl-64">
        <Header setSidebarOpen={setSidebarOpen} />

        <main>{children}</main>
      </div>
    </>
  );
}

export default DashboardLayout;
