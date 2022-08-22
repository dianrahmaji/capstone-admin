import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

function NavigationBarItem({ name, path, icon: NavIcon, onLogout }) {
  const { pathname } = useLocation();
  const mainPath = `/${pathname.split("/")[1]}`;

  return (
    <Link
      key={name}
      to={path}
      className={clsx(
        "group flex items-center rounded-md p-2 text-base font-medium text-white hover:text-secondary",
        {
          "bg-primary hover:bg-accent": path !== mainPath,
          "bg-accent font-bold": path === mainPath,
        },
      )}
      onClick={onLogout}
    >
      <NavIcon className="mr-4 h-6 w-6 shrink-0" aria-hidden="true" />
      {name}
    </Link>
  );
}
export default NavigationBarItem;
