import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/layout/Container';
import View from './components/layout/View';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <View />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
