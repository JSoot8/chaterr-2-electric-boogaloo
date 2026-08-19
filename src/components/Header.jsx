import { root } from "../main";
import Button from "./Button";

function Header() {
  const handleThemeChange = () => {
    root.classList.toggle("dark");
  };
  return (
    <header className="header">
      <Button onClick={handleThemeChange}>Switch Theme</Button>
    </header>
  );
}

export default Header;
