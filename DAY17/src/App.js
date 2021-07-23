// import logo from './logo.svg';
import './App.css';

function Head(props) {
  return (
    <h1 className="header">{props.header}</h1>
  );
}

function Food(props) {
  return (
    <div className="item">
      <Head header={props.head} />
      <article className="item-content">you have consumed {props.value} cals today</article>
    </div>
  );
}

function Main(props) {
  return (
    <div className={props.className}>
      <ul className="item-list">
        <Food head="Lasania" value="56"/>
        <Food head="Pizzza" value="500"/>
        <Food head="Brownie" value="180"/>
        <Food head="Lasagna" value="200"/>
        <Food head="Fried Rice" value="90"/>
        <Food head="Burger" value="69"/>
        <Food head="Pani Puri" value="10"/>
      </ul>
    </div>
  );
}

function Container(props) {
  return (
    <div className="container">
      <Head header="Calorie Read Only" />
      <Main className="main" />
    </div>
  )
}

function App(props) {
  return (
    <Container />
  )
}

export default App;
