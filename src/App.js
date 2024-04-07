import './App.css';

import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/contacts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button type="submit">Submit</button>
    </form>
  );
}

export default function App() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Contacts() {
  return <h2>Contacts</h2>;
}
