import React from 'react'
import { screen, within } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../app/test-utils'
import ProductListing from './ProductListing'
import { productListingMock } from './mock'

test('should render product listing page with pagination prev button disabled', async () => {
  renderWithProviders(<ProductListing />, {
    preloadedState: {
      productListing: {
        products: productListingMock.books,
        status: "succeeded",
        error: null,
      }
    }
  })

  const productListing = screen.getByTestId(/product-listing/i)
  const prevPaginationBtn = screen.getByTestId(/pagination-prev/i)

  expect(await productListing).toBeInTheDocument()
  expect(prevPaginationBtn).toBeDisabled()
})

