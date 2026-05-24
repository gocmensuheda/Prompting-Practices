// src/TodoPage.jsx

// ==========================================
// Konu: React Projelerinde AI Kullanımı
// Örnek 1: Bileşen Parçalama ve Prop Aktarımı
// ==========================================

// Verilen Prompt:
// "TodoItem komponentini oluşturun ve text prop'unu kullanarak her bir todo öğesini liste."

function TodoItem({ text }) {
  return <li>{text}</li>;
}

export default function TodoList() {
  const todos = ["React öğren", "AI'yi dene", "Proje tamamla"];
  return (
    <div>
      <h2>💡 Egzersiz 1: Orijinal Sade Liste</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
    </div>
  );
}