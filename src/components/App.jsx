import { myItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./Itemlist";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(myItems);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList itemText={items} />
        <Sidebar setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
