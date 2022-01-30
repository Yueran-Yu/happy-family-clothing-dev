import SHOP_DATA from "../../firebase/Shop_Data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;

// const shopReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ShopActionTypes.FETCH_COLLECTIONS_START:
//       return {
//         ...state,
//         isFetching: true,
//       }
//     case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
//       return {
//         ...state,
//         isFetching: false,
//         collections: action.payload
//       }
//     case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
//       return {
//         ...state,
//         isFetching: false,
//         errorMessage: action.payload
//       }
//     default:
//       return state;
//   }
// }