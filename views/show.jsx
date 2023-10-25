const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
  <h3>{bread.name}</h3>
  <p>
    this is {bread.hasGluten ? "not" : " "} gluten-free.
  </p>
  <img src={bread.image} alt={bread.name} />
  <li><a href="/breads">Go home</a></li>
</Default>

      )
  }
  

module.exports = Show
