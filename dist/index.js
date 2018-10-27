const {createElement } = React
const {render} = ReactDOM

const title = React.createElement(
  'h1', //sending in 3 arguments
  {id: 'title', className: 'header'},
  'Hello world'
)
//take in 2 arguments, name of element we want to render, 2nd is where we want it to be rendered in the DOM
ReactDOM.render(
  title,
  document.getElementById('react-container')
)
