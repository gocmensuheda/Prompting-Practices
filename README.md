# 🗒️ React & AI Prompting Öğrenme ve Pratik Günlüğü

Bu çalışma, bir son kullanıcı projesi değil; React bileşen mimarisi, prop aktarımı, state yönetimi, dinamik yönlendirme (React Router), modern stil yönetimi ve API veri yönetimi konularını pekiştirmek amacıyla oluşturulmuş **bireysel bir öğrenme ve pratik laboratuvarıdır**. 

Süreç boyunca karşılaşılan teknik problemler, hata ayıklama (debugging) deneyimleri ve Yapay Zeka (AI) prompt mühendisliği teknikleri bu günlük üzerinde dökümante edilmiştir.

> 🔄 **GELİŞİM DURUMU: AKTİF ÖĞRENME DEVAM EDİYOR**
> Bu laboratuvar, yeni React konuları ve AI prompt egzersizleri ile düzenli olarak güncellenmekte ve genişletilmektedir.

---

## 📦 Kullanılan Harici Bağımlılıklar (Dependencies)

Egzersizlerin kararlı ve gerçeğe uygun çalışabilmesi için projeye dahil edilen temel kütüphaneler şunlardır:
* **`react` & `react-dom`**: Çekirdek React kütüphaneleri ve DOM yönetim araçları.
* **`react-router-dom`**: Dinamik sayfa yönlendirmelerini ve `useParams()` kancasını kullanabilmek için eklenen yönlendirme motoru.
* **`styled-components`**: CSS kodlarını doğrudan JavaScript bileşenleri içinde yazabilmek (CSS-in-JS) için eklenen stil kütüphanesi.
* *(Not: Egzersiz 4'te yerleşik `fetch` mekanizması tercih edildiği için veri çekme işlemi adına harici bir kütüphane yüklenmesine gerek duyulmamıştır.)*

---

## 📁 Uygulanan Öğrenme Egzersizleri

### 💡 Egzersiz 1: Bileşen Parçalama ve Prop Aktarımı (`src/TodoPage.jsx`)
* **Uygulanan Prompt:** *"TodoItem komponentini oluşturun ve text prop'unu kullanarak her bir todo öğesini liste."*
* **Kazanılan Refleks:** Monolitik yapıları modüler alt bileşenlere bölme ve proplarla veri akışı sağlama.

### 📄 Egzersiz 2: React Router ile Dinamik Parametre Yakalama (`src/BlogPage.jsx`)
* **Uygulanan Prompt:** *"BlogPost komponentinde useParams kullanarak id parametresini yakala ve bir yazı başlığı göster."*
* **Kazanılan Refleks:** Sayfa yenilenmeden dinamik yönlendirme yapma ve URL üzerindeki `:id` değişkenlerini `useParams()` ile yakalama.

### 🎨 Egzersiz 3: Styled-Components ile Stil Yönetimi (`src/ButtonPage.jsx`)
* **Uygulanan Prompt:** *"Bu CSS'i React'te styled-components ile yeniden yaz."*
* **Kazanılan Refleks:** Geleneksel CSS'i modern `styled-components` mimarisine dönüştürme ve lokalize edilmiş güvenli animasyonlar üretme.

### 🌐 Egzersiz 4: Fetch API ile Asenkron Veri Çekme (`src/UserPage.jsx`)
* **Uygulanan Prompt:** *"Bu axios.get çağrısını fetch ile yeniden yaz ve aynı sonucu al."*
* **Kazanılan Refleks:** Harici kütüphane (Axios) bağımlılığı olmadan, tarayıcının yerleşik `Fetch API` yapısını asenkron olarak yönetme. Gelen veriyi `.json()` ile işleme, `useEffect` yaşam döngüsü içinde state'e güvenli bir şekilde aktarma ve arayüzde dinamik olarak haritalama (`map`).

---

## 🛠️ Kurulum ve Çalıştırma Adımları

Çalışmayı yerel bilgisayarınızda ayağa kaldırmak için şu adımları izlemelisiniz:

### 1. Doğru Dizin Yapısına Geçiş
```bash
cd react-examples
cd todo-app
