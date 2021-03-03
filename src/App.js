import { Switch,Route } from 'react-router';
import './App.css';
import UsersList from './components/usersList/UsersList';
import PostsList from './components/postsList/PostsList';
import CommentsList from './components/commentsList/CommentsList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={UsersList}/>
        <Route path='/posts/userid/:id' component={PostsList} />
        <Route path='/comments/postid/:id' component={CommentsList} />
      </Switch>
    </div>
  );
}

export default App;
