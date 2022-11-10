import AboutMe, { Person } from './components/AboutMe';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import PhotoCard, { PhotoCardType } from './components/PhotoCard';
import './App.css';

const me: Person = {
  name: "Tyler Jefferson",
  age: 22,
  awesome: true
}

const card: PhotoCardType = {
  photo: "https://lh3.googleusercontent.com/ogw/AOh-ky34t5fd0w9ldRPKMVEIsV_xbcSYNHplZ9kVirThwQ=s32-c-mo",
  user: "Todd Albert",
  mainPhoto: 'https://images.unsplash.com/photo-1665398892998-8ee81dae4bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODExNjY5Mg&ixlib=rb-1.2.1&q=80&w=1080',
  description: 'Render of overlapping brick balconies with shrubs growing on each',
  likeCount: 99
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello TypeScript 👋🏼</h1>
        <AboutMe person={me}/>
        <Counter />
        <Greeting firstName='Tyler' lastName='Jefferson' />
        <Greeting firstName={'Lazy'} lastName={'Sloth'} />
        <PhotoCard card={card} />
      </header>
    </div>
  );
}

export default App;
