-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Ott 07, 2021 alle 10:02
-- Versione del server: 10.4.21-MariaDB
-- Versione PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pw_galleria_arte`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `anagrafica`
--

CREATE TABLE `anagrafica` (
  `id_anagrafica` int(11) NOT NULL,
  `nominativo` varchar(50) DEFAULT NULL,
  `indirizzo` varchar(50) DEFAULT NULL,
  `cap` varchar(5) DEFAULT NULL,
  `localita` varchar(50) DEFAULT NULL,
  `provincia` varchar(2) DEFAULT NULL,
  `codicefiscale` varchar(16) DEFAULT NULL,
  `partita_iva` varchar(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `sito_web` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `anagrafica`
--

INSERT INTO `anagrafica` (`id_anagrafica`, `nominativo`, `indirizzo`, `cap`, `localita`, `provincia`, `codicefiscale`, `partita_iva`, `email`, `password`, `sito_web`) VALUES
(1, 'Ciro Corleone', 'Via Garibaldi, 45', '70100', 'Bari', 'BA', 'CROCLN65F41T487O', '123456789', 'ciro.corleone@gmail.com', 'PinoDaniele', 'cirocorleone.it'),
(2, 'Paci Enza', 'Via Delle Palme', '85026', 'Palazzo San Gervasio', 'PZ', 'PCIEZA89G65T145U', '789654126', 'pacienza@hotmail.com', 'io567jfdu', 'pacienza.it'),
(3, 'Vincenzo Imparato', 'Piazza Plebiscito', '80100', 'Napoli', 'NA', 'VCZMPT75G47T745I', '59874653210', 'cenzinoimparatino@gmail.com', '234tr56gf', 'vincenzoimparato.it'),
(4, 'Flaminia Patrizi', 'Via dei Mille, 25', '00100', 'Roma', 'RM', 'FMNPTZ64Q47R125J', '45213269870', 'laflamiforever@gmail.com', 'TottiForever', 'patriziflaminia.it'),
(5, 'Gionatan Lunetta', 'Via Cavour', '86010', 'Oratino', 'CB', 'GTNLTT86D14E458M', '78541230698', 'gionnytheking@hotmail.it', 'HoratioKane', 'ilmondovistodagionatan.it'),
(6, 'Gessica Liscarpi', 'Via Torino, 45', '20019', 'Milano', 'MI', 'GSSLCP00N84Y745', '01236654878', 'gessigessi@yahoo.com', 'evvivaLeScarpe', 'liscarpi.com');

-- --------------------------------------------------------

--
-- Struttura della tabella `dettagli_prenotazione`
--

CREATE TABLE `dettagli_prenotazione` (
  `id_dettaglio_prenotazione` int(11) NOT NULL,
  `id_prenotazione` int(11) DEFAULT NULL,
  `id_sala` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `dettagli_prenotazione`
--

INSERT INTO `dettagli_prenotazione` (`id_dettaglio_prenotazione`, `id_prenotazione`, `id_sala`) VALUES
(2, 2, 2),
(3, 3, 4),
(4, 4, 6);

-- --------------------------------------------------------

--
-- Struttura della tabella `prenotazioni`
--

CREATE TABLE `prenotazioni` (
  `id_prenotazione` int(11) NOT NULL,
  `descrizione` varchar(100) DEFAULT NULL,
  `data_inizio` date DEFAULT NULL,
  `data_fine` date DEFAULT NULL,
  `id_anagrafica` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `prenotazioni`
--

INSERT INTO `prenotazioni` (`id_prenotazione`, `descrizione`, `data_inizio`, `data_fine`, `id_anagrafica`) VALUES
(2, 'Paci Enza - esposizione dal 17 ottobre al 24 ottob', '2021-10-17', '2021-10-24', 2),
(3, 'Esposizione privata di Gionatan, il mondo visto da Gionatan', '2021-11-03', '2021-11-10', 5),
(4, 'Flaminia\'s collection', '2021-11-11', '2021-11-16', 4);

-- --------------------------------------------------------

--
-- Struttura della tabella `sale`
--

CREATE TABLE `sale` (
  `id_sala` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `dimensione` varchar(50) DEFAULT NULL,
  `larghezza_parete_nord` double DEFAULT NULL,
  `altezza_parete_nord` double DEFAULT NULL,
  `larghezza_parete_est` double DEFAULT NULL,
  `altezza_parete_est` double DEFAULT NULL,
  `larghezza_parete_ovest` double DEFAULT NULL,
  `altezza_parete_ovest` double DEFAULT NULL,
  `larghezza_parete_sud` double DEFAULT NULL,
  `altezza_parete_sud` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `sale`
--

INSERT INTO `sale` (`id_sala`, `nome`, `dimensione`, `larghezza_parete_nord`, `altezza_parete_nord`, `larghezza_parete_est`, `altezza_parete_est`, `larghezza_parete_ovest`, `altezza_parete_ovest`, `larghezza_parete_sud`, `altezza_parete_sud`) VALUES
(1, 'Sala Blu', '100mq', 3, 2, 4, 3, 2, 5, 4, 2),
(2, 'Sala Rossa', '150mq', 2, 3, 4, 4, 2, 4, 4, 3),
(3, 'Sala Verde', '80mq', 4, 5, 3, 3, 2, 3, 3, 4),
(4, 'Sala Viola', '200mq', 4, 4, 5, 4, 3, 5, 5, 5),
(5, 'Sala Gialla', '170mq', 4, 2, 5, 3, 3, 3, 5, 2),
(6, 'Sala Nera', '145mq', 2, 3, 5, 5, 4, 4, 3, 3);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `anagrafica`
--
ALTER TABLE `anagrafica`
  ADD PRIMARY KEY (`id_anagrafica`);

--
-- Indici per le tabelle `dettagli_prenotazione`
--
ALTER TABLE `dettagli_prenotazione`
  ADD PRIMARY KEY (`id_dettaglio_prenotazione`),
  ADD KEY `id_sala` (`id_sala`),
  ADD KEY `id_prenotazione` (`id_prenotazione`);

--
-- Indici per le tabelle `prenotazioni`
--
ALTER TABLE `prenotazioni`
  ADD PRIMARY KEY (`id_prenotazione`),
  ADD KEY `id_anagrafica` (`id_anagrafica`);

--
-- Indici per le tabelle `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id_sala`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `anagrafica`
--
ALTER TABLE `anagrafica`
  MODIFY `id_anagrafica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la tabella `dettagli_prenotazione`
--
ALTER TABLE `dettagli_prenotazione`
  MODIFY `id_dettaglio_prenotazione` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `prenotazioni`
--
ALTER TABLE `prenotazioni`
  MODIFY `id_prenotazione` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `sale`
--
ALTER TABLE `sale`
  MODIFY `id_sala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `dettagli_prenotazione`
--
ALTER TABLE `dettagli_prenotazione`
  ADD CONSTRAINT `id_prenotazione` FOREIGN KEY (`id_prenotazione`) REFERENCES `prenotazioni` (`id_prenotazione`) ON DELETE CASCADE,
  ADD CONSTRAINT `id_sala` FOREIGN KEY (`id_sala`) REFERENCES `sale` (`id_sala`) ON DELETE CASCADE;

--
-- Limiti per la tabella `prenotazioni`
--
ALTER TABLE `prenotazioni`
  ADD CONSTRAINT `id_anagrafica` FOREIGN KEY (`id_anagrafica`) REFERENCES `anagrafica` (`id_anagrafica`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
