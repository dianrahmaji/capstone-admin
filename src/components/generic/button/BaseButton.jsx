/* eslint-disable react/button-has-type */
import clsx from "clsx";

function BaseButton({ children, className, secondary, ...props }) {
  return (
    <button
      className={clsx(
        `${className} rounded-md px-4 py-2 text-base font-medium shadow-sm focus:outline-none  focus:ring-2 focus:ring-offset-2 sm:text-sm`,
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

export default BaseButton;
