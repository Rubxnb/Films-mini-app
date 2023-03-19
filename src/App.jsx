import './App.css';
import { Router } from './components/Router'
import { MyListProvider } from './context/myList'
import { MyList } from './pages/MyList'
import {Search} from './pages/Search'

const routes = [ 
  {
    path: '/',
    Component: Search
  },
  {
    path: '/search',
    Component: Search
  },
  {
    path: '/mylist',
    Component: MyList
  }
]

function App() {


  return (
    <MyListProvider>
      <Router routes={routes}/>
    </MyListProvider>
      
  )
}

export default App
