// import logo from './logo.svg';
import classes from './app.module.css';
import Login from './components/Login/Login';

function App({ authService }) {
  return (
    <div className={classes.app}>
      <Login authService={authService}/>
    </div>
  );
}

export default App;
