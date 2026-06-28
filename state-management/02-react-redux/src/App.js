import { Provider } from 'react-redux';
import store from './store';
import Tasks from './components/tasks/Tasks';

export default function App() {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
}
