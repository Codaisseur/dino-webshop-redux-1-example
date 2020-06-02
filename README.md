A dino webshop! Buy your favorite and cute little dino from this Redux-powered React app :D

- [Accompanying lecture recording](https://youtu.be/IwENXJmVdtA)

This small example codebase covers:

**Setting up a Redux store and integrating it with React**

1. create a folder `store`
2. create a reducer inside it
3. create a store from that reducer using `createStore`
4. make sure to "configure" that store to connect to the Redux DevTools (using that snippte of code with the `enhancer`)

**Using selectors to retrieve data from the store**

1. use the `useSelector` hook
2. give it a "selector function", which acts as a "description" of what you want from the store's state, or a "retrieve" of the data
3. if you want to apply sorting or other extra steps, the selector is an excellent place to put that logic

**Dispatching actions from your React components**

1. use the `useDispatch` hook to get the `dispatch` method
2. use the `dispatch` method to dispatch an action in callback / event handler
3. make sure you _handle_ the dispatched actions with a `case` in the _reducer_

Putting these three things together, you can make your reactive state-driven applications ever bigger and more complex! :D

**Design principles applied:**

- Don't make the state "bigger" than necessary. We didn't store the whole dino objects in the card, only the IDs. The IDs give us _enough information_, and the rest of the object would be _redundant / extra_, so unnecssary.

- Use _local state_ for state that isn't important anywhere else in the application, like an input field in a form.

- Use _global state_ (or _application state_) for stat that relates to "the entire application" or is needed in lots of places. This is like "super lifted state".
