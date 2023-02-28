# React and HTTP

Get and Post request

- HTTP Library axios
- JSONPlaceholder - Fake Online REST API for Testing and Prototyping

## HTTP Get Request

Class component

_PostList.js_

    componentDidMount() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts1")
        .then((response) => {
          console.log(response);
          this.setState({ posts: response.data });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ errorMessage: "error" });
        });
    }

## HTTP Post Request

Class conponent

_PostForm.js_

    submitHandler = (e) => {
      e.preventDefault();
      console.log(this.state);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
