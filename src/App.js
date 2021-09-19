import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Koober', 'Bappi', 'Shuvo', 'Omar Sani'];

  const nayikas = ['Mowshomi', 'Chekha', 'Kopila'];

  const cinemas =[
    {nayok: 'koober', nayika: 'Kopila'},
    {nayok: 'Rubel', nayika: 'Mowshomi'},
    {nayok: 'Razzak', nayika: 'Sabana'},
    {nayok: 'Josim', nayika: 'Suchorita'},
  ]

  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* <Cinema nayok="j Bond" nayika="cat W"></Cinema> */}
      {
        cinemas.map( cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
      
    </div>
  );
}

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'steelblue',
    border: '3px solid maroon',
    margin: '20px',
    borderRadius: '10px',

  }
  return ( 
  <div style= {person}>
    <h1>Name: {props.name}</h1>
    <h4>Hero of: {props.nayika}</h4>
  </div>
  )
};

function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Hero of: {props.nayika}</h4>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className="person">
      <h3>Phone: {props.phone} </h3>
      <h5>Address: {props.address} </h5>
    </div>
  )
}

/*
<Person name="Rubel" nayika="Mowshomi"></Person>
      <Person name="BappaRaz" nayika="Chekha"></Person>
      <Person name="koober" nayika="Kopila"></Person>

*/

/* 
<p id="title">Title</p>

    <Friend phone="01700" address="Noakhali"></Friend>
      <Friend phone="01800" address="Dhaka"></Friend>
      <Friend phone="01900" address="Chittagong"></Friend>

*/

/*
<Person name={nayoks[0]} nayika={nayikas[0]}></Person>
      <Person name={nayoks[1]} nayika={nayikas[1]}></Person>
      <Person name={nayoks[2]} nayika={nayikas[2]}></Person>

*/

export default App;
