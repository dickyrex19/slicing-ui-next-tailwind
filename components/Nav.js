import NavItem from "./NavItem";
import classNames from "classnames";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-4 justify-start",
  };

  const pickedDir = dirs[dir];
  return (
    <div>
      <ul className={classNames("flex", pickedDir)}>
        <NavItem scheme={scheme} href="#profile">
          Profile
        </NavItem>
        <NavItem scheme={scheme} href="#skills">
          Skills
        </NavItem>
        <NavItem scheme={scheme} href="#projects">
          Projects
        </NavItem>
        <NavItem scheme={scheme} href="#contact">
          Contact
        </NavItem>
      </ul>
    </div>
  );
}
