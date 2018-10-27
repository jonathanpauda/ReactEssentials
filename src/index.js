const {render} = ReactDOM
//take in 2 arguments, name of element we want to render, 2nd is where we want it to be rendered in the DOM
render(
  <h1 id = 'title'
      className = 'header'
      style ={{backgroundColor: 'orange', color:'white', fontFamily: 'verdana'}}>
      Hey World
      </h1>,
  document.getElementById('react-container')
)
