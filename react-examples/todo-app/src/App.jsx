// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./TodoPage";
import BlogPage from "./BlogPage";
import ButtonPage from "./ButtonPage";
import UserPage from "./UserPage"; // Yeni egzersiz içeri alındı

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>React & AI Prompting Çalışma Alanı</h1>

        {/* Sayfalar arası geçişi sağlayan sade menü - Tüm eski linkler korundu */}
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <Link to="/">🏠 Egzersiz 1 (Todo)</Link> |
          <Link to="/blog/42">📄 Egzersiz 2 (Blog ID: 42)</Link> |
          <Link to="/blog/105">📄 Egzersiz 2 (Blog ID: 105)</Link> |
          <Link to="/button">🎨 Egzersiz 3 (Styled Button)</Link> |
          <Link to="/users">🌐 Egzersiz 4 (API Users)</Link>
        </nav>

        <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

        {/* TEMİZ ROTA DAĞILIMI - Tüm eski rotalar korundu */}
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/button" element={<ButtonPage />} />
          {/* Yeni API kullanıcıları sayfasının rotası */}
          <Route path="/users" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;