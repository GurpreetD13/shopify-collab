import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import Collabs from './pages/Collabs/Collabs';



const App = () => {

    return (
        <BrowserRouter>
            <SearchBar />
            <Nav />
            <Collabs />
            <Switch>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
