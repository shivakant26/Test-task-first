import './App.css';
import Home from './Component/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ArticleList from './Component/articleList';
import ArticleDetails from './Component/articleDetails';
import AddArticle from './Component/addArticle';
import PageNotFound from './Component/PageNotFound';
function App() {
  const token = localStorage.getItem("logintoken");
  return (
    <div className="App">
      <Router>
        {
          token ? 
          <>
          <Routes>
              <Route path='/articlelist' exact={true} element={<ArticleList/>}/>
              <Route path='/articledetails/:id' exact={true} element={<ArticleDetails/>}/>
              <Route path='/addarticle' exact={true} element={<AddArticle />}/>
          </Routes>
          </>
          :
          <>
          <Routes>
              <Route  path='/' exact={true} element={<Home/>}/>
              <Route  path='*' exact={true} element={<PageNotFound />}/>
          </Routes>
          </>
        }
      </Router>
    </div>
  );
}

export default App;
