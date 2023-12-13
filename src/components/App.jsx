import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./Itemlist";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
