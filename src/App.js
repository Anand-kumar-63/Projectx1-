
import './App.css';
import Body from './Body';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import AppStore from './utils/Store';
function App() {
  return (
    <>
    <Provider store={AppStore}>
    <Header />
    <Body />
    </Provider>
    </>
  );
}

export default App;
