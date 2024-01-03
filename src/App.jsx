import {Toaster} from 'react-hot-toast';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import styles from './styles/modules/app.module.scss';

const App = () => {
  return (
    <div>
      <div className="container">
        {/* page title */}
        <PageTitle>Todo app</PageTitle>

        <div className={styles.app__wrapper}>
          {/* app header */}
          <AppHeader />
          {/* app content */}
          <AppContent />
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