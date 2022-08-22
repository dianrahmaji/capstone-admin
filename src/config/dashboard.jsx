import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/outline";

import Home from "~/pages/Home";
import Research from "~/pages/Research";
import Researcher from "~/pages/Researcher";

const dashboard = [
  {
    route: { path: "/", element: <Home /> },
    navigation: { name: "Beranda", path: "/", icon: HomeIcon },
  },
  {
    route: { path: "/researcher", element: <Researcher /> },
    navigation: { name: "Peneliti", path: "/researcher", icon: UserGroupIcon },
  },
  {
    route: { path: "/research", element: <Research /> },
    navigation: {
      name: "Penelitian",
      path: "/research",
      icon: DocumentDuplicateIcon,
    },
  },
];

export default dashboard;
