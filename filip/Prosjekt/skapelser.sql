-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 21. Mar, 2023 14:33 PM
-- Tjener-versjon: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `avatarskaper`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `skapelser`
--

CREATE TABLE `skapelser` (
  `charNr` int(10) NOT NULL,
  `brukerNavn` varchar(100) NOT NULL,
  `charNavn` varchar(100) NOT NULL,
  `charHobby` varchar(100) NOT NULL,
  `charAlder` int(5) NOT NULL,
  `charSmak` varchar(100) NOT NULL,
  `charPerson` varchar(100) NOT NULL,
  `brukerMening` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `skapelser`
--
ALTER TABLE `skapelser`
  ADD PRIMARY KEY (`charNr`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `skapelser`
--
ALTER TABLE `skapelser`
  MODIFY `charNr` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
