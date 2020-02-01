-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Feb 2020 pada 23.17
-- Versi server: 10.1.30-MariaDB
-- Versi PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simrs_lite`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_01_31_031545_roles', 1),
(2, '2020_01_31_031648_polyclinics', 1),
(3, '2020_01_31_031745_patients', 1),
(4, '2020_01_31_034228_users', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `patients`
--

CREATE TABLE `patients` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `polyclinic_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `patients`
--

INSERT INTO `patients` (`id`, `name`, `address`, `phone_number`, `created_at`, `updated_at`, `polyclinic_id`) VALUES
(1, 'Dimas Amar', 'Jalan Kuning no.5, Jakarta barat', '081327567432', '2020-02-01 16:06:34', '2020-02-01 16:06:34', 1),
(2, 'Ratna Marisa', 'Jalan Sudirman Cemapak Putih, Jakarta Pusat', '085678900100', '2020-02-01 16:06:34', '2020-02-01 16:06:34', 2),
(3, 'Animah Rumasya', 'Jalan Raya Selatan rt003/045, Bekasi', '085098567543', '2020-02-01 16:06:34', '2020-02-01 16:06:34', 3),
(4, 'Deo Helman', 'Jalan Sarjana no.1, Jakarta Selatan', '085678456324', '2020-02-01 16:06:34', '2020-02-01 16:06:34', 4),
(5, 'Mike Amar', 'Jalan Gambir Tugu no 45, Jakarta Pusat', '081234546789', '2020-02-01 16:06:34', '2020-02-01 16:06:34', 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `polyclinics`
--

CREATE TABLE `polyclinics` (
  `id` int(10) UNSIGNED NOT NULL,
  `polyclinic` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `polyclinics`
--

INSERT INTO `polyclinics` (`id`, `polyclinic`, `created_at`, `updated_at`) VALUES
(1, 'Poli Dalam', '2020-02-01 16:00:35', '2020-02-01 16:00:35'),
(2, 'Poli Kandungan', '2020-02-01 16:00:35', '2020-02-01 16:00:35'),
(3, 'Poli Saraf', '2020-02-01 16:00:35', '2020-02-01 16:00:35'),
(4, 'Poli Bedah', '2020-02-01 16:00:35', '2020-02-01 16:00:35'),
(5, 'Poli Anak', '2020-02-01 16:00:35', '2020-02-01 16:00:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `role` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `roles`
--

INSERT INTO `roles` (`id`, `role`, `created_at`, `updated_at`) VALUES
(1, 'Admin', '2020-02-01 14:03:07', '2020-02-01 14:03:07'),
(2, 'Dokter', '2020-02-01 14:03:07', '2020-02-01 14:03:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `polyclinic_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `address`, `phone_number`, `username`, `password`, `created_at`, `updated_at`, `role_id`, `polyclinic_id`) VALUES
(32, 'Nitha Huwaida', 'Jalan cempaka tengah, Jakart Pusat', '081327567432', 'nithahuwaida', '123456', '2020-02-01 16:16:18', '2020-02-01 16:16:18', 1, 5),
(33, 'dr.IRIANTA DWI POEJASAPUTRA, Sp.D', 'Jalan Solo, Jakarta Pusat', '085678900100', 'irawati', '123456', '2020-02-01 16:16:18', '2020-02-01 16:16:18', 2, 1),
(34, 'dr.HESA KUSUMA, Sp.OG', 'Jalan Brobrus no. 10, Jakarta Pusat', '085678456324', 'hesakusuma', '123456', '2020-02-01 16:16:18', '2020-02-01 16:16:18', 2, 2);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patients_polyclinic_id_foreign` (`polyclinic_id`);

--
-- Indeks untuk tabel `polyclinics`
--
ALTER TABLE `polyclinics`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_role_id_foreign` (`role_id`),
  ADD KEY `users_polyclinic_id_foreign` (`polyclinic_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `polyclinics`
--
ALTER TABLE `polyclinics`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_polyclinic_id_foreign` FOREIGN KEY (`polyclinic_id`) REFERENCES `polyclinics` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_polyclinic_id_foreign` FOREIGN KEY (`polyclinic_id`) REFERENCES `polyclinics` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
