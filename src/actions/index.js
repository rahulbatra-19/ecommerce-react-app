import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const SORT_PRODUCTSINSC = "SORT_PRODUCTSINSC";
export const SORT_PRODUCTSDESC = "SORT_PRODUCTSDESC";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export function fetchProducts(category) {
  const url = "https://excommerce-products.onrender.com/products";
  return function (dispatch) {
    axios
      .get(url)
      .then((response) => {
        // Handle the response data
        let products = response.data;
        if (category) {
          products = response.data.filter((product) => {
            return product.category === category;
          });
        }
        dispatch(fetchingProducts(products));
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };
}

export function AddProductToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function RemoveProductFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}

export function fetchProduct(product) {
  return {
    type: FETCH_PRODUCT,
    product,
  };
}

export function fetchingProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    products,
  };
}

export function sortProductsInsc(products) {
  return {
    type: SORT_PRODUCTSINSC,
    products,
  };
}

export function sortProductsDesc(products) {
  return {
    type: SORT_PRODUCTSDESC,
    products,
  };
}
