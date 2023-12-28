import {Toaster} from 'react-hot-toast';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';

const App = () => {
  return (
    <div>
      <div className="container">
        {/* page title */}
        <PageTitle>Todo app</PageTitle>

        <div className="">
          {/* app header */}
          <AppHeader />
          {/* app content */}
        </div>
      </div>

      {/* toaster */}
      <Toaster position='bottom-right' toastOptions={{
        style: {
          fontSize: '1.4rem',
        }
      }} />
    </div>
  )
}

export default App