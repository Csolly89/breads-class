const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
  return (
    <Default>
      <h3>{bread.name}</h3>
      <p>
        this is {bread.hasGluten ? "not" : " "} gluten-free.
      </p>
      <img src={bread.image} alt={bread.name} />
      <li><a href="/breads">Go home</a></li>
      <form action={`/breads/${index}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE"/>
      </form>
    </Default>
      )
  }
  

module.exports = Show