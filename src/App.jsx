import { useState } from 'react';
import { MainLayout} from './layouts/MainLayout.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="p-8 text-3xl">hola</p>
      <MainLayout>
        <p>Hola</p>
      </MainLayout>
    </>
  );
}

export default App;
