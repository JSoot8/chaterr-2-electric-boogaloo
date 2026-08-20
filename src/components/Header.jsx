import { root } from "../main";
import Button from "./Button";
import { useChat } from "./ChatProvider";

function Header() {
  const { changeUser } = useChat();

  const handleThemeChange = () => {
    root.classList.toggle("dark");
  };
  const handleNameChange = () => {
    changeUser();
  };
  return (
    <header className="header">
      <Button onClick={handleThemeChange}>Switch Theme</Button>
      <Button onClick={handleNameChange}>Change Name</Button>
    </header>
  );
}

export default Header;
