// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./TodoPage";
import BlogPage from "./BlogPage";

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>React & AI Prompting Çalışma Alanı</h1>

        {/* Sayfalar arası geçişi sağlayan sade menü */}
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <Link to="/">🏠 Egzersiz 1 (Todo)</Link> |
          <Link to="/blog/42">📄 Egzersiz 2 (Blog ID: 42)</Link> |
          <Link to="/blog/105">📄 Egzersiz 2 (Blog ID: 105)</Link>
        </nav>

        <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

        {/* TEMİZ ROTA DAĞILIMI */}
        <Routes>
          {/* Ana sayfada sadece TodoPage dosyası açılır */}
          <Route path="/" element={<TodoPage />} />

          {/* /blog/:id adresinde sadece BlogPage dosyası açılır */}
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;