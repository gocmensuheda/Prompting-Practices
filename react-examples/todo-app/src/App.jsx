// src/App.jsx
import TodoList from "./TodoPage"; // Egzersiz sayfamızı buraya çağırdık

// Projenin Çalışabilmesi İçin Ana Giriş Kapısı (Kök Bileşen):
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React & AI Prompting Egzersizleri</h1>
      
      {/* Ayrı sayfaya taşıdığımız, promptları içeren Todo listesi burada çalışıyor */}
      <TodoList />
    </div>
  );
}

export default App;