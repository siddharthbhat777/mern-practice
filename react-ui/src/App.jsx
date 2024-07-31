import './App.css';
import CreatePost from './components/createComponent/CreatePost';
import Posts from './components/Posts';

const App = () => {
  return (
    <div className="App">
      <div className='createLayout'>
        <CreatePost />
      </div>
      <Posts />
    </div>
  );
};

export default App;
