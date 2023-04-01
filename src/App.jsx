//import './App.css';
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import { Router } from './components/Router'
import { MyListProvider } from './context/myList'
import { MyList } from './pages/MyList'
import {Search} from './pages/Search'
import {Inicio} from './pages/Inicio'
import './styles/app.scss'

const routes = [ 
  {
    path: '/Movies-mini-app',
    Component: Inicio
  },
  {
    path: '/Movies-mini-app/',
    Component: Inicio
  },
  {
    path: '/Movies-mini-app/search',
    Component: Search
  },
  {
    path: '/Movies-mini-app/mylist',
    Component: MyList
  }
]

function App() {


  return (
    <MyListProvider>
    <section>
      <NavigationBar />
      <Router routes={routes}/>
     {/*  <Footer/> */}
    </section>
    </MyListProvider>
      
  )
}

export default App
