// src/BlogPage.jsx
import { useParams } from "react-router-dom";

// ==========================================
// Konu: React Router ile Çalışma
// Örnek 2: Dinamik Rotalar ve useParams
// ==========================================

// Verilen Prompt:
// "BlogPost komponentinde useParams kullanarak id parametresini yakala ve bir yazı başlığı göster."

export default function BlogPage() {
  const { id } = useParams(); // URL'den gelen dinamik ID'yi yakalar

  return (
    <div style={{ padding: '20px', background: '#f5f5f5', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>📁 Egzersiz 2: Blog Detay Sayfası</h2>
      <p>useParams ile URL'den yakalanan ID numarası: <strong>{id}</strong></p>
    </div>
  );
}