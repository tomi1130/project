import { RecoilRoot } from 'recoil';
import './App.css';
import { UserProvider } from './providers/USerProvider';
import { Router } from './Router/Router';


function App() {
  return (
    <RecoilRoot>
    <UserProvider>
    <Router/>
    </UserProvider>
    </RecoilRoot>
  );
}

export default App;
