-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 23. Mar, 2023 10:16 AM
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
-- Database: `klasseliste`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `elever`
--

CREATE TABLE `elever` (
  `elevNr` int(11) NOT NULL,
  `fornavn` varchar(100) NOT NULL,
  `etternavn` varchar(100) DEFAULT NULL,
  `klasse` varchar(10) NOT NULL,
  `kontaktlaererNr` int(11) DEFAULT NULL,
  `telefonNr` int(8) UNSIGNED DEFAULT NULL,
  `termin1` int(1) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dataark for tabell `elever`
--

INSERT INTO `elever` (`elevNr`, `fornavn`, `etternavn`, `klasse`, `kontaktlaererNr`, `telefonNr`, `termin1`) VALUES
(1, 'Kavya', 'Kandeeban', '3STA', 1, 92033635, 2),
(2, 'Alice', 'Davis', '3STC', 2, 90233587, 2),
(3, 'Miriam', 'Asbjørnsen', '3STB', 3, 12345678, 2),
(4, 'Ed', 'Moe', '3STB', 3, 87654321, 5);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `elever_med_interesser`
--

CREATE TABLE `elever_med_interesser` (
  `elevNr` int(11) NOT NULL,
  `interesseNr` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dataark for tabell `elever_med_interesser`
--

INSERT INTO `elever_med_interesser` (`elevNr`, `interesseNr`) VALUES
(1, 3),
(2, 2),
(3, 2),
(4, 1);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `interesser`
--

CREATE TABLE `interesser` (
  `interesseNr` int(11) NOT NULL,
  `interesse` varchar(50) NOT NULL,
  `sted` varchar(50) DEFAULT NULL,
  `utbytte` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dataark for tabell `interesser`
--

INSERT INTO `interesser` (`interesseNr`, `interesse`, `sted`, `utbytte`) VALUES
(1, 'Sove', 'Innendørs', 'Søvn'),
(2, 'Lese', 'Utendørs', 'Kunnskap'),
(3, 'Bade', 'Inne', 'Ha det kos');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `laerere`
--

CREATE TABLE `laerere` (
  `idNr` int(11) NOT NULL,
  `fornavn` varchar(100) NOT NULL,
  `etternavn` varchar(100) DEFAULT NULL,
  `telefonNr` varchar(8) DEFAULT NULL,
  `kontor` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dataark for tabell `laerere`
--

INSERT INTO `laerere` (`idNr`, `fornavn`, `etternavn`, `telefonNr`, `kontor`) VALUES
(1, 'Knud', 'Knudsen', '25096462', 'V255'),
(2, 'Kim', 'Kardashian', NULL, 'V354'),
(3, 'Justin', 'Bieber', '09090935', 'ø555');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `elever`
--
ALTER TABLE `elever`
  ADD PRIMARY KEY (`elevNr`);

--
-- Indexes for table `elever_med_interesser`
--
ALTER TABLE `elever_med_interesser`
  ADD PRIMARY KEY (`elevNr`);

--
-- Indexes for table `interesser`
--
ALTER TABLE `interesser`
  ADD PRIMARY KEY (`interesseNr`);

--
-- Indexes for table `laerere`
--
ALTER TABLE `laerere`
  ADD PRIMARY KEY (`idNr`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `elever`
--
ALTER TABLE `elever`
  MODIFY `elevNr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `interesser`
--
ALTER TABLE `interesser`
  MODIFY `interesseNr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `laerere`
--
ALTER TABLE `laerere`
  MODIFY `idNr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
