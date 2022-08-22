/* eslint-disable react/button-has-type */
import clsx from "clsx";

function BaseIconButton({ children, className, secondary = false, ...props }) {
  return (
    <button
      className={clsx(
        `${className} rounded-full p-3 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm`,
        {
          "bg-primary text-secondary hover:bg-accent focus:ring-primary":
            !secondary,
          "border-gray-300 bg-white text-primary hover:bg-gray-50 hover:text-accent focus:ring-primary":
            secondary,
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default BaseIconButton;
