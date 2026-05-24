// src/UserPage.jsx
import { useEffect, useState } from "react";

// ==========================================
// Konu: API Entegrasyonu ve React ile Veri Yönetimi
// Örkem 4: Fetch API ile Asenkron Veri Çekme
// ==========================================

// Verilen Prompt:
// "Bu axios.get çağrısını fetch ile yeniden yaz ve aynı sonucu al."

export default function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Axios yerine yerleşik Fetch API kullanıyoruz
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Gelen ham veriyi JSON formatına dönüştürüyoruz
      .then((data) => setUsers(data))       // Dönüşen veriyi state'e aktarıyoruz
      .catch((error) => console.error("Veri çekilirken hata oluştu:", error));
  }, []); // <--- PARANTEZ HATASI BURADA DÜZELTİLDİ

  return (
    <div style={{ padding: '20px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>🌐 Egzersiz 4: API Entegrasyonu (Fetch API)</h2>
      <p>JSONPlaceholder veri merkezinden anlık çekilen kullanıcı listesi:</p>

      <ul style={{ lineHeight: '1.8' }}>
        {users.map((user) => (
          <li key={user.id}>
            👤 <strong>{user.name}</strong> - 📧 {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}