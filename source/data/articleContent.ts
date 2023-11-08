import * as articleImage from '../src/utils/getArticleImage'

const articleContent = [
    {
        image: articleImage.one,
        heading: "Jangan Mudah Termakan Hoax, Saring Sebelum Sharing",
        paragraph: "Perkembangan teknologi dan informasi yang semakin pesat selain membawa dampak positif, ternyata juga membawa dampak negatif. Salah satu dampak negatif yang cukup meresahkan adalah munculnya informasi palsu atau lebih popular dikenal dengan istilah “hoax”.",
        url : "https://www.djkn.kemenkeu.go.id/artikel/baca/13206/Jangan-Mudah-Termakan-Hoax-Saring-Sebelum-Sharing.html#:~:text=Selain%20itu%2C%20hoax%20juga%20mengganggu,masyarakat%20ke%20arah%20pemahaman%20hoax"
    },
    {
        image: articleImage.two,
        heading: "Ahli Komentari Asap Rokok dan Penularan Corona via Udara",
        paragraph: "Jakarta, CNN Indonesia. Ahli epidemiologi Universitas Airlangga Surbaya, Windhu Purnomo menegaskan asap rokok tidak menyebarkan virus corona SARS-CoV-2 (Covid-19). Malah kata Windhu, seorang perokok yang terinfeksi Covid-19 risiko kematiannya lebih tinggi dibanding yang bukan perekok.",
        url : "https://www.cnnindonesia.com/teknologi/20200710174536-199-523353/ahli-komentari-asap-rokok-dan-penularan-corona-via-udara"
    },
    {
        image: articleImage.three,
        heading: "Pengertian Hoax dan Cara Menangkalnya",
        paragraph: "Hoax merupakan informasi, kabar, berita yang palsu atau bohong. Pada Kamus Besar Bahasa Indonesia (KBBI) hoax diartikan sebagai berita yang bohong. Hoax yaitu informasi yang dibuat-buat atau direkayasa untuk menutupi informasi yang sebenarnya. Dengan kata lain, hoax diartikan sebagai upaya pemutarbalikan fakta menggunakan informasi yang seolah-olah meyakinkan akan tetapi tidak dapat diverifikasi kebenarannya.",
        url : "https://diskominfo.badungkab.go.id/artikel/42985-pengertian-hoax-dan-cara-menangkalnya#:~:text=Hoax%20yaitu%20informasi%20yang%20dibuat,tetapi%20tidak%20dapat%20diverifikasi%20kebenarannya"
    },
    {
        image: articleImage.four,
        heading: "Walikota: Swab Tes Bagi Siswa tak Akan Dilakukan",
        paragraph: "Liputan6.com, Jakarta- Cek Fakta Liputan6.com mendapati klaim Menteri Kesehatan Terawan Agus Putranto mundur karena Najwa Shihab. Klaim Menkes Terawan mundur karena Najwa diungggah akun Facebook Noufal, pada 2 Oktober 2020.",
        url : "https://www.liputan6.com/cek-fakta/read/4372570/cek-fakta-menkes-terawan-mundur-karena-najwa-shihab-simak-faktanya"
    },
    {
        image: articleImage.five,
        heading: "[HOAKS] PT Pertamina (Persero) Akan Menghapus BBM Jenis Premium dan Pertalite",
        paragraph: "Beredar sebuah pemberitaan yang menyebutkan PT Pertamina (Persero) akan menghapus atau meniadakan jenis BBM Premium dan Pertalite karena dinilai tidak ramah lingkungan.",
        url : "https://mediacenter.temanggungkab.go.id/berita/detail/hoaks-pt-pertamina-persero-akan-menghapus-bbm-jenis-premium-dan-pertalite"
    },
    {
        image: articleImage.six,
        heading: "Mabes Polri: Informasi Soal Kode dan Sandi Pelaku Kejahatan Tidak Benar",
        paragraph: "Jakarta -  - Divisi Humas Mabes Polri menyatakan, informasi pesan berantai yang menyebutkan soal kode dan sandi pelaku kejahatan, tidak benar. Meski demikian, masyarakat diimbau untuk tetap waspada.",
        url : "https://news.detik.com/berita/d-3200951 mabes-polri-informasi-soal-kode-dan-sandi-pelaku-kejahatan-tidak-benar"
    },
    {
        image: articleImage.seven,
        heading: "3 Langkah Penting untuk Memerangi Hoax",
        paragraph: "Jakarta - Berita palsu, atau hoax, yang kerap beredar luas lewat media sosial menjadi keprihatinan bersama. Untuk melawan hoax ini, menurut pengamat media sosial Nukman Luthfie, perlu strategi jangka pendek dan jangka panjang.",
        url : "https://www.kominfo.go.id/content/detail/8998/3-langkah-penting-untuk-memerangi-hoax/0/sorotan_media#:~:text=Selain%20itu%2C%20perlu%20ada%20edukasi,tautan%20dan%20foto%20gambar%20tersebut"
    },
    {
        image: articleImage.eight,
        heading: "BKD Bantah Anies Tambah Penghasilan Lewat Keputusan Gubernur",
        paragraph: "Liputan6.com, Jakarta - Kepala Badan Kepegawaian Daerah (BKD) DKI Jakarta, Chaidir membantah bahwa Gubernur DKI Jakarta, Anies Baswedan menambah penghasilan lewat Keputusan Gubernur Nomor 879 Tahun 2019.",
        url : "https://www.liputan6.com/news/read/3992859/bkd-bantah-anies-tambah-penghasilan-lewat-keputusan-gubernur"
    },
    {
        image: articleImage.nine,
        heading: "Ini Cara Mengatasi Berita “Hoax” di Dunia Maya",
        paragraph: "KENDARI - Akhir-akhir ini dunia maya banyak dimunculkan informasi dan berita palsu atau lebih dikenal dengan istilah “hoax” oleh sejumlah oknum yang tidak bertanggungjawab. Jika tidak ada kehati-hatian, netizen pun dengan mudah termakan tipuan hoax tersebut bahkan ikut menyebarkan informasi palsu itu, tentunya akan sangat merugikan bagi pihak korban fitnah. Lalu bagaimana caranya agar tak terhasut?",
        url : "https://www.kominfo.go.id/content/detail/8949/ini-cara-mengatasi-berita-hoax-di-dunia-maya/0/sorotan_media"
    },
    {
        image: articleImage.ten,
        heading: "Walikota: Swab Tes Bagi Siswa tak Akan Dilakukan",
        paragraph: "AMBON, Siwalimanews - Kendati pernyataan Menteri Pendidikan dan Kebudayaan Nadiem Makarim bahwa belajar tatap muka resmi dilakukan Januari 2021 dan anak wajib swab tes sebelum sekolah.",
        url : "https://siwalimanews.com/walikota-swab-tes-bagi-siswa-tak-akan-dilakukan/"
    },
    {
        image: articleImage.eleven,
        heading: "Bahaya Hoax Bagi Kesehatan Mental",
        paragraph: "Teknologi kini menjadi bagian penting dalam kehidupan sehari hari. Teknologi menjadi elemen kunci untuk kelangsungan hidup manusia karena bisa membuat hidup lebih baik dan mudah. Terlebih saat pandemi kehadiran teknologi membantu kita dalam berkegiatan dimana perkembangan teknologi dalam berbagai bidang kehidupan sudah sangat pesat.",
        url : "https://lebakkab.go.id/2022/10/14/bahaya-hoax-bagi-kesehatan-mental/#:~:text=Dalam%20sebuah%20studi%20di%20University,%2C%20menimbulkan%20kecemasan%2C%20sampai%20kekerasan"
    },
    {
        image: articleImage.twelve,
        heading: "BMKG Tegaskan Tak Ada Zona Megathrust di Selat Makassar",
        paragraph: "Jakarta - Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) meluruskan informasi yang beredar bahwa di Selat Makassar terdapat zona megathrust yang mampu memicu gempa dahsyat. BMKG menegaskan informasi itu tidak benar.",
        url : "https://news.detik.com/berita/d-4855146/bmkg-tegaskan-tak-ada-zona-megathrust-di-selat-makassar"
    },
    {
        image: articleImage.thirteen,
        heading: "Alasan Banyak Orang Cenderung Percaya dengan Hoaks",
        paragraph: "Munculnya berita bohong atau hoaks tdapat menimbulkan masalah pada hubungan sosial bahkan merugikan banyak orang. Sayangnya, sebagian besar orang, nyatanya, lebih suka dengan berita hoaks dibandingkan dengan fakta sebenarnya.",
        url : "https://www.halodoc.com/artikel/alasan-banyak-orang-cenderung-percaya-dengan-hoaks"
    },
    {
        image: articleImage.fourteen,
        heading: "Waspada Hoax",
        paragraph: "Secara bahasa, kata “hoax” adalah suatu cerita bohong, informasi palsu, yang bertujuan untuk mempermainkan, memperdaya, dan menipu. Hoax bisa digunakan untuk tujuan lelucon, tetapi hoax juga sering dipakai untuk tujuan yang serius.",
        url : "https://diskominfo.badungkab.go.id/artikel/46792-waspada-hoax"
    },
    {
        image: articleImage.fifteen,
        heading: "Oklin Fia Disebut Bakal Jadi Duta MUI, Ini Bantahan Menohok Kiai Cholil Nafis",
        paragraph: "Liputan6.com, Jakarta - Kabar Oklin Fia akan jadi duta MUI mengguncang dunia maya. Banyak warganet yang bertanya-tanya, kenapa bisa seseorang yang tak mencerminkan akhlaq yang baik bisa menjadi duta majelis ulama.",
        url : "https://www.liputan6.com/islami/read/5389983/oklin-fia-disebut-bakal-jadi-duta-mui-ini-bantahan-menohok-kiai-cholil-nafis?page=2"
    },
]

export default articleContent