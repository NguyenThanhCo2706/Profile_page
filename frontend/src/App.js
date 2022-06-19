import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react'
import EditPage from './components/EditPage/Editpage';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import MakePost from './components/Posts/MakePost';
import Post from './components/Posts/Post';
function App() {
  const [isEdit, setEdit] = useState(false)
  const [isOpenPost, setOpen] = useState(false)
  const pending = useSelector((state) => state.user.pending)
  const error = useSelector((state) => state.user.error)
  return (
    <div className="App">
      {isEdit ?
        <EditPage setEdit={setEdit} />
        : !isEdit && !isOpenPost ? (
          <>
            <Header setEdit={setEdit} />
            <div className="post-container">
              <Post />
            </div>
            <Footer isOpenPost={isOpenPost} setOpen={setOpen} />

          </>
        )
          :
          <>
            <Header setEdit={setEdit} />
            <MakePost setOpen={setOpen} />
          </>
      }
      {pending && <p className="loading">Loading...</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data from server!</p>
      )}
    </div>
  );
}

export default App;
