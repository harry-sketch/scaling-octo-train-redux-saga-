// Styles
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="bg-[#E6E7EB] w-full h-screen flex items-center justify-center p-6">
      <Main>
        <Header />
        <Products />
      </Main>
    </div>
  );
}

export default App;
