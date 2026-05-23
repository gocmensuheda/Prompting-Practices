import { useState } from 'react'
import BlogPost from "./BlogPost";
// ==========================================
// Konu: React Projelerinde AI Kullanımı
// Örnek 1: Bileşen Parçalama ve Prop Aktarımı
// ==========================================

// Başlangıç Kodu
function TodoList() {
  const todos = ["React öğren", "AI'yi dene", "Proje tamamla"];
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </ul>
  );
}

// Verilen Prompt:
// "TodoItem komponentini oluşturun ve text prop'unu kullanarak her bir todo öğesini liste."

// AI'ın Ürettiği Çözüm Kodu:
function TodoItem({ text }) {
  return <li>{text}</li>;
}

// Projenin Çalışabilmesi İçin Ana Giriş Kapısı (Kök Bileşen):
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React & AI Prompting Egzersizleri</h1>
      <TodoList />
    </div>
  );
}

export default App;

