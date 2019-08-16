1. What problem does the context API help solve?
    It solves prop drilling. Now we store our data on a context  object and share that data with any components no matter where it lies on the component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Store: Object that holds the state tree or the data of our application.
    It is the single source of truth because the state(data) of your app is stored in a single state object that is immutable. It exists here and only here.

    Actions: Events that gives the store data. The are action types (descriptions of the action or payload of information being sent to a store), and action creators(functions that return actions).

    Reducers: Pure functions that take a current state of an application, copy it, and then returns a new state with our mutating the original state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is state that is stored in the store and is shared to all areas and layers of the application.This state is best used with an application that has the potential scale to a larger project or already is.
     Component state, is state that is used in only that single component and possibly it's children.This is best used for tiny applications or in components where the state will be shared within that component and maybe a few other child components.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-Thunk extends actions and allows them to handle asynchronous requests and use action creators more extensively to do as such. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management so far is Redux. I like that you can by pass prop drilling, and hold all of your data in one place. It has become easier to keep track of where state is being passed and where to fix it if a bug arises.