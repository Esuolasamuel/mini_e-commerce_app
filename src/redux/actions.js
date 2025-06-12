import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchAllProducts = createAsyncThunk('fetch_All_Products', async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data;
})
const fetchAProduct = createAsyncThunk('fetch_A_Product', async (product_id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${product_id}`)
  const data = await response.json()
  return data;
})

export { fetchAllProducts,fetchAProduct };