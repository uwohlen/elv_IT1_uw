-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 21. Mar, 2023 13:53 PM
-- Tjener-versjon: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testdatabase`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `Klasseliste`
--

CREATE TABLE `Klasseliste` (
  `elevNr` int(11) NOT NULL,
  `fornavn` varchar(100) CHARACTER SET utf8 NOT NULL,
  `etternavn` varchar(100) CHARACTER SET utf8 NOT NULL,
  `klasse` varchar(10) CHARACTER SET utf8 NOT NULL,
  `kontaktlaerer` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dataark for tabell `Klasseliste`
--

INSERT INTO `Klasseliste` (`elevNr`, `fornavn`, `etternavn`, `klasse`, `kontaktlaerer`) VALUES
(1, 'Oskar', 'Ripel', '2STE', 'Charlotte');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Klasseliste`
--
ALTER TABLE `Klasseliste`
  ADD PRIMARY KEY (`elevNr`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Klasseliste`
--
ALTER TABLE `Klasseliste`
  MODIFY `elevNr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
