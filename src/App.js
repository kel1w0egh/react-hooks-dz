import './App.css';
import Film from "./components/Film";
import ColorChange from "./components/ColorChange";
import Quote from "./components/Quote";

function App() {
  const posterURL = 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/53/The_Lord_of_the_Rings._The_Return_of_the_King_%E2%80%94_movie.jpg/211px-The_Lord_of_the_Rings._The_Return_of_the_King_%E2%80%94_movie.jpg';
  const producer = 'Питер Джексон';
  const filmActors = ['Иэн Маккеллен', 'Вигго Мортенсен', 'Элайджа Вуд', 'Шон Эстин', 'Энди Серкис', 'Орландо Блум', 'Билли Бойд'];
  return (
    <div className="App">
      <h1>Задание №1</h1>
      <Film filmPoster={posterURL} producerName={producer} releaseYear={"2003"} actors={filmActors}/>
      <h1>Задание №2</h1>
      <ColorChange />
        <h1>Задание №4</h1>
        <Quote />
    </div>
  );
}

export default App;
