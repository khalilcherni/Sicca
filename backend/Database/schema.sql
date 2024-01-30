-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema sicca
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sicca
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sicca` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `sicca` ;

-- -----------------------------------------------------
-- Table `sicca`.`cultural_places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sicca`.`cultural_places` (
  `place_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `contact_info` VARCHAR(255) NULL DEFAULT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT NULL,
  `location` VARCHAR(255) NOT NULL,
  `cultural_category` VARCHAR(255) NULL DEFAULT NULL,
  `exhibits` TEXT NULL DEFAULT NULL,
  `entry_fee` DECIMAL(10,2) NULL DEFAULT NULL,
  `opening_hours` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`place_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sicca`.`historic_places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sicca`.`historic_places` (
  `place_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `contact_info` VARCHAR(255) NULL DEFAULT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT NULL,
  `location` VARCHAR(255) NOT NULL,
  `year_established` INT NULL DEFAULT NULL,
  `historical_significance` TEXT NULL DEFAULT NULL,
  `architectural_style` VARCHAR(255) NULL DEFAULT NULL,
  `entry_fee` DECIMAL(10,2) NULL DEFAULT NULL,
  `opening_hours` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`place_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sicca`.`tourism_places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sicca`.`tourism_places` (
  `place_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `contact_info` VARCHAR(255) NULL DEFAULT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT NULL,
  `location` VARCHAR(255) NOT NULL,
  `tourism_category` VARCHAR(255) NULL DEFAULT NULL,
  `activities` TEXT NULL DEFAULT NULL,
  `entry_fee` DECIMAL(10,2) NULL DEFAULT NULL,
  `opening_hours` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`place_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
