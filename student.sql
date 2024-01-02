-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2024 at 05:44 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`email`, `password`) VALUES
('gauravchoundiye5148@gmail.com', '12345'),
('gauravchoundiye5148@gmail.com', '12345'),
('gchoundiye@gmail.com', '12345'),
('pankajchoundiye709@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `full_name` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `full_name`, `email`, `password`) VALUES
(25, 'gaurav choundiye', 'gaurav@gmail.com', '12345'),
(26, 'gaurav choundiye', 'gaurav@gmail.com', '12345'),
(27, 'Gaurav kailas choundiye ', 'gaikwadsanjana112@gmail.com', '789456');

-- --------------------------------------------------------

--
-- Table structure for table `video_upload`
--

CREATE TABLE `video_upload` (
  `id` int(11) NOT NULL,
  `title_video` varchar(20) NOT NULL,
  `video_url` varchar(5000) NOT NULL,
  `uploader_name` varchar(50) NOT NULL,
  `chanel_name` varchar(50) NOT NULL,
  `views` bigint(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video_upload`
--

INSERT INTO `video_upload` (`id`, `title_video`, `video_url`, `uploader_name`, `chanel_name`, `views`) VALUES
(25, 'xyz123', 'video_player.mp4', 'gaurav choundiye', 'friends', 10),
(26, 'xyz123', 'video_player.mp4', 'gaurav choundiye', 'friends', 10),
(27, 'xyz123', 'video_player.mp4', 'gaurav choundiye', 'friends', 10),
(28, 'om', 'video_player.mp4', 'gaurav choundiye', 'friends', 10),
(29, 'om', 'video_player.mp4', 'gaurav choundiye', 'friends', 10),
(30, 'om', 'video_player.mp4', 'gaurav choundiye', 'friends', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video_upload`
--
ALTER TABLE `video_upload`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `video_upload`
--
ALTER TABLE `video_upload`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
