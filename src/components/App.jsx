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

  const markAllComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const markAllIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
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
