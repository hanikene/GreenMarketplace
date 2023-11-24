import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="min-h-screen bg-stone-200 flex flex-col">
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
