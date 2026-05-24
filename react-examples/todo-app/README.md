# 🗒️ React & AI Prompting Öğrenme ve Pratik Günlüğü

Bu çalışma, bir son kullanıcı projesi değil; React bileşen mimarisi, prop aktarımı, state yönetimi, dinamik yönlendirme (React Router) ve modern stil yönetimi konularını pekiştirmek amacıyla oluşturulmuş **bireysel bir öğrenme ve pratik laboratuvarıdır**. 

Süreç boyunca karşılaşılan teknik problemler, hata ayıklama (debugging) deneyimleri ve Yapay Zeka (AI) prompt mühendisliği teknikleri bu günlük üzerinde dökümante edilmiştir.

> 🔄 **GELİŞİM DURUMU: AKTİF ÖĞRENME DEVAM EDİYOR**
> Bu laboratuvar, yeni React konuları ve AI prompt egzersizleri ile düzenli olarak güncellenmekte ve genişletilmektedir.

---

## 📦 Kullanılan Harici Bağımlılıklar (Dependencies)

Egzersizlerin kararlı ve gerçeğe uygun çalışabilmesi için projeye dahil edilen temel kütüphaneler şunlardır:
* **`react` & `react-dom`**: Çekirdek React kütüphaneleri ve DOM yönetim araçları.
* **`react-router-dom`**: Dinamik sayfa yönlendirmelerini ve `useParams()` kancasını kullanabilmek için eklenen yönlendirme motoru.
* **`styled-components`**: CSS kodlarını doğrudan JavaScript bileşenleri içinde yazabilmek (CSS-in-JS) ve dinamik animasyonlar üretebilmek için eklenen stil kütüphanesi.

---

## 📁 Uygulanan Öğrenme Egzersizleri

### 💡 Egzersiz 1: Bileşen Parçalama ve Prop Aktarımı (`src/TodoPage.jsx`)
* **Uygulanan Prompt:** *"TodoItem komponentini oluşturun ve text prop'unu kullanarak her bir todo öğesini liste."*
* **Kazanılan Refleks:** Monolitik yapıları modüler alt bileşenlere bölme, proplar yardımıyla veri akışını sağlama...

### 📄 Egzersiz 2: React Router ile Dinamik Parametre Yakalama (`src/BlogPage.jsx`)
* **Uygulanan Prompt:** *"BlogPost komponentinde useParams kullanarak id parametresini yakala ve bir yazı başlığı göster."*
* **Kazanılan Refleks:** `react-router-dom` entegrasyonu ile sayfa yenilenmeden yönlendirme yapma ve URL üzerindeki dinamik değişkenleri `useParams()` ile yakalama.

### 🎨 Egzersiz 3: Styled-Components ile Stil Yönetimi (`src/ButtonPage.jsx`)
* **Uygulanan Prompt:** *"Bu CSS'i React'te styled-components ile yeniden yaz."*
* **Kazanılan Refleks:** Geleneksel CSS dosyalarını modern `styled-components` mimarisine dönüştürme, JavaScript dosyası içinde lokal ve güvenli (scoped) stiller yazma, `&:hover` gibi pseudo-class'ları yönetme ve CSS transition animasyonlarını React bileşenlerine entegre etme.

---

## 🛠️ Kurulum ve Çalıştırma Adımları

Çalışmayı yerel bilgisayarınızda ayağa kaldırmak için şu adımları izlemelisiniz:

### 1. Doğru Dizin Yapısına Geçiş
```bash
cd react-examples
cd todo-app
