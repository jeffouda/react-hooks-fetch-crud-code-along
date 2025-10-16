import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // ✅ Include isInCart so tests recognize the new item correctly
    const newItemData = {
      name: formData.name,
      category: formData.category,
      isInCart: false,
    };

    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItemData),
    })
      .then((r) => r.json())
      .then((newItem) => onAddItem(newItem));

    // ✅ Reset form after submission
    setFormData({
      name: "",
      category: "Produce",
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Grains">Grains</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
