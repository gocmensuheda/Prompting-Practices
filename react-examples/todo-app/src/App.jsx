// src/App.jsx
import TodoPage from "./TodoPage"; // Sadece temiz TodoPage dosyamızı çağırıyoruz

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React & AI Prompting Çalışma Alanı</h1>
      <hr style={{ margin: '20px 0', borderColor: '#eee' }} />

      {/*
        ====================================================
        🎯 GÜNCEL ÇALIŞMA ALANI
        Şalter mantığı kaldırıldı. Proje tamamen temizlendi.
        Şu an sadece 1. Egzersiz (TodoList) çalışıyor.
        ====================================================
      */}

      <TodoPage />

    </div>
  );
}

export default App;