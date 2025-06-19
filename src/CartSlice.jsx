import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const item = action.payload;

  // Vérifie si l'article est déjà dans le panier
  const existingItem = state.items.find((i) => i.name === item.name);

  if (existingItem) {
    // Si la plante est déjà dans le panier, augmente la quantité
    existingItem.quantity += 1;
  } else {
    // Sinon, ajoute la plante avec une quantité initiale
    state.items.push({ ...item, quantity: 1 });
  }
    
    },
    removeItem: (state, action) => {
        {
            state.items = state.items.filter(item => item.name !== action.payload);
        }
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
      }
    }
  });

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
