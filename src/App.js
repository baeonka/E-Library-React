import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Books from "./pages/Books"
import { books } from "./data"
import BookInfo from './pages/BookInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books/:id" render={() => <BookInfo books={books} />} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
