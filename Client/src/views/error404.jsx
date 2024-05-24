const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <img src="./images/Pupper.jpg" alt="its a Puppy" height="400px" width="400px" />
              <p>Photo by mtsjrdl on Unsplash</p>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404