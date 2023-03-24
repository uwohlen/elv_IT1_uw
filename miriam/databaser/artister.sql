-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 23. Mar, 2023 10:14 AM
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
-- Database: `artister`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `artister_jeg_liker`
--

CREATE TABLE `artister_jeg_liker` (
  `Fornavn` text NOT NULL,
  `Etternavn` varchar(100) NOT NULL,
  `Alder` int(8) NOT NULL,
  `Bosted` text NOT NULL,
  `Album` text NOT NULL,
  `Sang` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `artister_jeg_liker`
--

INSERT INTO `artister_jeg_liker` (`Fornavn`, `Etternavn`, `Alder`, `Bosted`, `Album`, `Sang`) VALUES
('Miriam', '', 0, '', '', ''),
('Shawn', 'Carter (Jay-Z)', 53, 'Los Angeles', 'The Blueprint (Explicit version)', '03\' Bonnie & Clyde'),
('Daniel', 'Dumile (MF DOOM)', 49, 'Under bakken. Rip.', 'Operation: Doomsday (Complete)', 'Knock knock'),
('Kristoffer', 'Karlsen (Cezinando)', 27, 'Oslo', 'Et godt stup i et grunt vann', 'Hore og madonna'),
('Frank', 'Ocean', 35, 'Los Angeles', 'Channel orange', 'Pyramids'),
('Brittney', 'Parks (Sudan Archives)', 29, 'Los Angeles', 'Natural Brown Prom Queen', 'Selfish Soul'),
('Dizzie', 'Rascal', 38, 'London', 'Tongue N\'Cheek (Dirtee Deluxe Edition)', 'Bonkers'),
('Kabae', 'West', 45, 'Los Angeles', 'My beautiful dark twisted fantasy', 'Lost In The World');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artister_jeg_liker`
--
ALTER TABLE `artister_jeg_liker`
  ADD PRIMARY KEY (`Etternavn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
