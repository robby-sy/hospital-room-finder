let DB_rumahSakit = [
  {
    Nama: "RSUD Kota Bengkulu",
    Lokasi: "Padang Jati",
    Kamar: [
      {
        Nama: "Super Suite",
        Harga: 5000000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Kasur Penjaga",
          "Internet",
          "Taman",
        ],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Suite",
        Harga: 3500000,
        BPJS: false,
        Fasilitas: ["AC", "TV", "Kamar Mandi", "Sofa", "Taman", "Internet"],
        Kapasitas: 2,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
      {
        Nama: "Reguler",
        Harga: 1000000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi", "Internet"],
        Kapasitas: 3,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      {
        Nama: "Bersama",
        Harga: 500000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Biru",
        Harga: 145000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 8,
        umur: ["Dewasa"],
        JK: ["Perempuan"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Merah",
        Harga: 145000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 8,
        umur: ["Dewasa"],
        JK: ["Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Hijau",
        Harga: 145000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Remaja"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0, 0, 0, 0, 0, 0]],
      },
      {
        Nama: "Kuning",
        Harga: 145000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0, 0, 0, 0, 0, 0]],
      },
    ],
  },
  {
    Nama: "RSUD Dr. M. Yunus",
    Lokasi: "Sido Mulyo",
    Kamar: [
      {
        Nama: "VVIP",
        Harga: 8000000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Kasur Penjaga",
          "Internet",
          "Taman",
          "Kulkas",
          "Kichen Kabinet",
        ],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "VIP",
        Harga: 4500000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Taman",
          "Internet",
          "Kichen Kabinet",
        ],
        Kapasitas: 2,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
      {
        Nama: "Star",
        Harga: 1000000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi", "Internet"],
        Kapasitas: 3,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      {
        Nama: "Reguler",
        Harga: 500000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 3,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      {
        Nama: "Mawar",
        Harga: 190000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi", "Kipas Angin"],
        Kapasitas: 6,
        umur: ["Dewasa"],
        JK: ["Perempuan"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Melati",
        Harga: 190000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi", "Kipas Angin"],
        Kapasitas: 6,
        umur: ["Dewasa"],
        JK: ["Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Bugenvil",
        Harga: 190000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi", "Kipas Angin"],
        Kapasitas: 6,
        umur: ["Remaja"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Anak",
        Harga: 190000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi", "Kipas Angin"],
        Kapasitas: 6,
        umur: ["Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
    ],
  },
  {
    Nama: "RS Bengkulu Tingkat IV",
    Lokasi: "Timur Indah",
    Kamar: [
      {
        Nama: "Elite",
        Harga: 2000000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Kasur Penjaga",
          "Kichen Kabinet",
        ],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Common",
        Harga: 1500000,
        BPJS: false,
        Fasilitas: ["AC", "TV", "Kamar Mandi", "Sofa", "Kasur Penjaga"],
        Kapasitas: 2,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
      {
        Nama: "Bersama",
        Harga: 900000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 2,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
      {
        Nama: "Rakyat",
        Harga: 500000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 3,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      {
        Nama: "Merpati",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Dewasa"],
        JK: ["Perempuan"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Perkutut",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Dewasa"],
        JK: ["Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Pipit",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Remaja"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Anak",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
    ],
  },
  {
    Nama: "RS Bhayangkara Jitra",
    Lokasi: "Jitra",
    Kamar: [
      {
        Nama: "Exclusive",
        Harga: 7000000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Kasur Penjaga",
          "Kichen Kabinet",
          "Kulkas",
          "Taman",
        ],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Suite",
        Harga: 5000000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Kasur Penjaga",
          "Taman",
        ],
        Kapasitas: 2,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
      {
        Nama: "Elite",
        Harga: 2000000,
        BPJS: false,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Reguler",
        Harga: 500000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 3,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      {
        Nama: "Rakyat1",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Dewasa"],
        JK: ["Perempuan"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Rakyat2",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Dewasa"],
        JK: ["Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Remaja",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Remaja"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Anak",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
    ],
  },
  {
    Nama: "RS Rafflesia",
    Lokasi: "Padang Jati",
    Kamar: [
      {
        Nama: "President",
        Harga: 8000000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Kasur Penjaga",
          "Kichen Kabinet",
          "Kulkas",
          "Taman",
        ],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Independent",
        Harga: 6000000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Kasur Penjaga",
          "Taman",
        ],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Elite",
        Harga: 1000000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 2,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
      {
        Nama: "Reguler",
        Harga: 500000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 3,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      {
        Nama: "Mangga",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Dewasa"],
        JK: ["Perempuan"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Jeruk",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Dewasa"],
        JK: ["Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Apel",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Remaja"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "Pepaya",
        Harga: 100000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
    ],
  },
  {
    Nama: "RS Soeprapto Bengkulu",
    Lokasi: "Lingkar Barat",
    Kamar: [
      {
        Nama: "Kelas 1",
        Harga: 2000000,
        BPJS: false,
        Fasilitas: ["AC", "TV", "Kamar Mandi", "Sofa", "Kasur Penjaga"],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0]],
      },
      {
        Nama: "Kelas 2",
        Harga: 1000000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi", "Sofa"],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0]],
      },
      {
        Nama: "Kelas 3",
        Harga: 800000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 2,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
      {
        Nama: "Reguler",
        Harga: 500000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 3,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      {
        Nama: "BS1",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 8,
        umur: ["Dewasa"],
        JK: ["Perempuan"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "BS2",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 8,
        umur: ["Dewasa"],
        JK: ["Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "BSR",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Remaja"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
      {
        Nama: "BSA",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 6,
        umur: ["Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ],
      },
    ],
  },
  {
    Nama: "RS Tiara Sela",
    Lokasi: "Anggut Bawah",
    Kamar: [
      {
        Nama: "Gold",
        Harga: 4000000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Kasur Penjaga",
          "Internet",
        ],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Platinum",
        Harga: 1500000,
        BPJS: false,
        Fasilitas: ["AC", "TV", "Kamar Mandi", "Sofa", "Internet"],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Iron",
        Harga: 800000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 2,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
      {
        Nama: "Reguler",
        Harga: 500000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 3,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      {
        Nama: "Family 1",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Dewasa"],
        JK: ["Perempuan"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Family 2",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Dewasa"],
        JK: ["Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Family 3",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Remaja"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Family 4",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
    ],
  },
  {
    Nama: "RS Ummi Bengkulu",
    Lokasi: "Sido Muylo",
    Kamar: [
      {
        Nama: "Gold",
        Harga: 4000000,
        BPJS: false,
        Fasilitas: [
          "AC",
          "TV",
          "Kamar Mandi",
          "Sofa",
          "Kasur Penjaga",
          "Internet",
        ],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Platinum",
        Harga: 1500000,
        BPJS: false,
        Fasilitas: ["AC", "TV", "Kamar Mandi", "Sofa", "Internet"],
        Kapasitas: 1,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [[0], [0], [0], [0], [0], [0], [0], [0], [0]],
      },
      {
        Nama: "Iron",
        Harga: 800000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 2,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      },
      {
        Nama: "Reguler",
        Harga: 500000,
        BPJS: true,
        Fasilitas: ["AC", "TV", "Kamar Mandi"],
        Kapasitas: 3,
        umur: ["Dewasa", "Remaja", "Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      },
      {
        Nama: "Family 1",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Dewasa"],
        JK: ["Perempuan"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Family 2",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Dewasa"],
        JK: ["Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Family 3",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Remaja"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
      {
        Nama: "Family 4",
        Harga: 90000,
        BPJS: true,
        Fasilitas: ["Kamar Mandi"],
        Kapasitas: 4,
        umur: ["Anak"],
        JK: ["Perempuan", "Laki-Laki"],
        Ketersediaan: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
    ],
  },
];

let filterTags = {
  "Rumah Sakit": [],
  Fasilitas: [],
};

let Fasilitas = [
  "AC",
  "TV",
  "Kamar Mandi",
  "Sofa",
  "Kasur Penjaga",
  "Internet",
  "Taman",
  "Kichen Kabinet",
  "Kulkas",
];

function objectExtractor(object) {
  let output = [];
  for (const rumahSakit of object) {
    for (const Kamar of rumahSakit.Kamar) {
      Kamar["Rumah Sakit"] = rumahSakit.Nama;
      output.push(Kamar);
    }
  }
  return output;
}

function filterByHospital(hospital, rooms) {
  let output = [];
  if (hospital.length === 0) {
    return rooms;
  }
  for (let room of rooms) {
    if (hospital.find((Element) => Element === room["Rumah Sakit"])) {
      output.push(room);
    }
  }
  return output;
}

function filterByBPJS(BPJS, rooms) {
  let output = [];
  if (BPJS === undefined) {
    return rooms;
  }
  for (let room of rooms) {
    if (room.BPJS === BPJS) {
      output.push(room);
    }
  }
  return output;
}

function filterByPrice(price, rooms) {
  if (price === undefined) {
    return rooms;
  }
  return rooms.filter((room) => room.Harga < price);
}

function filterByAge(Usia, rooms) {
  let output = [];
  if (Usia === undefined) {
    return rooms;
  }
  for (let room of rooms) {
    let roomAge = room.umur;
    if (roomAge.find((element) => element === Usia)) {
      output.push(room);
    }
  }
  return output;
}

function filterByJk(Jk, rooms) {
  let output = [];
  if (Jk === undefined) {
    return rooms;
  }
  for (let room of rooms) {
    let roomJk = room.JK;
    if (roomJk.find((element) => element === Jk)) {
      output.push(room);
    }
  }
  return output;
}

function filterByFacility(facilities, rooms) {
  let output = [];
  if (facilities.length === 0) {
    return rooms;
  }
  for (const room of rooms) {
    let countFacility = 0;
    for (const facility of facilities) {
      for (const roomFacility of room.Fasilitas) {
        if (facility === roomFacility) {
          countFacility++;
        }
      }
    }
    if (countFacility === facilities.length) {
      output.push(room);
    }
  }
  return output;
}

let HospitalContainer = document.getElementById("listRumahSakit");
let FacilitiesContainer = document.getElementById('listFasilitas');
for (let x of DB_rumahSakit) {
  let id = "check";
  let id2 = myReplace(x.Nama, " ");
  id += id2;
  let list = `
  <li>
  <input type="checkbox" name="${x.Nama}" id="${id}">
  <label for="${id}">${x.Nama}</label>
  </li>`;
  HospitalContainer.innerHTML += list;
}

for (let x of Fasilitas) {
  let id = "check";
  let id2 = myReplace(x, " ");
  id += id2;
  let list = `
  <li>
  <input type="checkbox" name="${x}" id="${id}">
  <label for="${id}">${x}</label>
  </li>`;
  FacilitiesContainer.innerHTML += list;
}


function updateFilter() {
  filterTags["Rumah Sakit"] = [];
  filterTags['Fasilitas']=[];
  filterTags["BPJS"] = undefined;

  let domUsiaStr = document.getElementById('usiaInput').value;
  domUsia = Number(domUsiaStr);
  let usiaCat;
  if(domUsia>17){
    usiaCat = 'Dewasa';
  }else if(domUsia>10){
    usiaCat = 'Remaja';
  }else{
    usiaCat = 'Anak'
  }
  filterTags["Usia"] = usiaCat;

  let domJk = document.getElementById('jkInput').value;
  filterTags['JK'] = domJk;

  for (const rumahSakit of DB_rumahSakit) {
    let rsId = `check${myReplace(rumahSakit.Nama, " ")}`;
    let dom = document.getElementById(rsId).checked;
    if (dom) {
      filterTags["Rumah Sakit"].push(rumahSakit.Nama);
    }
  }

  for (const fasilitas of Fasilitas) {
    let fsId = `check${myReplace(fasilitas, " ")}`;
    let dom = document.getElementById(fsId).checked;
    if (dom) {
      filterTags["Fasilitas"].push(fasilitas);
    }
  }

  let bpjsDom = document.getElementById("bpjsCheck").checked;
  if (document.getElementById("bpjsCheck").checked) {
    filterTags["BPJS"] = true;
  }

  let hargaDomStr = document.getElementById('hargaInput').value;
   filterTags['Harga']= Number(hargaDomStr);
  

  updateFilteredRoom();
}

let buttonRumahSakit = false;
function showItemSideBar(obj, maxHeight, idContainer) {
  let container = document.getElementById(idContainer);
  if (obj.id === "orderButton") {
    updateUserOrder();
  }
  if (buttonRumahSakit) {
    buttonRumahSakit = false;
    obj.style.backgroundColor = "transparent";
    obj.style.color = "rgb(54, 54, 54)";
    container.style.visibility = "hidden";
    container.style.height = "0px";
  } else {
    buttonRumahSakit = true;
    obj.style.backgroundColor = "#AA77FF";
    obj.style.color = "white";
    container.style.visibility = "visible";
    container.style.height = maxHeight;
  }
}

function myReplace(string, char) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      output += "-";
    } else {
      output += string[i];
    }
  }
  return output;
}

function updateUserOrder() {
  let mainBox = document.getElementById("userOrder");
  mainBox.innerHTML = "";
  if (!User["Nama"]) {
    let signBox = document.createElement("div");
    let errorMsg = document.createElement("div");
    let formBox = document.createElement("div");
    signBox.setAttribute("class", "signBox");
    errorMsg.setAttribute("class", "errorMsgUser");
    formBox.setAttribute("class", "formBox");
    let errorTitle = document.createElement("h1");
    let errorSub = document.createElement("p");
    errorTitle.innerHTML = "Kamu Belum Daftar !";
    errorSub.innerHTML = "Ayo Daftar Terlebih Dahulu sebelum Booking Ruangan";
    errorTitle.style = "margin: 0px;text-align: center;";
    errorSub.style.margin = "0px";
    errorMsg.appendChild(errorTitle);
    errorMsg.appendChild(errorSub);
    signBox.appendChild(errorMsg);
    let formNama = document.createElement("input");
    let formUsia = document.createElement("input");
    let formJK = document.createElement("select");
    let selectMan = document.createElement("option");
    let selectWoman = document.createElement("option");
    let button = document.createElement("button");
    formNama.id = "userName";
    formUsia.id = "userAge";
    formJK.id = "userGender";
    formNama.style =
      "width: 250px;height: 40px; text-align: center; color: gray;";
    formUsia.style =
      "width: 250px;height: 40px; text-align: center; color: gray;";
    formJK.style = "width: 250px;height: 40px;";
    formNama.placeholder = "Masukan Nama Anda";
    formUsia.placeholder = "Masukan Usia Anda";
    selectMan.innerHTML = "Laki-Laki";
    selectMan.setAttribute("value", "Laki-Laki");
    selectWoman.innerHTML = "Perempuan";
    selectWoman.setAttribute("value", "Perempuan");
    button.setAttribute("class", "sideBarButton");
    button.setAttribute("onclick", "submitNewUser()");
    button.style =
      "padding: 0px;margin: 0px;justify-content: center;background-color: #aa77ff;";
    button.innerHTML = "Daftar";
    formJK.appendChild(selectMan);
    formJK.appendChild(selectWoman);
    formNama.setAttribute("type", "text");
    formUsia.setAttribute("type", "text");
    formBox.appendChild(formNama);
    formBox.appendChild(formUsia);
    formBox.appendChild(formJK);
    formBox.append(button);
    signBox.appendChild(formBox);
    mainBox.appendChild(signBox);
  } else {
    if (bookedRoom.length === 0) {
      let box = document.getElementById('userOrder');
      box.innerHTML = `Silahkan Pesan Kamar ${User.Nama} <br>
      <button onclick = "hapusUser()">Hapus User</button>`;

    } else {
      let mainBox = document.getElementById("userOrder");
      mainBox.innerHTML = ` 
      <div class="receiptInfo">
      <div class="bookedRoom">
        <div class="gambarKamarOrdered">
          <img src="Resource/${bookedRoom[0].rumahSakit}_${bookedRoom[0].Nama}.jpg" alt="" width="100%" style="border-radius: 10px;">
        </div>
        <div class="infoKamarOrdered">
          <p>Nama : ${User.Nama}</p>
          <p>Rumah Sakit : ${bookedRoom[0].rumahSakit}</p>
          <p>Kamar : ${bookedRoom[0].Nama}</p>
          <p>Harga : ${bookedRoom[0].Harga}</p>
        </div>
        <div class="tombolReceipt">
          <button>Hapus Kamar</button>
          <button>Ubah Kamar</button>
        </div>
      </div>
      <div class="bookedRoom">
        <div class="p">Nama : Roby Syahbani</div>
      </div>
    </div>`;
    }
  }
}

function submitNewUser() {
  let nama = document.getElementById("userName").value;
  let umur = document.getElementById("userAge").value;
  let jk = document.getElementById("userGender").value;
  User.Nama = nama;
  User.Usia = umur;
  User.JK = jk;
  updateUserOrder()
}

function updateFilteredRoom() {
  let allRooms = objectExtractor(DB_rumahSakit);
  let filteredByHospital = filterByHospital(filterTags["Rumah Sakit"],allRooms);
  let filteredByFacility = filterByFacility(filterTags['Fasilitas'],filteredByHospital)
  let filteredByAge = filterByAge(filterTags['Usia'], filteredByFacility)
  let filteredByJk = filterByJk(filterTags['JK'],filteredByAge)
  let filteredByPrice = filterByPrice(filterTags['Harga'],filteredByJk)
  let filteredByBPJS = filterByBPJS(filterTags.BPJS, filteredByPrice);
  let mainBox = document.getElementById("hospitalCard");
  mainBox.innerHTML = "";
  for (const kamar of filteredByBPJS) {
    let fasilitasHTML = "";
    let lainHTML = "";
    for (const fasilitas of kamar.Fasilitas) {
      fasilitasHTML += `<div class="itemColor">${fasilitas}</div>`;
    }
    for (const umur of kamar.umur) {
      lainHTML += `<div class="itemColor">${umur}</div>`;
    }
    for (const jk of kamar.JK) {
      lainHTML += `<div class="itemColor">${jk}</div>`;
    }
    let cardHTML = ` <div class="container">
    <div class="card">
        <div class="gambarKamar">
          <img
            src="Resource/${kamar["Rumah Sakit"]}_${kamar.Nama}.jpg"
            alt="Rumah Sakit"
            width="100%"
            style="border-radius: 10px;"/>
        </div>
        <div class="contFasilitas">
          <div class="fasilitasBox">
            ${fasilitasHTML}
          </div>
          <div class="bpjsBox">
            <div class="itemColor">BPJS</div>
            <div class="itemColor">CASH</div>
          </div>
          <div class="hargaBox">
            <div class="itemColor">Rp.${kamar.Harga}</div>
          </div>
          <div class="lainBox">
            ${lainHTML}
          </div>
        </div>
        <div class="namaRS">
          ${kamar["Rumah Sakit"]} || ${kamar.Nama}
          <button onclick="pesanKamar(${kamar['Rumah Sakit']},${kamar.Nama})">Pesan</button>
        </div>
    </div>
    <div class="statusKamar">Kamar Tersedia</div>
  </div>`;
    mainBox.innerHTML += cardHTML;
  }
}

function pesanKamar(RS,Room){
  for (const rumahSakit of DB_rumahSakit) {
    if(rumahSakit === RS){
      for (const Kamar of rumahSakit.Kamar) {
        if(Kamar.Nama === Room){
          bookedRoom.push(Kamar);
        }
      }
    }
  }updateUserOrder();
}

function hapusUser(){
  User = {};
  updateUserOrder();
}

let User = {};

updateUserOrder();

let bookedRoom = [];

updateFilteredRoom();
