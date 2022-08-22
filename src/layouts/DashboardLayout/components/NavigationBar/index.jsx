import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";

function NavigationBar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div>
      <NavigationBarMobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <NavigationBarDesktop />
    </div>
  );
}

export default NavigationBar;
