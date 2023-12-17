import { initialItems } from "../lib/constants";
import AddItemForm from "./AddItemForm";
import BackgroundHeading from "./BackgroundHeading";
import ButtonGroup from "./ButtonGroup";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./Itemlist";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAll = (e) => {
    setItems([]);
  };

  const handleResettoInitial = (e) => {
    setItems(initialItems);
  };

  const markAllComplete = (e) => {
    const newItems = items.map((e) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const markAllIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header>
          <Logo />
          <Counter />
        </Header>
        <ItemList
          handleToggleItem={handleToggleItem}
          handleDeleteItem={handleDeleteItem}
          items={items}
        />
        <Sidebar>
          <AddItemForm setItems={setItems} />
          <ButtonGroup
            markAllIncomplete={markAllIncomplete}
            markAllComplete={markAllComplete}
            handleResettoInitial={handleResettoInitial}
            handleRemoveAll={handleRemoveAll}
          />
        </Sidebar>
      </main>
      <Footer />
    </>
  );
}

export default App;
