import React from 'react';
import '../styles/App.css';


function App() {
  return(
    <div className="wrapper">
      <h1>Sign Up</h1>
      
      <form>
      <container>
          <label>
            <p>Name</p>
            <input name="name" type="text" placeholder="Name" />
          </label>

          <label>
            <p>Address</p>
            <input name="text" type="textarea" placeholder="Address"/>
          </label>

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
          
          <label>
              <p>Password</p>
              <input name="password" type="password" placeholder="Confirm password">
              </input>
          </label>


       </container>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;