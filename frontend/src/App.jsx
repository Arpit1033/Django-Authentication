import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Activate from './containers/Activate'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'
import Layout from './hocs/Layout'

function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/login' Component={Login}/>
            <Route exact path='/signup' Component={Signup}/>
            <Route exact path='/reset-password' Component={ResetPassword}/>
            <Route exact path='/password/reset/confirm/:uid/:token' Component={ResetPasswordConfirm}/>
            <Route exact path='/activate/:uid/:token' Component={Activate}/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
