/* ============================================================
   config.js — SADECE BU DOSYAYI DÜZENLEYİN
   All your personal content goes here. Do NOT touch s.js.
   ============================================================ */

// ── SLIDESHOW IMAGES ──────────────────────────────────────
// images/ klasörüne dosya atın ve yolunu buraya ekleyin.
const SLIDES = [
    'images/harvard.png',
    'images/MIT.png',
    'images/forza.webp',
    'images/forza.webp',
];

// ── CAREER TIMELINE ───────────────────────────────────────
// Her satır bir kariyer çizgisi.
// start  : başlangıç yılı (sayı, ör. 2021)
// end    : bitiş yılı (sayı, ör. 2023) veya null → devam ediyor
// label  : kısa başlık
// desc   : (isteğe bağlı) tıklayınca açılan kısa açıklama
// color  : (isteğe bağlı) renk kodu — boş bırakırsanız otomatik seçilir
const TIMELINE = [
    {
        start: 2024,
        end: null,
        label: 'ITU — Bilgisayar Mühendisliği',
        desc: 'İstanbul Teknik Üniversitesi\'nde lisans eğitimi (devam ediyor).',
    },
    {
        start: 2024.7,
        end: 2024.9,
        label: 'Staj — INNOVA// Web Developer',
        desc: 'İzleme panosu projesi için Vue.js +Java (Spring Boot) stajı.',
    },
    {
        start: 2025.4,
        end: 2025.6,
        label: 'Staj — Match & Design// Algorithm Developer',
        desc: 'Eating algorithm ile adil eczane nöbet dağılımı çizelgesi oluşturma.',
    },
    {
        start: 2025.6,
        end: 2025.8,
        label: 'Staj — Securify// Security Designer',
        desc: 'DID, Verifiable Credentials alanında tasarım ve geliştirme.',
    },

];

// ── PROJECTS ─────────────────────────────────────────────
// icons: 'c' 'cpp' 'html' 'css' 'js' 'react' 'vue'
//        'java' 'python' 'docker'
// İstediğiniz ikonları her proje için seçin.
const PROJECTS = [
    {
        title: 'Data Structures',
        url: 'https://github.com/WhoIsOnatBudak/Data_Stracture_test',
        icons: ['c', 'cpp'],
    },
    {
        title: 'Algorithm Practice',
        url: 'https://github.com/WhoIsOnatBudak/algorithm',
        icons: ['c', 'cpp'],
    },
    {
        title: 'Copyright Protection',
        url: 'https://github.com/WhoIsOnatBudak/WaterMarking-with-SVD',
        icons: ['python'],
    },
    {
        title: 'This Web Page',
        url: 'https://github.com/WhoIsOnatBudak/My-Web-Page',
        icons: ['html', 'css', 'js'],
    },
    {
        title: 'Etkinlink Frontend',
        url: 'https://github.com/EtkinLink/etkinlink-frontend',
        icons: ['react', 'css', 'js'],
    },
    {
        title: 'Etkinlink Backend',
        url: 'https://github.com/EtkinLink/etkinlink-backend',
        icons: ['python', 'docker', 'flask', 'mysql'],
    },
    {
        title: 'Computer Comunication Simulation',
        url: 'https://github.com/WhoIsOnatBudak/CompCom',
        icons: ['react', 'css', 'js'],
    },

];
