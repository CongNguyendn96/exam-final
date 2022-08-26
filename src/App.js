import logo from './logo.svg';
import './App.css';
import AddNewItem from './components/AddNewItem';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <h1>NHẮC NHỞ NGÀY QUAN TRỌNG CỦA BẠN</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddNewItem />
        <Box />
      </div>
    </div>
  );
}

export default App;
