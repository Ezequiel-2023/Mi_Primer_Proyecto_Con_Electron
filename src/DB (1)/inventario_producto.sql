-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: inventario
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `cuiProducto` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `proveedor` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `categoria` varchar(180) NOT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`cuiProducto`),
  UNIQUE KEY `cuiProducto` (`cuiProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (123,'Monitor de PC','Samsung','Monitor LED 24 pulgadas con resolución Full HD. Conectividad VGA y USB.','Electrónica',7),(143,'Reloj Inteligente','Xiaomi','Reloj inteligente con múltiples funciones.','Moda',8),(321,'Teclado Inalámbrico Wireless','celcomer','Teclado de juego inalámbrico, retroiluminado LED recargable de 3000 mAh','Informática',78),(345,'Mouse Wired','Intelf.SA','Mouse con cable para PC.','Informatíca',45),(375,'Silla de Gaming','X Rocker','Silla ergonómica para gaming.','Muebles',6),(567,'PC Gamer Pro','Xbox','PC para gaming de alto rendimiento.','Electrónica',99),(787,'Escritorio Pc Gamer','Click','Escritorio diseñado para PC gamers.','Muebles',90),(897,'Galaxy Tab S6','Samsung','Tablet Samsung Galaxy Tab S6.','Tecnología',145),(980,'MacBook Pro','Apple','Laptop MacBook Pro de Apple.','Informatíca',9),(987,'Audífonos Bluetooth','Huawei','Audífonos inalámbricos con tecnología Bluetooth.','Audio',234),(2001,'Smart TV 4K','LG','Televisor inteligente LG 4K de 55 pulgadas.','Electrónica',15),(2002,'Cámara Digital','Canon','Cámara digital Canon EOS RP de 26.2 MP.','Fotografía',25),(2003,'Impresora Láser','HP','Impresora láser HP LaserJet Pro M404n.','Impresoras',30),(2004,'Auriculares Gaming','SteelSeries','Auriculares gaming SteelSeries Arctis 7.','Gaming',40),(2005,'Disco Duro Externo','Seagate','Disco duro externo Seagate Backup Plus Slim de 2 TB.','Almacenamiento',50),(2006,'Licencia Windows 10','Microsoft','Licencia de software original Windows 10 Home.','sistemas',50),(2007,'Altavoces Bluetooth','JBL','Altavoces Bluetooth portátiles JBL Charge 4.','Audio',20),(2008,'Monitor Curvo','Dell','Monitor curvo de 27 pulgadas Dell S2721HGF.','Electrónica',9),(2009,'Router Inalámbrico','TP-Link','Router inalámbrico TP-Link Archer C1200.','Redes',35),(2010,'Teclado Mecánico','Corsair','Teclado mecánico Corsair K95 RGB Platinum XT.','Informática',5);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-19 22:13:25
