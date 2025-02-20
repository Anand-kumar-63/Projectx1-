
import './App.css';
import Body from './Body';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import AppStore from './utils/Store';
import {BrowserRouter, createBrowserRouter , RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Videopage from './Components/Videoplayer/Videopage';
import Shorts from './Components/Shorts';
import Subs from "./Components/Subs"
import Signup from './Components/UserPage/Usersignup';
import Login from './Components/UserPage/Userlogin';
import Searchpage from './Components/SearchPage/Searchpage.jsx';
import ChannelPage from './Components/Channelpage/Channelpage.jsx';
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
    },  {
      path:"/Searchpage",
      element:<Searchpage />
    }
    ,{
      path:"/Channel",
      element:<ChannelPage />
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
  },
  {
    path:"/Login",
    element:<Login />
  },
  {
    path:"/Signup",
    element:<Signup />
  },

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
