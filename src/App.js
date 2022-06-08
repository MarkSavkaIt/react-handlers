import "./App.css";
import { ThemeButtons } from "./components/theme-buttons";
import { ThemeDropdown } from "./components/theme-dropdown";
import { ThemeHandler } from "./components/theme-handler";

function App() {
  return (
    <div className='app'>
      <ThemeHandler />
      <ThemeButtons />
      <ThemeDropdown />
    </div>
  );
}

export default App;
