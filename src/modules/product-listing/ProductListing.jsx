import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { Product } from "./Product";
import {
  selectAllProducts,
  fetchProductsAsync,
  getProductsError,
  getProductsStatus,
  getProductCount,
  getProductPerPage,
  getPage,
  updateFilter,
} from "./productListingSlice";
import styles from "./ProductListing.module.css";
import { ProductShimmers } from "./ProductShimmer";
import { parse, stringify } from "../../app/utils/queryString";
/* 
TODO 
- page dimension and responsive design
- add more styling to have rich look and feel
- accessibility
- 
*/
function ProductListing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);
  const totalProductCount = useSelector(getProductCount);
  const itemsPerPage = useSelector(getProductPerPage);
  const page = useSelector(getPage);

  function onPagination(page) {
    navigate({
      search: stringify({ page }),
    });
    dispatch(updateFilter({ page }));
  }

  useEffect(() => {
    const filters = parse(searchParams);
    dispatch(fetchProductsAsync({...filters}));
    dispatch(updateFilter(filters));
  }, [searchParams, dispatch]);

  return (
    <div className={styles.productListing} data-testid="product-listing">
      <div className={styles.content} data-testid="product-content">
        {productStatus === "loading" ? (
          <ProductShimmers />
        ) : productStatus === "succeeded" ? (
          products.map((product) => (
            <Product
              key={product.id}
              book_author={product.book_author}
              book_publication_city={product.book_publication_city}
            />
          ))
        ) : (
          productStatus === "error" && error
        )}
      </div>
      {products.length > 0 && (
        <Pagination
          totalRecords={totalProductCount}
          perPage={itemsPerPage}
          activePage={page}
          handlePagination={onPagination}
        />
      )}
    </div>
  );
}

export default ProductListing;
