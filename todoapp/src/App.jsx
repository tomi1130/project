import logo from './logo.svg';
import './App.css';
import { PrimaryButtons } from './components/atoms/buttons/PrimaryButtons';
import { SecondaryButtons } from './components/atoms/buttons/SecondaryButtons';
import { SerchInput } from './components/molecules/SerchInput';
import { UserCards } from './components/organisms/user/UserCards';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './components/templates/DefaultLayouts';

const user={
  name:"田中",
  image:"https://source.unsplash.com/mJaD10XeD7w",
  email:"123546@aaa.com",
  phone:"050-2154-6987",
  company:{
    name:"テスト株式会社aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  website:"https://google.com",
}

function App() {
  return (
    <BrowserRouter >
    <DefaultLayout>
      <PrimaryButtons>テスト</PrimaryButtons>
      <SecondaryButtons>検索</SecondaryButtons>
      <SerchInput />
      <UserCards user ={user}/>
    </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
