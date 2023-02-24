# React Lifecycle

https://www.w3schools.com/react/react_lifecycle.asp

React has four built-in methods that gets called, in this order, when mounting a component:

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()

## constructor

    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }

## getDerivedStateFromProps

    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }

## render

    class Header extends React.Component {
      render() {
        return (
          <h1>This is the content of the Header component</h1>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

## ComponentDidMount

    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }

Nested component order of execution:

    Class component
    Parent: ComponentA
    Child: ComponentB

    ComponentA constructor
    ComponentA getDerivedstateFromProps
    ComponentA render
    ComponentB constructor
    ComponentB getDerivedstateFromProps
    ComponentB render
    ComponentB componentDidMount
    ComponentA componentDidMount

## Error Boundary

The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information. [ErrorBoundary.js](./my-app/src/component/ErrorBoundary.js)

- static getDerivedStateFromError(error)
- componentDidMountCatch(error,info)

Error boundaries are React components that catch JavaScript error in their child component tree, log those errors, and display a fall-back UI.

The placement of the Error Boundary also matters as it controls if the entire app should have fall-back UI or just the component causing the problem.
