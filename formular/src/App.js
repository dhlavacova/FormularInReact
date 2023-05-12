import './App.css';
import Formular from "./components/Formular";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "react-bootstrap";
import Main from "./components/Main";



function App() {
  return (
    <div className="App">
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
        >
            <Header/>
        <Main/>
    </ThemeProvider>
    </div>
  );
}

export default App;
