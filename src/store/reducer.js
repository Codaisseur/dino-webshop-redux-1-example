const initialState = {
  dinos: [
    { id: 1, name: "T-Rex", price: 1000 },
    { id: 2, name: "Pterodactyl", price: 610 },
    { id: 3, name: "Mososaur", price: 10000 },
    { id: 4, name: "Velociraptor", price: 300 },
  ],
  cart: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "buy_dino": {
      // write something fancy
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
