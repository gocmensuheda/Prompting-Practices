import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom"; // prompttan sonra geldi.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

// verilen prompt: "BlogPost komponentinde useParams kullanarak id parametresini yakala ve bir yazı başlığı göster."



function Home() {
  return <h1>Ana Sayfa</h1>;
}

function BlogPost() {
  // URL'deki :id parametresini yakala
  const { id } = useParams();

  // Başlık olarak ekrana yazdır
  return <h1>Blog Yazısı: {id}</h1>;
}

export default App;