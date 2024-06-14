import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './components/Weather';
import WeatherHistory from './components/WeatherHistory';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/history" element={<WeatherHistory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
