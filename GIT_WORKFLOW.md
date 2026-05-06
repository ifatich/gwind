# Git Git Workflow - Commit & Push

Gunakan panduan ini untuk melakukan commit dan push perubahan di repositori **Gwind Design System**.

## 1. Persiapan
Sebelum commit, pastikan semua build berhasil untuk menghindari push kode yang rusak.
```bash
# Dari root folder
pnpm build
```

## 2. Struktur Pesan Commit
Ikuti konvensi [Conventional Commits](https://www.conventionalcommits.org/):
- `feat`: Fitur baru (misal: migrasi komponen baru)
- `fix`: Perbaikan bug (misal: fix styling docs)
- `docs`: Perubahan dokumentasi
- `style`: Perubahan formatting, missing semi colons, dll (bukan perubahan kode UI)
- `refactor`: Perubahan kode yang bukan fix maupun feat
- `chore`: Update build tasks, package manager configs, dll

## 3. Langkah-langkah Commit

### Step 1: Stage Perubahan
```bash
# Tambahkan semua perubahan
git add .

# Atau tambahkan file spesifik
git add apps/docs/components/button.md
```

### Step 2: Commit
```bash
# Contoh commit fitur baru
git commit -m "feat(ui): migrate breadcrumb and combobox components"

# Contoh commit perbaikan docs
git commit -m "docs: add advanced variants and live previews to button docs"
```

### Step 3: Push
```bash
# Pastikan sudah pull terbaru sebelum push
git pull origin main

# Push ke remote barulah
git push origin main
```

## 4. Tips Tambahan
- **Atomic Commits**: Lakukan commit untuk setiap unit kerja terkecil yang logis (misal: per komponen).
- **Registry Check**: Jika menambah komponen baru, pastikan file `registry/index.json` ikut ter-commit setelah menjalankan `pnpm build:registry`.
