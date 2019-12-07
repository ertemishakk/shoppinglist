import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar'
import Shoppinglist from './components/Shoppinglist';
import { Provider } from 'react-redux'
import store from './store'
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Container>
          <ItemModal />
          <Shoppinglist />
        </Container>

      </div>
    </Provider>
  );
}

export default App;
