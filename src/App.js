
import './App.css';
import Body from './Body';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import AppStore from './utils/Store';
import {createBrowserRouter , RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Videopage from './Components/Videopage'
import Shorts from './Components/Shorts';
import Subs from "./Components/Subs"
function App() {


  const approuter = createBrowserRouter([{
  path:"/",
  element: <Body />,
  children:[
    {
      path:'/',
      element:<MainContainer />
    },
    {
      path:"/videopage",
      element:<Videopage />
    }
  ]
  },
  {
    path:"/shorts",
    element:<Shorts />
  }
  ,{
    path:"/Subs",
    element:<Subs />
  }
])
  return (
    <>
    <Provider store={AppStore}>
    <div>    
    <Header />
    <RouterProvider router={approuter}/>
    </div>
    </Provider>
    </>
  );
}

export default App;
