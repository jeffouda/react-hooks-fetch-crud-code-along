# TODO: Implement CRUD Operations for Shopping List App

## Creating Items

- [x] Add `handleSubmit` function in `ItemForm.js` to handle form submission, create itemData object, POST to `/items`, and call `onAddItem` prop with newItem.
- [x] Add `handleAddItem` function in `ShoppingList.js` to append newItem to items state.
- [x] Pass `onAddItem={handleAddItem}` prop to `ItemForm` in `ShoppingList.js`.

## Updating Items (Add/Remove from Cart)

- [x] Add `handleAddToCartClick` function in `Item.js` to PATCH `isInCart` to `!item.isInCart` for the item, and call `onUpdateItem` prop with updatedItem.
- [x] Add `handleUpdateItem` function in `ShoppingList.js` to replace the updated item in items state using map.
- [x] Pass `onUpdateItem={handleUpdateItem}` prop to each `Item` in `ShoppingList.js`.

## Deleting Items

- [x] Add `handleDeleteClick` function in `Item.js` to DELETE the item from `/items/:id`, and call `onDeleteItem` prop with the item.
- [x] Add `handleDeleteItem` function in `ShoppingList.js` to filter out the deleted item from items state.
- [x] Pass `onDeleteItem={handleDeleteItem}` prop to each `Item` in `ShoppingList.js`.

## Followup Steps

- [x] Run `npm install` to install dependencies.
- [x] Run `npm run server` to start json-server on port 4000.
- [x] Run `npm start` to start the React app on port 3000.
- [x] Test creating, updating, and deleting items in the browser.
