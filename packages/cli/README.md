# gwind-ui

CLI source distribution untuk Gwind Vue 3 Design System.

```bash
# Setup registry Artifactory Pegadaian
npm config set registry https://artifactory.pegadaian.co.id/repository/npm-group-1/

# Inisialisasi & Tambah Komponen
npx gwind-ui init
npx gwind-ui add button
```

`init` membuat konfigurasi, utility `cn`, dan stylesheet fondasi lokal. `add` menyalin source component beserta registry dependency ke project consumer tanpa menimpa file yang sudah ada. Gunakan `--overwrite` hanya untuk pembaruan yang disengaja.

Dokumentasi lengkap tersedia di repository Gwind.
