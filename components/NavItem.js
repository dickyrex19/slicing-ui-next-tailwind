import classNames from "classnames";

export default function NavItem({ href, children, scheme }) {
  const schemes = {
    light: "text-white text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];
  return (
    <div>
      <li>
        <a
          href={href}
          className={classNames(
            "text-lg font-semibold transition",
            pickedScheme
          )}
        >
          {children}
        </a>
      </li>
    </div>
  );
}
