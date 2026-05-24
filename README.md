# 🗒️ React & AI Prompting Öğrenme ve Pratik Günlüğü

Bu çalışma, bir son kullanıcı projesi değil; React bileşen mimarisi, prop aktarımı, state yönetimi, dinamik yönlendirme (React Router), modern stil yönetimi, API entegrasyonu ve performans optimizasyonu konularını pekiştirmek amacıyla oluşturulmuş **bireysel bir öğrenme ve pratik laboratuvarıdır**. 

Süreç boyunca karşılaşılan teknik problemler, terminal tıkanıklıkları, hata ayıklama (debugging) deneyimleri ve Yapay Zeka (AI) prompt mühendisliği teknikleri bu günlük üzerinde adım adım dökümante edilmiştir.

> 🔄 **GELİŞİM DURUMU: AKTİF ÖĞRENME DEVAM EDİYOR**
> Bu laboratuvar, yeni React konuları ve AI prompt egzersizleri ile düzenli olarak güncellenmekte ve genişletilmektedir.

---

## 📦 Kullanılan Harici Bağımlılıklar (Dependencies)

Egzersizlerin kararlı, modüler ve gerçeğe uygun çalışabilmesi için projeye dahil edilen temel kütüphaneler şunlardır:
* **`react` & `react-dom`**: Çekirdek React kütüphaneleri, state yönetim araçları ve `React.memo` gibi optimizasyon mekanizmaları.
* **`react-router-dom`**: Dinamik sayfa yönlendirmelerini, URL yönetimini ve `useParams()` kancasını kullanabilmek için eklenen yönlendirme motoru.
* **`styled-components`**: CSS kodlarını doğrudan JavaScript bileşenleri içinde yazabilmek (CSS-in-JS) ve bağımsız animasyonlar üretebilmek için eklenen stil kütüphanesi.

---

## 📁 Uygulanan Öğrenme Egzersizleri

### 💡 Egzersiz 1: Bileşen Parçalama ve Prop Aktarımı (`src/TodoPage.jsx`)
* **Uygulanan Prompt:** *"TodoItem komponentini oluşturun ve text prop'unu kullanarak her bir todo öğesini liste."*
* **Kazanılan Refleks:** Monolitik yapıları modüler alt bileşenlere (component) bölme, proplar yardımıyla yukarıdan aşağıya veri akışını sağlama ve `map()` fonksiyonuyla dinamik listeler üretme.

### 📄 Egzersiz 2: React Router ile Dinamik Parametre Yakalama (`src/BlogPage.jsx`)
* **Uygulanan Prompt:** *"BlogPost komponentinde useParams kullanarak id parametresini yakala ve bir yazı başlığı göster."*
* **Kazanılan Refleks:** `react-router-dom` kütüphanesini projeye entegre ederek sayfa yenilenmeden yönlendirme yapma. URL üzerindeki dinamik `:id` parametresini `useParams()` kancası (hook) ile yakalama ve bileşen içinde işleme.

### 🎨 Egzersiz 3: Styled-Components ile Stil Yönetimi (`src/ButtonPage.jsx`)
* **Uygulanan Prompt:** *"Bu CSS'i React'te styled-components ile yeniden yaz."*
* **Kazanılan Refleks:** Geleneksel CSS dosyalarını modern `styled-components` mimarisine dönüştürme, JavaScript dosyası içinde lokal ve güvenli (scoped) stiller yazma, `&:hover` gibi pseudo-class'ları yönetme ve CSS transition animasyonlarını React bileşenlerine entegre etme.

### 🌐 Egzersiz 4: Fetch API ile Asenkron Veri Çekme (`src/UserPage.jsx`)
* **Uygulanan Prompt:** *"Bu axios.get çağrısını fetch ile yeniden yaz ve aynı sonucu al."*
* **Kazanılan Refleks:** Harici kütüphane (Axios) bağımlılığı olmadan, tarayıcının yerleşik `Fetch API` yapısını asenkron olarak yönetme. Gelen veriyi `.json()` ile iki aşamalı işleme, `useEffect` yaşam döngüsü içinde state'e güvenli bir şekilde aktarma ve arayüzde dinamik olarak haritalama.

### ⚡ Egzersiz 5: React.memo ile Performans Optimizasyonu (`src/MemoPage.jsx`)
* **Uygulanan Prompt:** *"Memo kullanılmadan önce ve sonra kodun performans farklarını açıkla."*
* **Kazanılan Refleks:** React'in sanal DOM (Virtual DOM) üzerindeki yeniden çizim (re-render) algoritmasını anlama. Bir üst bileşenin state'i değiştiğinde, alt bileşenlerin propları değişmediği sürece gereksiz yere yeniden çizilmesini `React.memo` (shallow comparison) ile engelleme ve tarayıcı belleğini optimize etme.

---

## 🛠️ Kurulum, Çalıştırma ve Hata Ayıklama (Debugging) Notları

Bu pratik sürecinde gerçek dünya senaryolarında sıkça karşılaşılan klasör yolu ve bağımlılık hataları çözümlenmiştir. Çalışmayı yerel bilgisayarınızda sorunsuz ayağa kaldırmak için şu adımları izlemelisiniz:

### 1. Doğru Dizin Yapısına Geçiş (Klasör Çözümlemesi)
Terminal ilk açıldığında doğrudan ana dizinde bulunmayabilir. Projenin kök dizinine ulaşmak için terminalde şu komutlar sırasıyla çalıştırılmalıdır:
```bash
cd react-examples
cd todo-app
