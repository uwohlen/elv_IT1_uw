-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 23. Mar, 2023 09:48 AM
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
-- Tabellstruktur for tabell `boker`
--

CREATE TABLE `boker` (
  `bokindeks` int(11) NOT NULL,
  `tittel` text NOT NULL,
  `forfatter` text NOT NULL,
  `utgivelsesar` text NOT NULL,
  `antallsider` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `boker`
--

INSERT INTO `boker` (`bokindeks`, `tittel`, `forfatter`, `utgivelsesar`, `antallsider`) VALUES
(1, 'Du er så lys', 'Tore Renberg', '2016', '266'),
(2, 'Jeg vil våkne til verden', 'Karoline Brændjord', '2020', '74'),
(3, 'Beautiful world, where are you', 'Sally Rooney', '2021', '337'),
(4, 'Lord of the flies', 'William Golding', '1954', '224'),
(5, 'Fresh water for flowers', 'Valerie Perrin', '2021', '304'),
(6, 'Rebecca', 'Daphne du Maurier', '1938', '438'),
(7, 'Conversations with friends ', 'Sally Rooney ', '2018', '352'),
(9, 'faen ta skjebnen', 'John Green', '1897', '200');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `boker`
--
ALTER TABLE `boker`
  ADD PRIMARY KEY (`bokindeks`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `boker`
--
ALTER TABLE `boker`
  MODIFY `bokindeks` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
