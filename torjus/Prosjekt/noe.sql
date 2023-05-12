-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 21. Mar, 2023 10:30 AM
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
-- Database: `noe`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `oddspillere`
--

CREATE TABLE `oddspillere` (
  `spillereID` int(11) DEFAULT NULL,
  `fornavn` varchar(255) DEFAULT NULL,
  `etternavn` varchar(255) DEFAULT NULL,
  `alder` varchar(255) DEFAULT NULL,
  `hoyde` varchar(255) DEFAULT NULL,
  `nasjonalitet` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `oddspillere`
--

INSERT INTO `oddspillere` (`spillereID`, `fornavn`, `etternavn`, `alder`, `hoyde`, `nasjonalitet`) VALUES
(1, 'Leopold', 'Wahlstedt', '23', '190cm', 'Sverige'),
(2, 'Peder', 'Nygaard Klausen', '19', '191cm', 'Norge'),
(3, 'Espen', 'Ruud', '39', '184cm', 'Norge'),
(4, 'Steffen', 'Hagen', '37', '185cm', 'Norge'),
(5, 'Sondre', 'Solholm Johansen', '27', '190cm', 'Norge'),
(6, 'Gilli', 'Rolantsson', '30', '187cm', 'faeroyene'),
(7, 'Diogo', 'Tomas', '25', '193cm', 'Finland'),
(8, 'Josef', 'Brian Baccay', '21', '178cm', 'Norge'),
(9, 'Kevin', 'Egell-Johnsen', '22', '182cm', 'Norge'),
(10, 'Jesper', 'Svenunsen Skau', '19', '187cm', 'Norge'),
(11, 'Thomas', 'Rekdal', '22', '179cm', 'Norge'),
(12, 'Salomon', 'Owusu', '27', '176cm', 'Ghana'),
(13, 'Filip', 'Rønningen Jørgensen', '20', '183cm', 'Norge'),
(14, 'Syver', 'Aas', '19', '181cm', 'Norge'),
(15, 'Mikael', 'Ingebritsen', '26', '170cm', 'Norge'),
(16, 'Milan', 'Jevtovic', '29', '184cm', 'Serbia'),
(17, 'Ole', 'Erik Midtskogen', '27', '196cm', 'Norge'),
(18, 'Conrad', 'Wallem', '22', '180cm', 'Norge'),
(19, 'Dennis', 'Gjengaar', '19', '176cm', 'Norge'),
(20, 'Faniel', 'Tewelde', '16', '178cm', 'Norge');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `posisjoner`
--

CREATE TABLE `posisjoner` (
  `posisjonID` int(11) DEFAULT NULL,
  `posisjon` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `posisjoner`
--

INSERT INTO `posisjoner` (`posisjonID`, `posisjon`, `type`) VALUES
(1, 'Målvakt', 'Målvakt'),
(2, 'Høyrebekk', 'Forsvar'),
(3, 'Midtstopper', 'Forsvar'),
(4, 'Venstrebekk', 'Forsvar'),
(5, 'Defensiv midtbane', 'Midtbane'),
(6, 'Sentral midtbane', 'Midtbane'),
(7, 'Høyre ving', 'Angrep'),
(8, 'Venstre ving', 'Angrep'),
(9, 'Spiss', 'Angrep'),
(10, 'Falsk nier', 'Angrep');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `spillerposisjoner`
--

CREATE TABLE `spillerposisjoner` (
  `spillerposisjonID` int(11) DEFAULT NULL,
  `spillereID` int(11) DEFAULT NULL,
  `posisjonID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `spillerposisjoner`
--

INSERT INTO `spillerposisjoner` (`spillerposisjonID`, `spillereID`, `posisjonID`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 3),
(5, 5, 3),
(6, 6, 2),
(7, 6, 4),
(8, 7, 3),
(9, 8, 4),
(10, 9, 2),
(11, 9, 4),
(12, 10, 5),
(13, 10, 3),
(14, 11, 5),
(15, 11, 6),
(16, 12, 5),
(17, 12, 3),
(18, 13, 5),
(19, 13, 6),
(20, 14, 6),
(21, 14, 7),
(22, 15, 6),
(23, 15, 10),
(24, 15, 7),
(25, 15, 8),
(26, 16, 8),
(27, 16, 9),
(28, 17, 9),
(29, 18, 6),
(30, 18, 7),
(31, 18, 8),
(32, 18, 4),
(33, 19, 2),
(34, 19, 7),
(35, 20, 8);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
