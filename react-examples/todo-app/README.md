# 🗒️ React & AI Prompting Öğrenme ve Pratik Günlüğü

Bu çalışma, bir son kullanıcı projesi değil; React bileşen mimarisi, prop aktarımı, state yönetimi ve dinamik yönlendirme (React Router) konularını pekiştirmek amacıyla oluşturulmuş **bireysel bir öğrenme ve pratik laboratuvarıdır**. 

Süreç boyunca karşılaşılan teknik problemler, hata ayıklama (debugging) deneyimleri ve Yapay Zeka (AI) prompt mühendisliği teknikleri bu günlük üzerinde dökümante edilmiştir.

> 🔄 **GELİŞİM DURUMU: AKTİF ÖĞRENME DEVAM EDİYOR**
> Bu laboratuvar, yeni React konuları ve AI prompt egzersizleri ile düzenli olarak güncellenmekte ve genişletilmektedir.

---

## 📦 Kullanılan Harici Bağımlılıklar (Dependencies)

Egzersizlerin kararlı ve gerçeğe uygun çalışabilmesi için projeye dahil edilen temel kütüphaneler şunlardır:
* **`react` & `react-dom`**: Çekirdek React kütüphaneleri ve DOM yönetim araçları.
* **`react-router-dom`**: Egzersiz 2'deki dinamik sayfa yönlendirmelerini, URL yönetimini ve `useParams()` kancasını (hook) kullanabilmek için projeye eklenen yönlendirme motoru.

---

## 📁 Uygulanan Öğrenme Egzersizleri

### 💡 Egzersiz 1: Bileşen Parçalama ve Prop Aktarımı (`src/TodoPage.jsx`)
* **Uygulanan Prompt:** *"TodoItem komponentini oluşturun ve text prop'unu kullanarak her bir todo öğesini liste."*
* **Kazanılan Refleks:** Monolitik yapıları modüler alt bileşenlere (component) bölme, proplar yardımıyla yukarıdan aşağıya veri akışını sağlama ve `map()` fonksiyonuyle dinamik listeler üretme.

### 📄 Egzersiz 2: React Router ve Dinamik Parametre Yakalama (`src/BlogPage.jsx`)
* **Uygulanan Prompt:** *"BlogPost komponentinde useParams kullanarak id parametresini yakala ve bir yazı başlığı göster."*
* **Kazanılan Refleks:** `react-router-dom` kütüphanesini projeye entegre ederek sayfa yenilenmeden yönlendirme yapma. URL üzerindeki dinamik `:id` parametresini `useParams()` kancası (hook) ile yakalama ve bileşen içinde işleme.

---

## 🛠️ Son Aşama: Hata Ayıklama (Debugging) ve Kurulum Notları

Bu pratik sürecinde gerçek dünya senaryolarında sıkça karşılaşılan klasör yolu ve bağımlılık hataları çözümlenmiştir. Çalışmayı yerel bilgisayarınızda ayağa kaldırmak için şu adımları izlemelisiniz:

### 1. Doğru Dizin Yapısına Geçiş (Klasör Çözümlemesi)
Terminal ilk açıldığında doğrudan ana dizinde bulunmayabilir. Projenin kök dizinine ulaşmak için terminalde şu komutlar sırasıyla çalıştırılmalıdır:
```bash
cd react-examples
cd todo-app
