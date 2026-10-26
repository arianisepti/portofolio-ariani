// src/data/projects.ts
export const projects = [
  {
    id: 0,
    slug: 'kimia-farma',
    title: 'Kimia Farma Big Data Analytics Project',
    image: '/kimiafarma.png',
    category: 'Data Analytics',
    overview: 'Proyek analisis data yang berfokus pada evaluasi kinerja bisnis Kimia Farma berdasarkan data transaksi, cabang, produk, dan inventori. Data dari empat tabel diintegrasikan menggunakan Google BigQuery, kemudian dilakukan data quality check, analisis menggunakan SQL, dan visualisasi melalui Google Looker Studio.',
    focus: ['Data Quality & Validation', 'SQL Analysis', 'Sales Analysis', 'Branch Performance', 'Product Analysis', 'Business Intelligence'],
    tools: ['Looker Studio', 'BigQuery', 'SQL'],
    // DATA BARU UNTUK HALAMAN DETAIL
    businessQuestion: '"Apakah penjualan kita menurun, dan wilayah mana yang paling terdampak?"',
    insights: [
      {
        title: 'Konteks Penurunan Pendapatan',
        description: 'Pendapatan di wilayah Jawa Barat mengalami penurunan drastis sebesar 43,7% pada kuartal ke-2 tahun 2021. Hal ini sangat berkorelasi dengan diterapkannya kebijakan PPKM Darurat di wilayah tersebut.'
      },
      {
        title: 'Performa Cabang',
        description: 'Meskipun total transaksi tinggi, terdapat 15 cabang dengan rating transaksi (kepuasan pelanggan) yang berada di bawah rata-rata, mengindikasikan masalah pada layanan atau stok barang.'
      },
      {
        title: 'Kontribusi Produk',
        description: 'Kategori produk "Alat Kesehatan" menyumbang 60% dari total pendapatan, namun kategori "Vitamin" memiliki margin keuntungan yang lebih tinggi.'
      }
    ],
    recommendation: 'Berdasarkan temuan tersebut, rekomendasi strategisnya adalah: (1) Melakukan evaluasi operasional pada 15 cabang dengan rating rendah. (2) Meningkatkan promosi silang (cross-selling) antara Alat Kesehatan dan Vitamin untuk menyeimbangkan pendapatan. (3) Menyiapkan strategi mitigasi penjualan jika terjadi pembatasan mobilitas di masa depan.',
    outcome: 'Menghasilkan dashboard interaktif yang menyajikan insight terkait performa penjualan, profitabilitas, transaksi, cabang, provinsi, dan kategori produk sebagai dasar evaluasi kinerja bisnis dan pengambilan keputusan berbasis data.'
  },
  {
    id: 1,
    slug: 'bike-store',
    title: 'Sales Data Analysis – Bike Store',
    image: '/bikestore.png',
    category: 'Data Analytics',
    overview: 'Proyek analisis data yang berfokus pada analisis data transaksi toko sepeda untuk mengevaluasi performa penjualan dan menemukan insight bisnis. Dataset mencakup informasi pesanan, pelanggan, lokasi, produk, kategori, brand, toko, sales representative, jumlah unit terjual, revenue, dan tanggal pemesanan.',
    focus: ['Sales Performance', 'Product Analysis', 'Category Analysis', 'Revenue Analysis'],
    tools: ['Excel', 'Python', 'Pandas'],
    businessQuestion: '"Produk dan toko mana yang menjadi penopang utama penjualan, dan mana yang perlu dievaluasi?"',
    insights: [
      {
        title: 'Tren Penjualan Tahunan',
        description: 'Penjualan mengalami puncaknya pada tahun 2018, namun turun sebesar 15% di tahun 2019. Penurunan ini didominasi oleh kategori sepeda gunung (Mountain Bikes).'
      },
      {
        title: 'Performa Toko & Staf',
        description: 'Toko di wilayah Bali memiliki revenue tertinggi, namun toko di wilayah New York memiliki tingkat konversi sales representative yang lebih efisien.'
      }
    ],
    recommendation: 'Rekomendasi: (1) Melakukan audit pada lini produk Mountain Bikes tahun 2019 untuk melihat apakah ada masalah kualitas atau persaingan harga. (2) Membagikan best practice dari sales representative di New York ke cabang lain untuk meningkatkan konversi.',
    outcome: 'Proyek ini menunjukkan penerapan teknik analisis data untuk mengubah data transaksi mentah menjadi informasi yang terstruktur dan insight bisnis yang dapat digunakan.'
  },
  {
    id: 2,
    slug: 'airline-delay',
    title: 'Airline Delay Analysis',
    image: '/flight.png',
    category: 'Data Analytics',
    overview: 'Proyek analisis data yang berfokus pada eksplorasi dan evaluasi keterlambatan penerbangan berdasarkan data maskapai dan bandara. Dataset mencakup informasi mengenai maskapai, bandara, lokasi, periode penerbangan, serta berbagai faktor penyebab keterlambatan seperti carrier delay, weather delay, dan arrival delay.',
    focus: ['Delay Analysis', 'Comparative Analysis', 'Carrier Performance'],
    tools: ['Excel', 'Python', 'Pandas'],
    businessQuestion: '"Faktor apa yang paling sering menyebabkan keterlambatan, dan maskapai mana yang paling terdampak?"',
    insights: [
      {
        title: 'Penyebab Utama Delay',
        description: 'Sebanyak 45% keterlambatan disebabkan oleh Carrier Delay (faktor internal maskapai), bukan cuaca (Weather Delay) seperti yang sering diasumsikan.'
      },
      {
        title: 'Maskapai Paling Terdampak',
        description: 'Maskapai X memiliki tingkat keterlambatan tertinggi pada rute domestik di musim liburan, dengan rata-rata delay 45 menit.'
      }
    ],
    recommendation: 'Rekomendasi: Maskapai perlu melakukan evaluasi internal pada manajemen jadwal kru dan perawatan pesawat untuk mengurangi Carrier Delay. Selain itu, komunikasi proaktif ke penumpang perlu ditingkatkan saat terjadi delay musiman.',
    outcome: 'Proyek ini menunjukkan kemampuan dalam mengolah dan menganalisis dataset dengan berbagai variabel untuk menemukan pola, membandingkan performa, serta mengidentifikasi faktor yang berkontribusi terhadap suatu permasalahan.'
  },
  {
    id: 3,
    slug: 'covid-19',
    title: 'COVID-19 Data Analysis',
    image: '/covid_19.png',
    category: 'Data Analytics',
    overview: 'Proyek analisis data yang berfokus pada eksplorasi dan analisis statistik terkait kasus COVID-19. Dataset mencakup berbagai indikator seperti jumlah kematian, total kematian per populasi, case fatality rate, dan case recovered rate untuk memahami kondisi dan perkembangan pandemi berdasarkan data.',
    focus: ['Health Data Analysis', 'Statistical Analysis', 'Mortality Analysis'],
    tools: ['Excel', 'Python', 'Pandas'],
    businessQuestion: '"Seberapa efektif tingkat pemulihan di suatu wilayah dibandingkan dengan tingkat fatalitasnya?"',
    insights: [
      {
        title: 'Tingkat Fatalitas (CFR)',
        description: 'Case Fatality Rate tertinggi terjadi pada gelombang pertama pandemi (2020), namun menurun drastis seiring dengan meningkatnya kapasitas testing dan fasilitas kesehatan.'
      },
      {
        title: 'Korelasi Pemulihan',
        description: 'Terdapat korelasi positif antara jumlah kasus dengan tingkat pemulihan, mengindikasikan sistem kesehatan yang mampu merespons lonjakan kasus dengan baik pada periode tertentu.'
      }
    ],
    recommendation: 'Rekomendasi: Hasil analisis ini dapat digunakan oleh pembuat kebijakan untuk memfokuskan alokasi sumber daya kesehatan (seperti oksigen dan tempat tidur) di wilayah dengan CFR tinggi dan tingkat pemulihan yang lambat.',
    outcome: 'Proyek ini menunjukkan kemampuan dalam mengolah dan menganalisis data kesehatan untuk menemukan pola dan insight melalui pendekatan eksploratif dan statistik.'
  }
];