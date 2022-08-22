import { LogoutIcon } from "@heroicons/react/outline";

import dashboard from "~/config/dashboard";
import NavigationBarItem from "./NavigationBarItem";

function NavigationBarDesktop() {
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex grow flex-col overflow-y-auto bg-primary pt-5">
        <div className="flex shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {dashboard.map(({ navigation }) => (
              <NavigationBarItem {...navigation} key={navigation.name} />
            ))}
            <div className="pt-3">
              <NavigationBarItem
                name="Keluar"
                path="#"
                icon={LogoutIcon}
                onLogout={handleLogout}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavigationBarDesktop;
