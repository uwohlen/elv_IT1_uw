-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 21. Mar, 2023 12:28 PM
-- Tjener-versjon: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Klasseliste`
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
  `termin1` int(1) UNSIGNED DEFAULT NULL,
  `standpunkt` int(1) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `elever`
--

INSERT INTO `elever` (`elevNr`, `fornavn`, `etternavn`, `klasse`, `kontaktlaererNr`, `telefonNr`, `termin1`, `standpunkt`) VALUES
(1, 'Per', 'Asbjørnsen', '3STA', 1, NULL, NULL, NULL),
(2, 'Pål', 'Asbjørnsen', '3STA', 1, NULL, NULL, NULL),
(3, 'Espen', 'Asbjørnsen', '3STB', 2, NULL, NULL, NULL),
(4, 'Per', 'Moe', '3STA', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `elever_med_interesser`
--

CREATE TABLE `elever_med_interesser` (
  `idNr` int(11) NOT NULL,
  `elevNr` int(11) NOT NULL,
  `interesseNr` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `elever_med_interesser`
--

INSERT INTO `elever_med_interesser` (`idNr`, `elevNr`, `interesseNr`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 1),
(5, 4, 2);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `interesser`
--

CREATE TABLE `interesser` (
  `interesseNr` int(11) NOT NULL,
  `interesse` varchar(50) NOT NULL,
  `sted` varchar(50) DEFAULT NULL,
  `utbytte` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `interesser`
--

INSERT INTO `interesser` (`interesseNr`, `interesse`, `sted`, `utbytte`) VALUES
(1, 'Jakt', 'Utendørs', 'Kjøtt'),
(2, 'Fiske', 'Utendørs', 'Fisk'),
(3, 'Aske', 'Inne', 'Tidsfordriv');

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dataark for tabell `laerere`
--

INSERT INTO `laerere` (`idNr`, `fornavn`, `etternavn`, `telefonNr`, `kontor`) VALUES
(1, 'Knut Kornelius', 'Christiansen-Olsen', NULL, NULL),
(2, 'Anne Lise', '', NULL, NULL),
(3, 'Ellen', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `UCL_topscorers`
--

CREATE TABLE `UCL_topscorers` (
  `idnr` int(11) NOT NULL,
  `Fornavn` varchar(100) NOT NULL,
  `Etternavn` varchar(100) NOT NULL,
  `Goals` int(100) NOT NULL,
  `Antall kamper` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dataark for tabell `UCL_topscorers`
--

INSERT INTO `UCL_topscorers` (`idnr`, `Fornavn`, `Etternavn`, `Goals`, `Antall kamper`) VALUES
(1, 'Cristiano', 'Ronaldo', 140, 183),
(2, 'Lionel', 'Messi', 129, 162),
(3, 'Robert', 'Lewandowski', 91, 111),
(4, 'Karim', 'Benzema', 89, 148),
(5, 'Thomas', 'Muller', 53, 139),
(6, 'Zlatan', 'Ibrahimovic', 48, 124),
(7, 'Mohamed', 'Salah', 44, 79),
(8, 'Neymar', 'Jr', 43, 81),
(9, 'Kylian', 'Mbappe', 40, 60),
(10, 'Erling', 'Haaland', 33, 25);

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
  ADD PRIMARY KEY (`idNr`);

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
-- Indexes for table `UCL_topscorers`
--
ALTER TABLE `UCL_topscorers`
  ADD PRIMARY KEY (`idnr`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `elever`
--
ALTER TABLE `elever`
  MODIFY `elevNr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `elever_med_interesser`
--
ALTER TABLE `elever_med_interesser`
  MODIFY `idNr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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

--
-- AUTO_INCREMENT for table `UCL_topscorers`
--
ALTER TABLE `UCL_topscorers`
  MODIFY `idnr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
