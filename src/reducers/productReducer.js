// productReducer.js
const initialState = {
    products: [],
    filteredProducts: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
          filteredProducts: action.payload,
        };
      case 'FILTER_PRODUCTS':
        return {
          ...state,
          filteredProducts: state.products.filter(product => 
            product.name.includes(action.payload.name) && 
            product.color.includes(action.payload.color)
          ),
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  