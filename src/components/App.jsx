import { myItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./Itemlist";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(myItems);

  const handleAddItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const handleRemoveAll = (e) => {
    setItems([]);
  };

  const handleResettoInitial = (e) => {
    setItems(myItems);
  };

  const markAllComplete = (e) => {
    console.log("markAllComplete", e);
  };

  const markAllIncomplete = (e) => {
    console.log("markAllIncomplete", e);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          markAllIncomplete={markAllIncomplete}
          markAllComplete={markAllComplete}
          handleResettoInitial={handleResettoInitial}
          handleRemoveAll={handleRemoveAll}
          setItems={setItems}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
