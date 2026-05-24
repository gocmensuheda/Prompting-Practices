// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./TodoPage";
import BlogPage from "./BlogPage";
import ButtonPage from "./ButtonPage"; // 1. Kazanım Korundu - Yeni sayfa eklendi

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>React & AI Prompting Çalışma Alanı</h1>

        {/* Sayfalar arası geçişi sağlayan sade menü - Eski linkler aynen duruyor */}
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <Link to="/">🏠 Egzersiz 1 (Todo)</Link> |
          <Link to="/blog/42">📄 Egzersiz 2 (Blog ID: 42)</Link> |
          <Link to="/blog/105">📄 Egzersiz 2 (Blog ID: 105)</Link> |
          <Link to="/button">🎨 Egzersiz 3 (Styled Button)</Link>
        </nav>

        <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

        {/* TEMİZ ROTA DAĞILIMI - Eski rotalar birebir korundu */}
        <Routes>
          {/* Ana sayfada sadece TodoPage dosyası açılır */}
          <Route path="/" element={<TodoPage />} />

          {/* /blog/:id adresinde sadece BlogPage dosyası açılır */}
          <Route path="/blog/:id" element={<BlogPage />} />

          {/* Yeni Buton egzersizinin bağımsız rotası */}
          <Route path="/button" element={<ButtonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;