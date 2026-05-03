# 📊 Strategi Tracking Adopsi Design System (Gwind UI)

Dokumen ini berisi rencana kerja untuk memantau penggunaan library di ekosistem internal perusahaan (Sonatype Nexus & GitLab).

## 🚀 Fase 1: Persiapan (Infrastructure)
- [ ] Buat **GitLab Personal Access Token (PAT)** dengan scope `read_api` dan `read_repository`.
- [ ] Pastikan API **Sonatype Nexus** dapat diakses dari environment script audit.
- [ ] Siapkan satu repository khusus (misal: `gwind-metrics`) untuk menjalankan script audit secara berkala via CI/CD (Scheduled Pipeline).

## 🔍 Fase 2: Implementasi GitLab Auditor (Source of Truth)
Script ini akan men-scan seluruh project di GitLab untuk melihat penggunaan nyata.
- [ ] Buat script Node.js untuk:
    - [ ] Fetch daftar semua project dalam Group/Namespace tertentu di GitLab.
    - [ ] Cek keberadaan file `gwind.json`.
    - [ ] Scan folder `src/components/ui/` untuk mendeteksi komponen apa saja yang sudah di-install.
    - [ ] Ekstrak versi `gwind-system-ui` dari `package.json` project tujuan.
- [ ] Simpan hasil scan ke dalam file JSON atau Database sederhana.

## 📈 Fase 3: Integrasi Nexus Stats
- [ ] Tarik data download harian/mingguan dari API Nexus untuk paket `gwind-system-ui`.
- [ ] Bandingkan jumlah download dengan jumlah project aktif di GitLab untuk melihat gap adopsi.

## 🛰️ Fase 4: CLI Telemetry (Real-time Tracking)
- [ ] Modifikasi `packages/cli/src/index.ts` untuk mengirim log setiap kali command dijalankan:
    - [ ] Command `init`: Mengetahui kapan tim baru mulai mencoba.
    - [ ] Command `add <component>`: Mengetahui komponen mana yang paling populer.
- [ ] Pastikan telemetry bersifat *anonymous* atau minimalis (hanya Project ID dan Nama Komponen).
- [ ] Tambahkan flag `--no-telemetry` untuk mematuhi kebijakan privasi jika diperlukan.

## 📊 Fase 5: Visualisasi & Reporting
- [ ] Buat dashboard sederhana (bisa menggunakan Grafana, ELK, atau sekadar Markdown report di GitLab Wiki).
- [ ] Metrik Utama yang dipantau:
    - **Total Active Projects**: Jumlah repository unik yang menggunakan Gwind.
    - **Component Popularity**: Top 5 komponen yang paling banyak di-install.
    - **Version Distribution**: Persentase project yang masih menggunakan versi lama.
    - **Growth Rate**: Pertumbuhan adopsi bulan ke bulan.

---
> **Catatan:** Jalankan script audit GitLab secara berkala (misal: setiap Senin jam 09.00) agar data tetap akurat.
