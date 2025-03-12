import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import Todo from "./components/Todo";


function App() {
  return (
    <>
      <div className="bg-slate-900 text-white min-h-screen grid py-4 ">
        <Todo />
      </div>
    </>
  );
}

export default App;
