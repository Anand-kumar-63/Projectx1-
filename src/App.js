import "./App.css";
import Body from "./Body";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import AppStore from "./utils/Store";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Videopage from "./Components/Videoplayer/Videopage";
import Shorts from "./Components/Shorts";
import Subs from "./Components/Subs";
import Signup from "./Components/UserPage/Usersignup";
import Login from "./Components/UserPage/Userlogin";
import Searchpage from "./Components/SearchPage/Searchpage.jsx";
import ChannelPage from "./Components/Channelpage/Channelpage.jsx";
function App() {
  return (
    <>
      <Provider store={AppStore}>
        <div>
          <Provider store={AppStore}>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Body />}>
                  <Route index element={<MainContainer />} />
                  <Route path="videopage" element={<Videopage />} />
                  <Route path="Searchpage" element={<Searchpage />} />
                  <Route path="Channel" element={<ChannelPage />} />
                </Route>
                <Route path="shorts" element={<Shorts />} />
                <Route path="Subs" element={<Subs />} />
                <Route path="Login" element={<Login />} />
                <Route path="Signup" element={<Signup />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        </div>
      </Provider>
    </>
  );
}

export default App;
