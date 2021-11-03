import './App.css';
import AppBarComponent from './components/AppBarComponent';
import Login from './components/admin/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './components/admin/Register';
import Home from './components/Home';
import StudentLogin from './components/student/StudentLogin';
import StudentDashboard from './components/student/StudentDashboard';
import Dashboard from './components/admin/Dashboard';
import StudentTest from './components/student/StudentTest';

function App() {
  return (
    <Router>
    <div className="app">
      <AppBarComponent/>
      <Switch>

      <Route path="/register">
        <Register/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/dashboard">
        <Dashboard/>
      </Route>

      <Route path="/student_login">
        <StudentLogin/>
      </Route>

      <Route path="/student_dashboard">
        <StudentDashboard/>
      </Route>

      <Route path="/student_test:id">
        <StudentTest/>
      </Route>

      <Route path="/">
        <Home/>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
