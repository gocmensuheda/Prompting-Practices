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


      */}

      {/* Şu an 1. Egzersiz Aktif: */}
      <TodoPage />

      {/* 2. Egzersizi çalıştırmak istediğinde üsttekini kapatıp alttakini açabilirsin, üsttekini de alttaki gibi yaparak pasif hale getir. alttakini
           aktif hale getirmek için ise alttaki gibi süslü parantez içinde yorum satırı kullan*/}
      {/* <BlogPage id="42" /> */}

      {/* ==================================================== */}
    </div>
  );
}

export default App;