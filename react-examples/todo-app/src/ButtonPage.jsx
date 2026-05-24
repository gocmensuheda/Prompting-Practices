// src/ButtonPage.jsx
import styled from "styled-components";

// ==========================================
// Konu: React'te Modern Stil Yönetimi (CSS-in-JS)
// Örnek 3: Styled-Components ve Animasyonlar
// ==========================================

// Verilen Prompt:
// "Bu CSS'i React'te styled-components ile yeniden yaz."

const AnimatedButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function ButtonPage() {
  return (
    <div style={{ padding: '20px', background: '#f8f9fa', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>🎨 Egzersiz 3: Styled-Components Buton Animasyonu</h2>
      <p>Düğmenin üzerine gelerek büyüme animasyonunu test edebilirsin:</p>

      <AnimatedButton>Beni Büyüt! ✨</AnimatedButton>
    </div>
  );
}