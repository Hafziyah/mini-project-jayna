import React from 'react';
import '../styles/App.css';


function App() {
  return(
    <div className="wrapper">
      <h1> Login </h1>
      
      <form>
      <container>
          <label>
              <p>Email</p>
              <input name="email" type="email" placeholder="Email">
              </input>
          </label>

          <label>
              <p>Password</p>
              <input name="password" type="password" placeholder="Password">
              </input>
          </label>
          
       </container>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;