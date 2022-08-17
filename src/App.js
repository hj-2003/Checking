import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";

function App() {
  let todos =[
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get the job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get the job done 2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the market to get the job done 3"
    },
  ]
  return (
    <>
      <Header title = "My Todos List" searchBar={true}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
