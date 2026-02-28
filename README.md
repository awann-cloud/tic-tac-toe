# TIC-TAC-TOE REACT PROJECT

---

## 1. DESKRIPSI PROJECT

Nama Project: Tic Tac Toe

Teknologi yang Digunakan:
- React 18.0.0 - Library untuk membuat UI interaktif
- Node.js & npm - Runtime JavaScript & package manager
- CSS3 - Styling aplikasi
- React Scripts - Development tools & build configuration

Fungsi Project:
- Game Tic Tac Toe (permainan X dan O)
- Fitur Undo untuk membatalkan move terakhir
- Deteksi pemenang otomatis
- Interface yang user-friendly

Struktur Folder:
```
tic-tac-toe/
├── package.json          ← Konfigurasi & dependencies
├── public/index.html     ← HTML entry point
└── src/
    ├── App.js            ← Main component & game logic
    ├── App.css           ← Styling game
    ├── index.js          ← React setup/mount
    └── index.css         ← CSS global
```

---

## 2. PERSYARATAN SISTEM

Sebelum menjalankan project, pastikan sudah terinstall:

| Software | Versi Minimal | Cara Cek |
|----------|---------------|----------|
| Node.js | v14 atau lebih baru | node -v di terminal |
| npm | v6 atau lebih baru | npm -v di terminal |

Cara Install Node.js & npm:
1. Buka https://nodejs.org/
2. Download versi LTS (Long Term Support)
3. Install dengan default settings
4. Verifikasi: buka terminal baru, ketik node -v dan npm -v

---

## 3. CARA SETUP PROJECT (PERTAMA KALI)

Langkah 1: Buka Terminal
Ctrl + ` (di VS Code)
atau buka Command Prompt/PowerShell secara manual.

Langkah 2: Navigasi ke Folder Project
cd D:\ALL_DOCUMENT\Git\gdg_project\p3v2\tic-tac-toe

Langkah 3: Install Dependencies (Cukup 1 Kali)
npm install

Output: Folder node_modules/ akan dibuat berisi semua library React dan dependency lainnya.

Waktu tunggu: 2-5 menit (tergantung kecepatan internet)

---

## 4. CARA MENJALANKAN PROJECT

Start Development Server
npm start

Yang akan terjadi:
1. Terminal menampilkan: Compiled successfully!
2. Browser otomatis membuka: http://localhost:3000
3. Game Tic Tac Toe siap dimainkan

Hot Reload (Auto Refresh):
- Setiap kali kamu simpan file (Ctrl + S), browser otomatis refresh
- Tidak perlu restart server

Menghentikan Server
Ctrl + C
Tekan Y jika diminta konfirmasi.

---

