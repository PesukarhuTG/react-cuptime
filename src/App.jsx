import { BrowserRouter } from 'react-router-dom';
import { Footer, Header, Main } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
