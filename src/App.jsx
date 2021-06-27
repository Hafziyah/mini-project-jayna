import './styles/App.css';
import Signup from '../src/components/signUp.jsx'
import Login from '../src/components/login.jsx'


function App() {
  const handleSubmit = event => {
   event.preventDefault();
   alert('Welcome!')
 }

 function App() {
   return(
     <div>
       <Signup />
       <Login />
     </div>
   )
 }

  return(
    <div className="wrapper">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
              <input name="password" type="password" placeholder="Re-enter password">
              </input>
          </label>

        </container>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;