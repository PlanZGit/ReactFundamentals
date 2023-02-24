# Conditional Rendering

Conditions are placed outside the JSX

- if/else
- Element variables
- Ternary conditional operator (use)
- Short circuit operator (use)

1.  if/else :

        export class ConditionalRendering extends Component {
        constructor(props) {
        super(props);

              this.state = {
                isLoggedIn: false,
              };
            }
            render() {
              if (this.state.isLoggedIn) {
                return <div>Welcome X </div>;
              } else {
                return <div>Welcome Y </div>;
              }
            }
        }

2.  Element variables:

        render() {
          let message = "";
          if (this.state.isLoggedIn) {
            message = <div>Welcome X </div>;
          } else {
            message = <div>Welcome Y </div>;
          }
          return <div>{message}</div>;
        }

3.  Ternary conditional operator ?

        render() {
          return this.state.isLoggedIn ?
          <div>Welcome X</div> : <div>Welcome Y</div>;
        }

4.  Short circuit operator &&

        render() {
          return this.state.isLoggedIn && <div>Welcome X</div>
        }
