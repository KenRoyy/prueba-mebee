import './App.css';
import Heading from './components/Heading';
import Image from './components/Image';
import ListSongs from './components/ListSongs';

function App() {
  return (
    <div className="App">
        <Heading/>
      <div className="container">
        {/* <img src={'https://api.deezer.com/album/72000342/image'}/> */}
        <div className="song">
          <p>User <span>icon</span></p>
          <img src="https://picsum.photos/250/250"/>
          <h2>Title song</h2>
        </div>
        {/* <Image/> */}
        <div className="list">
          <div className='songList'>
            <img src="https://picsum.photos/120/120"/>
            <div className='description'>
              <p>title</p>
              <p>album</p>
              <p>user</p>
              <p>icon</p>
            </div>
          </div>
          <div className='songList'>
            <img src="https://picsum.photos/120/120"/>
            <div className='description'>
              <p>title</p>
              <p>album</p>
              <p>user</p>
              <p>icon</p>
            </div>
          </div>
          <div className='songList'>
            <img src="https://picsum.photos/120/120"/>
            <div className='description'>
              <p>title</p>
              <p>album</p>
              <p>user</p>
              <p>icon</p>
            </div>
          </div>
          <div className='songList'>
            <img src="https://picsum.photos/120/120"/>
            <div className='description'>
              <p>title</p>
              <p>album</p>
              <p>user</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;