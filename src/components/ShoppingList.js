import React, { useEffect, useState } from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";
import Filter from "./Filter";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  // 🟢 READ — Fetch items when the component loads
  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  // 🟡 CREATE — Add new item to state
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // 🔵 UPDATE — Update an existing item
  function handleUpdateItem(updatedItem) {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
  }

  // 🔴 DELETE — Remove item from state
  function handleDeleteItem(deletedItem) {
    const updatedItems = items.filter((item) => item.id !== deletedItem.id);
    setItems(updatedItems);
  }

  // 🧭 Filter items based on category
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  // 🧱 Render UI
  return (
    <div className="ShoppingList">
      <ItemForm onAddItem={handleAddItem} />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            item={item}
            onUpdateItem={handleUpdateItem}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
