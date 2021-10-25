import NavItem from "./NavItem";

export default function Nav() {
  return (
    <div>
      <ul className="flex justify-center space-x-10">
        <NavItem href="#profile">Profile</NavItem>
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </ul>
    </div>
  );
}
