import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productListingReducer from '../modules/product-listing/productListingSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  productListing: productListingReducer,
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
