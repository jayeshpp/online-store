import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productListingAPI";

const initialState = {
  products: [],
  status: "idle",
  error: null,
  totalProducts: null,
  itemsPerPage: 20,
  page: 1,
  filters: []
};

export const fetchProductsAsync = createAsyncThunk(
  "productListing/fetchProducts",
  async (payload) => {
    try {
      const response = await fetchProducts(payload);
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const productListingSlice = createSlice({
  name: "productListing",
  initialState,
  reducers: {
    updateFilter: (state, payload) => {
      state.page = payload.payload.page
      state.filters = payload.payload.filters
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProductsAsync.pending, (state) => {
      state.status = "loading";
    })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalProducts = action.payload.count
        state.products = action.payload.books;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.status = "failed";
      })
  },
});

//actions
export const { updateFilter } = productListingSlice.actions

//selectors
export const selectAllProducts = (state) => state.productListing.products;
export const getProductsStatus = (state) => state.productListing.status;
export const getProductsError = (state) => state.productListing.error;
export const getProductCount = (state) => state.productListing.totalProducts;
export const getProductPerPage = (state) => state.productListing.itemsPerPage;
export const getPage = (state) => state.productListing.page;
export const getFilters = (state) => state.productListing.filters;

export default productListingSlice.reducer;
