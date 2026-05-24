// src/MemoPage.jsx
import React, { useState, memo } from "react";

// ==========================================
// Konu: Performans Optimizasyonu ve Refactoring
// Örnek 5: React.memo ile Gereksiz Render Engelleme
// ==========================================

// 1. MEMO KULLANILMAYAN BİLEŞEN (Her durumda tekrar render olur)
const NormalTodoItem = ({ text }) => {
  console.log("🔴 [Normal Bileşen] Render Edildi:", text);
  return <li style={{ color: "#d9534f" }}>{text} (Memo'suz)</li>;
};

// 2. MEMO KULLANILAN BİLEŞEN (Sadece text prop'u değişirse render olur)
const MemoizedTodoItem = memo(({ text }) => {
  console.log("🟢 [Memo'lu Bileşen] Render Edildi:", text);
  return <li style={{ color: "#5cb85c" }}>{text} (React.memo ile Korumalı)</li>;
});

export default function MemoPage() {
  const [count, setCount] = useState(0); // Sayfayı zorla tetiklemek için bir state

  return (
    <div style={{ padding: '20px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>⚡ Egzersiz 5: Performans Optimizasyonu (React.memo)</h2>

      <p>
        <strong>Açıklama:</strong> React.memo kullanımı, komponentin sadece gerekli durumlarda yeniden render edilmesini sağlar.
        Bu örnekte korumalı bileşen React.memo ile sarmalanmıştır. Bu sayede text prop'unun değişmediği durumlarda (örneğin aşağıdaki sayaç arttığında)
        yeniden render edilmez. Performansı artırırken gereksiz renderları azaltır.
      </p>

      <div style={{ margin: '20px 0', padding: '15px', background: '#f9f9f9', borderRadius: '5px' }}>
        <h4>Sayaç Durumu: {count}</h4>
        <button onClick={() => setCount(count + 1)}>Sayacı Artır (Sayfayı Render Et) 🔄</button>
        <p style={{ fontSize: '12px', color: '#666' }}>
          *Sayaca tıkladığında tarayıcı konsoluna (F12) bak! Normal bileşen gereksiz yere tekrar çizilirken, Memo'lu bileşen kendini koruyacak.
        </p>
      </div>

      <h3>Test Listesi:</h3>
      <ul>
        {/* İkisine de sabit yazı veriyoruz. Sayfa render olsa bile yazılar değişmiyor */}
        <NormalTodoItem text="React Performans Çalışması" />
        <MemoizedTodoItem text="React Performans Çalışması" />
      </ul>
    </div>
  );
}