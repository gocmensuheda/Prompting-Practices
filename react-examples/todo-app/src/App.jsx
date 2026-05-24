// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./TodoPage";
import BlogPage from "./BlogPage";
import ButtonPage from "./ButtonPage";
import UserPage from "./UserPage";
import MemoPage from "./MemoPage"; // 5. Egzersiz içeri alındı

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>React & AI Prompting Çalışma Alanı</h1>

        {/* Tüm eski linkler milim bozulmadan korundu, yeni link eklendi */}
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <Link to="/">🏠 Egzersiz 1 (Todo)</Link> |
          <Link to="/blog/42">📄 Egzersiz 2 (Blog ID: 42)</Link> |
          <Link to="/blog/105">📄 Egzersiz 2 (Blog ID: 105)</Link> |
          <Link to="/button">🎨 Egzersiz 3 (Styled Button)</Link> |
          <Link to="/users">🌐 Egzersiz 4 (API Users)</Link> |
          <Link to="/memo">⚡ Egzersiz 5 (React.memo)</Link>
        </nav>

        <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

        {/* TEMİZ ROTA DAĞILIMI */}
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/users" element={<UserPage />} />
          {/* Yeni performans sayfasının rotası */}
          <Route path="/memo" element={<MemoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;