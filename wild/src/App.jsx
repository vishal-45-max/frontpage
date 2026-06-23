import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyles'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import Users from './pages/Users'


function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replaceto= "dashboard"/>}></Route>
          <Route path='dashboard' element={<Dashboard/>}></Route>
          <Route path='booking' element={<Bookings/>}></Route>
          <Route path='cabins' element={<Cabins/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='setting' element={<Settings/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='account' element={<Account/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}
export default App;