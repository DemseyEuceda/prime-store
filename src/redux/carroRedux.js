import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productos: [],
    favoritos : [],
    cantidad: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //verificar si el producto ya existe
      const existe = state.productos.find(
        (producto) => producto.imagenes === action.payload.imagenes
      );

      if (existe) {
        existe.cantidad += 1;
        // state.cantidad += 1;
        state.total += 1 * existe.precio;
        return;
      }

      state.cantidad += 1;
      state.productos.push(action.payload);
      state.total += action.payload.precio * action.payload.cantidad;
    },
    removeProduct: (state, action) => {
      const producto = state.productos.find(
        (producto) => producto.imagenes === action.payload.imagenes
      );

      if (producto.cantidad > 0) {
        producto.cantidad -= 1;

        if (producto.cantidad === 0) {
          state.productos = state.productos.filter(
            (producto) => producto.imagenes !== action.payload.imagenes
          );
          state.cantidad -= 1;
          state.total -= producto.precio;
          return;
        }
        state.total -= 1 * producto.precio;
        return;
      }
    },
    removeAllProduct: (state, action) => {
      const producto = state.productos.find(
        (producto) => producto.imagenes === action.payload.imagenes
      );

      state.total -= producto.precio * producto.cantidad;
      state.cantidad -= 1;
      state.productos = state.productos.filter(
        (producto) => producto.imagenes !== action.payload.imagenes
      );
    },
    removeAllCart: (state) => {
      state.productos = [];
      state.cantidad = 0;
      state.total = 0;
    },
    addFavorite : (state, action)=>{
      const existe = state.favoritos.find(
        (producto) => producto.imagenes === action.payload.imagenes
      );
        state.favoritos.push(action.payload);
      
      

    },
   
  },
});

export const { addProduct, removeProduct, removeAllCart, removeAllProduct, addFavorite } = cartSlice.actions;
export default cartSlice.reducer;
