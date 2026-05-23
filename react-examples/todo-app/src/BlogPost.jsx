// src/BlogPage.jsx

// ==========================================
// Konu: React Bileşenlerine Prop ile Veri Gönderme
// Örnek 2: BlogPost Bileşeni
// ==========================================

// Verilen Prompt:
// "BlogPost komponentinde dışarıdan gönderilen bir id proprosunu yakala ve göster."

// AI'ın Ürettiği Çözüm Kodu:
export default function BlogPage({ id }) {
  return (
    <div style={{ padding: '20px', background: '#f5f5f5', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>📁 Egzersiz 2: Blog Detay Sayfası</h2>
      {/* App.jsx'teki şalterden gönderdiğimiz ID buraya basılır */}
      <p>Gönderilen ID numarası: <strong>{id}</strong></p>
    </div>
  );
}