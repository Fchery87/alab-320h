import './App.css';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import EmployeeList from './components/EmployeeList.jsx';



function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default App;
