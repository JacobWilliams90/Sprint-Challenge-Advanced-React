- [ ] Why would you use class component over function components (removing hooks from the question)?

    - Give the component more functionality that you couldnt get without hooks in a function component.

- [ ] Name three lifecycle methods and their purposes.

    - render() - It returns the JSX of your actual component.
      componentWillUnmount() - Basically, clean up anything to do that solely involves the component in question — when it’s gone, it should be completely gone.
      componentDidMount() - This function will be called only once in the whole life-cycle of a given component and it being called signalizes that the component — and all its sub-components — rendered properly.


- [ ] What is the purpose of a custom hook?

    - Allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again. 

- [ ] Why is it important to test our apps?

    - Automated testing minimizes the risk of bugs finding their way into production code.