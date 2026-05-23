// src/App.jsx
import TodoPage from "./TodoPage";
import BlogPage from "./BlogPost";

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React & AI Prompting Çalışma Alanı</h1>
      <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

      {/*
        ====================================================
        🔌 ŞALTER ALANI (Egzersiz Seçici)

        Hangi örneği çalıştırmak istiyorsan onu açık bırak.
        Diğerinin başına // koyarak kapat!
        ====================================================
      */}

      {/* Şu an 1. Egzersiz Aktif: */}
      <TodoPage />

      {/* 2. Egzersizi çalıştırmak istediğinde üsttekini kapatıp alttakini açabilirsin: */}
      {/* <BlogPage id="42" /> */}

      {/* ==================================================== */}
    </div>
  );
}

export default App;