-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09. Mai, 2023 15:14 PM
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
-- Database: `spill`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `tabell`
--

CREATE TABLE `tabell` (
  `Id` int(11) NOT NULL,
  `Navn` varchar(255) NOT NULL,
  `Level` int(11) NOT NULL,
  `Tid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `tabell`
--

INSERT INTO `tabell` (`Id`, `Navn`, `Level`, `Tid`) VALUES
(4, 'Jonas', 5, 30),
(9, 'Baar', 7, 26),
(10, 'Mikkel', 6, 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tabell`
--
ALTER TABLE `tabell`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tabell`
--
ALTER TABLE `tabell`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
