import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "~/layouts/DashboardLayout";

function Home() {
  const {
    data: { token },
  } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/research", { replace: true });
  }, [token, navigate]);
  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Beranda</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
          {/* /End replace */}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Home;
