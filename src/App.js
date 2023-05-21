import { BrowserRouter } from 'react-router-dom';
import IndexRouter from './routers/Index';

function App() {
  return (
    <>

      <BrowserRouter>
        <IndexRouter />
      </BrowserRouter>

    </>
  );
}

export default App;
