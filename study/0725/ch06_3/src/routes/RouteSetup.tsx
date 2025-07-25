import {Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import LandingPage from './LandingPage'
import Board from '../pages/Board'

import Signup from './Auth/SignUp'
import Login from './Auth/Login'
import RequireAuth from './Auth/RequireAuth'
import Logout from './Auth/Logout'
import NoMatch from './NoMatch'


export default function RouteSetup() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path='/board' element={
          <RequireAuth>
            <Board/>
          </RequireAuth>}/>
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={
        <RequireAuth>
          <Logout/>
        </RequireAuth>}/>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
