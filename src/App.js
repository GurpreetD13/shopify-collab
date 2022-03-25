import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import Collabs from './pages/Collabs/Collabs';
import CollaborationNav from './components/CollaborationNav/CollaborationNav';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';


const App = () => {

    return (
        <BrowserRouter>
            <SearchBar />

            <div class="wrapper">
            <Sidebar>
                 <Nav />
            </Sidebar>
            <Main>
              <CollaborationNav />
              <Collabs />
            </Main>
            </div>
            <Switch>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
