import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import './assets/styles/globals.scss'
import { TaskPage } from './pages/TaskPage'
import { store } from './store/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <TaskPage />
      </Provider>
      <Toaster />
    </>
  )
}

export default App
