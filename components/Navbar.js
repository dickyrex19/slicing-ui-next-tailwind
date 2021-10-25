import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex items-center py-10">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12 hidden md:block">
        <Nav />
      </div>
      <div className="w-3/12 text-right hidden md:block">
        <Button href="#contact" pill variant="outline-yellow">
          Contact
        </Button>
      </div>
    </div>
  );
}