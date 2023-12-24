# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

- SQL-скрипт для створення на початкового наповнення бази даних

```SQL
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema open_data_management_system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `open_data_management_system` ;

-- -----------------------------------------------------
-- Schema open_data_management_system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `open_data_management_system` DEFAULT CHARACTER SET utf8 ;
USE `open_data_management_system` ;

-- -----------------------------------------------------
-- Table `open_data_management_system`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`User` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`User` (
  `id` VARCHAR(36) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`Permissions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Permissions` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Permissions` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(254) NULL,
  `level` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`Attributes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Attributes` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Attributes` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(254) NULL,
  `value` VARCHAR(45) NOT NULL,
  `attributeType` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `Permissions_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_Attributes_Permissions1_idx` (`Permissions_id` ASC) VISIBLE,
  CONSTRAINT `fk_Attributes_Permissions1`
    FOREIGN KEY (`Permissions_id`)
    REFERENCES `open_data_management_system`.`Permissions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`UserAttributes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`UserAttributes` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`UserAttributes` (
  `id` VARCHAR(45) NOT NULL,
  `AttributeID` VARCHAR(36) NOT NULL,
  `User_id` VARCHAR(36) NOT NULL,
  UNIQUE INDEX `AttributeID_UNIQUE` (`AttributeID` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_UserAttributes_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `id`
    FOREIGN KEY (`AttributeID`)
    REFERENCES `open_data_management_system`.`Attributes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UserAttributes_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `open_data_management_system`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`DataFolder`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`DataFolder` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`DataFolder` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(254) NULL,
  `date` DATETIME NOT NULL,
  `owner` VARCHAR(36) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `User_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_DataFolder_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_DataFolder_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `open_data_management_system`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`Data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Data` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Data` (
  `id` VARCHAR(36) NOT NULL,
  `size` DOUBLE NOT NULL,
  `date` DATETIME NOT NULL,
  `dataType` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(254) NULL,
  `tags` VARCHAR(254) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`Search`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Search` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Search` (
  `id` VARCHAR(36) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `searchType` VARCHAR(45) NOT NULL,
  `target` VARCHAR(36) NULL,
  `parameters` VARCHAR(254) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`User_has_Search`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`User_has_Search` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`User_has_Search` (
  `User_id` VARCHAR(36) NOT NULL,
  `Search_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`User_id`, `Search_id`),
  INDEX `fk_User_has_Search_Search1_idx` (`Search_id` ASC) VISIBLE,
  INDEX `fk_User_has_Search_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_has_Search_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `open_data_management_system`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Search_Search1`
    FOREIGN KEY (`Search_id`)
    REFERENCES `open_data_management_system`.`Search` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`DataFolder_has_Data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`DataFolder_has_Data` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`DataFolder_has_Data` (
  `DataFolder_id` VARCHAR(36) NOT NULL,
  `Data_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`DataFolder_id`, `Data_id`),
  INDEX `fk_DataFolder_has_Data_Data1_idx` (`Data_id` ASC) VISIBLE,
  INDEX `fk_DataFolder_has_Data_DataFolder1_idx` (`DataFolder_id` ASC) VISIBLE,
  CONSTRAINT `fk_DataFolder_has_Data_DataFolder1`
    FOREIGN KEY (`DataFolder_id`)
    REFERENCES `open_data_management_system`.`DataFolder` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DataFolder_has_Data_Data1`
    FOREIGN KEY (`Data_id`)
    REFERENCES `open_data_management_system`.`Data` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`Search_has_Data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`Search_has_Data` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`Search_has_Data` (
  `Search_id` VARCHAR(36) NOT NULL,
  `Data_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`Search_id`, `Data_id`),
  INDEX `fk_Search_has_Data_Data1_idx` (`Data_id` ASC) VISIBLE,
  INDEX `fk_Search_has_Data_Search1_idx` (`Search_id` ASC) VISIBLE,
  CONSTRAINT `fk_Search_has_Data_Search1`
    FOREIGN KEY (`Search_id`)
    REFERENCES `open_data_management_system`.`Search` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Search_has_Data_Data1`
    FOREIGN KEY (`Data_id`)
    REFERENCES `open_data_management_system`.`Data` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


```

- RESTfull сервіс для управління даними

Для взаємодії з базою даних я використовував стек технологій: Node.js (фреймворк Nest.js), та PrismaORM.

## Конфігураційний файл PRISMA ORM

```PRISMA

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model DataFolder {
  id          String   @id @default(uuid())
  description String?  @db.VarChar(254)
  date        DateTime @default(now())
  owner       String   @db.VarChar(36)
  name        String   @unique @db.VarChar(45)
  userId      String   @map("User_id")
  user        User     @relation(fields: [userId], references: [id])
  data        DataFolder_has_Data[]
}

model Data {
  id          String   @id @default(uuid())
  size        Float
  date        DateTime
  dataType    String   @db.VarChar(45)
  name        String   @db.VarChar(45)
  description String?  @db.VarChar(254)
  tags        String?  @db.VarChar(254)
  dataFolders DataFolder_has_Data[]
}

model DataFolder_has_Data {
  Data_id       String
  DataFolder_id String
  data          Data     @relation(fields: [Data_id], references: [id])
  dataFolder    DataFolder @relation(fields: [DataFolder_id], references: [id])

  @@id([Data_id, DataFolder_id])
}




model Search {
  id          String     @id @default(uuid())
  status      String     @db.VarChar(45)
  date        DateTime
  searchType  String     @db.VarChar(45)
  target      String?    @db.VarChar(36)
  parameters  String?    @db.VarChar(254)
  users       User[]     @relation("UserToSearch")
}

model User {
   id             String           @id @default(uuid())
  username       String           @db.VarChar(45)
  password       String           @db.VarChar(45)
  email          String           @unique @db.VarChar(254)
  dataFolders    DataFolder[]
  searches Search[] @relation("UserToSearch")
  userAttributes UserAttributes[]
}



model Permissions {
  id          String       @id @default(uuid())
  description String?      @db.VarChar(254)
  level       Int
  name        String       @unique @db.VarChar(45)
  attributes  Attributes[]
}

model Attributes {
  id            String         @id @default(uuid())
  description   String?        @db.VarChar(254)
  value         String         @db.VarChar(45)
  attributeType String         @db.VarChar(45)
  name          String         @unique @db.VarChar(45)
  permissionsId String         @map("Permissions_id")
  permissions   Permissions    @relation(fields: [permissionsId], references: [id])
  userAttributes UserAttributes[]
}

model UserAttributes {
  id          String     @id @default(uuid())
  attributeId String     @map("AttributeID")
  attributes  Attributes @relation(fields: [attributeId], references: [id])
  userId      String     @map("User_id")
  user        User       @relation(fields: [userId], references: [id])
}

```

## Restfull service

**Filename: main.ts**

```Typescript

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


```

---

**Filename: app.module.ts**

```Typescript

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { DataFolderModule } from './data-folder/data-folder.module';
import { DataModule } from './data/data.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AttributesModule } from './attributes/attributes.module';
import { UserAttributesModule } from './user-attributes/user-attributes.module';
import { DataFolderHasDataModule } from './data-folder-has-data/data-folder-has-data.module';

@Module({
  imports: [PrismaModule, UserModule, DataFolderModule, DataModule, PermissionsModule, AttributesModule, UserAttributesModule, DataFolderHasDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

---

## Prisma module

**Filename: prisma.module.ts**

```Typescript
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

```

---

**Filename: prisma.service.ts**

```Typescript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}


```

## User module

**Filename: user.module.ts**

```Typescript
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}

```

---

**Filename: user.service.ts**

```Typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        userAttributes: true,
        dataFolders: true,
      },
    });
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        userAttributes: true,
        dataFolders: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return user;
  }

  async updateOne(userId: string, data: Prisma.UserUpdateInput): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async deleteOne(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.user.delete({
      where: { id: userId },
    });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
}
```

---

**Filename: user.controller.ts**

```Typescript
import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() userData: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.userService.updateOne(id, userData);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<User> {
    return this.userService.deleteOne(id);
  }

  @Post()
  async create(@Body() userData: Prisma.UserCreateInput): Promise<User> {
    return this.userService.create(userData);
  }
}

```

## User attributes module

**Filename: user-attributes.module.ts**

```Typescript
import { Module } from '@nestjs/common';
import { UserAttributesService } from './user-attributes.service';
import { UserAttributesController } from './user-attributes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserAttributesService],
  controllers: [UserAttributesController],
})
export class UserAttributesModule {}
```

**Filename: user-attributes.service.ts**

```Typescript
// user-attributes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserAttributes, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserAttributesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserAttributes[]> {
    return this.prisma.userAttributes.findMany();
  }

  async findOne(userAttributesId: string): Promise<UserAttributes> {
    const userAttributes = await this.prisma.userAttributes.findUnique({
      where: {
        id: userAttributesId,
      },
    });

    if (!userAttributes) {
      throw new NotFoundException(
        `UserAttributes with ID ${userAttributesId} not found`,
      );
    }

    return userAttributes;
  }

  async create(
    data: Prisma.UserAttributesCreateInput,
  ): Promise<UserAttributes> {
    return this.prisma.userAttributes.create({
      data,
    });
  }

  async updateOne(
    userAttributesId: string,
    data: Prisma.UserAttributesUpdateInput,
  ): Promise<UserAttributes> {
    const userAttributes = await this.prisma.userAttributes.findUnique({
      where: { id: userAttributesId },
    });

    if (!userAttributes) {
      throw new NotFoundException(
        `UserAttributes with ID ${userAttributesId} not found`,
      );
    }

    return this.prisma.userAttributes.update({
      where: { id: userAttributesId },
      data,
    });
  }

  async deleteOne(userAttributesId: string): Promise<UserAttributes> {
    const userAttributes = await this.prisma.userAttributes.findUnique({
      where: { id: userAttributesId },
    });

    if (!userAttributes) {
      throw new NotFoundException(
        `UserAttributes with ID ${userAttributesId} not found`,
      );
    }

    return this.prisma.userAttributes.delete({
      where: { id: userAttributesId },
    });
  }
  // Add other methods as needed...
}

```

**Filename: user-attributes.controller.ts**

```Typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserAttributes, Prisma } from '@prisma/client';
import { UserAttributesService } from './user-attributes.service';

@Controller('user-attributes')
export class UserAttributesController {
  constructor(private readonly userAttributesService: UserAttributesService) {}

  @Get()
  async findAll(): Promise<UserAttributes[]> {
    return this.userAttributesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserAttributes> {
    return this.userAttributesService.findOne(id);
  }

  @Post()
  async create(
    @Body() data: Prisma.UserAttributesCreateInput,
  ): Promise<UserAttributes> {
    return this.userAttributesService.create(data);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() data: Prisma.UserAttributesUpdateInput,
  ): Promise<UserAttributes> {
    return this.userAttributesService.updateOne(id, data);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<UserAttributes> {
    return this.userAttributesService.deleteOne(id);
  }
}
```

## Attributes module

**Filename: attributes.module.ts**

```Typescript
import { Module } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { AttributesController } from './attributes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AttributesService],
  controllers: [AttributesController],
})
export class AttributesModule {}
```

---

**Filename: attributes.module.ts**

```Typescript
// attributes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Attributes, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttributesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Attributes[]> {
    return this.prisma.attributes.findMany();
  }

  async findOne(attributesId: string): Promise<Attributes> {
    const attributes = await this.prisma.attributes.findUnique({
      where: {
        id: attributesId,
      },
    });

    if (!attributes) {
      throw new NotFoundException(
        `Attributes with ID ${attributesId} not found`,
      );
    }

    return attributes;
  }

  async create(data: Prisma.AttributesCreateInput): Promise<Attributes> {
    return this.prisma.attributes.create({
      data,
    });
  }

  async updateOne(
    attributesId: string,
    data: Prisma.AttributesUpdateInput,
  ): Promise<Attributes> {
    const attributes = await this.prisma.attributes.findUnique({
      where: { id: attributesId },
    });

    if (!attributes) {
      throw new NotFoundException(
        `Attributes with ID ${attributesId} not found`,
      );
    }

    return this.prisma.attributes.update({
      where: { id: attributesId },
      data,
    });
  }

  async deleteOne(attributesId: string): Promise<Attributes> {
    const attributes = await this.prisma.attributes.findUnique({
      where: { id: attributesId },
    });

    if (!attributes) {
      throw new NotFoundException(
        `Attributes with ID ${attributesId} not found`,
      );
    }

    return this.prisma.attributes.delete({
      where: { id: attributesId },
    });
  }
}
```

---

**Filename: attributes.controller.ts**

```Typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Attributes, Prisma } from '@prisma/client';
import { AttributesService } from './attributes.service';

@Controller('attributes')
export class AttributesController {
  constructor(private readonly attributesService: AttributesService) {}

  @Get()
  async findAll(): Promise<Attributes[]> {
    return this.attributesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Attributes> {
    return this.attributesService.findOne(id);
  }

  @Post()
  async create(
    @Body() data: Prisma.AttributesCreateInput,
  ): Promise<Attributes> {
    return this.attributesService.create(data);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() data: Prisma.AttributesUpdateInput,
  ): Promise<Attributes> {
    return this.attributesService.updateOne(id, data);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<Attributes> {
    return this.attributesService.deleteOne(id);
  }
}
```

## Permissions module

**Filename: permissions.module.ts**

```Typescript
import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PermissionsService],
  controllers: [PermissionsController],
})
export class PermissionsModule {}
```

---

**Filename: permissions.service.ts**

```Typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { Permissions, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Permissions[]> {
    return this.prisma.permissions.findMany();
  }

  async findOne(permissionsId: string): Promise<Permissions> {
    const permissions = await this.prisma.permissions.findUnique({
      where: {
        id: permissionsId,
      },
    });

    if (!permissions) {
      throw new NotFoundException(
        `Permissions with ID ${permissionsId} not found`,
      );
    }

    return permissions;
  }

  async create(data: Prisma.PermissionsCreateInput): Promise<Permissions> {
    return this.prisma.permissions.create({
      data,
    });
  }

  async updateOne(
    permissionsId: string,
    data: Prisma.PermissionsUpdateInput,
  ): Promise<Permissions> {
    const permissions = await this.prisma.permissions.findUnique({
      where: { id: permissionsId },
    });

    if (!permissions) {
      throw new NotFoundException(
        `Permissions with ID ${permissionsId} not found`,
      );
    }

    return this.prisma.permissions.update({
      where: { id: permissionsId },
      data,
    });
  }

  async deleteOne(permissionsId: string): Promise<Permissions> {
    const permissions = await this.prisma.permissions.findUnique({
      where: { id: permissionsId },
    });

    if (!permissions) {
      throw new NotFoundException(
        `Permissions with ID ${permissionsId} not found`,
      );
    }

    return this.prisma.permissions.delete({
      where: { id: permissionsId },
    });
  }
}
```

---

**Filename: permissions.controller.ts**

```Typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Permissions, Prisma } from '@prisma/client';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Get()
  async findAll(): Promise<Permissions[]> {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Permissions | null> {
    return this.permissionsService.findOne(id);
  }

  @Post()
  async create(
    @Body() data: Prisma.PermissionsCreateInput,
  ): Promise<Permissions> {
    return this.permissionsService.create(data);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() data: Prisma.PermissionsUpdateInput,
  ): Promise<Permissions> {
    return this.permissionsService.updateOne(id, data);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<Permissions> {
    return this.permissionsService.deleteOne(id);
  }
}
```

## Data folder module

**Filename: data-folder.module.ts**

```Typescript
import { Module } from '@nestjs/common';
import { DataFolderController } from './data-folder.controller';
import { DataFolderService } from './data-folder.service';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [DataFolderController],
  providers: [DataFolderService],
})
export class DataFolderModule {}
```

---

**Filename: data-folder.service.ts**

```Typescript
// data-folder.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { DataFolder, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DataFolderService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<DataFolder[]> {
    return this.prisma.dataFolder.findMany({
      include: {
        data: true,
      },
    });
  }

  async findOne(dataFolderId: string): Promise<DataFolder> {
    const dataFolder = await this.prisma.dataFolder.findUnique({
      where: {
        id: dataFolderId,
      },
      include: {
        data: true,
      },
    });

    if (!dataFolder) {
      throw new NotFoundException(
        `DataFolder with ID ${dataFolderId} not found`,
      );
    }

    return dataFolder;
  }

  async create(
    userId: string,
    data: Prisma.DataFolderCreateInput,
  ): Promise<DataFolder> {
    return this.prisma.dataFolder.create({
      data: {
        ...data,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async updateOne(
    dataFolderId: string,
    data: Prisma.DataFolderUpdateInput,
  ): Promise<DataFolder> {
    const dataFolder = await this.prisma.dataFolder.findUnique({
      where: { id: dataFolderId },
    });

    if (!dataFolder) {
      throw new NotFoundException(
        `DataFolder with ID ${dataFolderId} not found`,
      );
    }

    return this.prisma.dataFolder.update({
      where: { id: dataFolderId },
      data,
    });
  }

  async deleteOne(dataFolderId: string): Promise<DataFolder> {
    const dataFolder = await this.prisma.dataFolder.findUnique({
      where: { id: dataFolderId },
    });

    if (!dataFolder) {
      throw new NotFoundException(
        `DataFolder with ID ${dataFolderId} not found`,
      );
    }

    return this.prisma.dataFolder.delete({
      where: { id: dataFolderId },
    });
  }
}
```

---

**Filename: data-folder.controller.ts**

```Typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DataFolderService } from './data-folder.service';
import { DataFolder, Prisma } from '@prisma/client';

@Controller('data-folder')
export class DataFolderController {
  constructor(private dataFolderService: DataFolderService) {}

  @Get()
  async findAll(): Promise<DataFolder[]> {
    return this.dataFolderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DataFolder | null> {
    return this.dataFolderService.findOne(id);
  }

  @Post()
  async create(
    @Body() data: { userId: string; folder: Prisma.DataFolderCreateInput },
  ): Promise<DataFolder> {
    return this.dataFolderService.create(data.userId, data.folder);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() dataFolderData: Prisma.DataFolderUpdateInput,
  ): Promise<DataFolder> {
    return this.dataFolderService.updateOne(id, dataFolderData);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<DataFolder> {
    return this.dataFolderService.deleteOne(id);
  }
}
```

## Data folder has data module

**Filename: dto/data-folder-has-data.ts**

```Typescript
export class CreateDataFolder_has_DataDto {
  DataFolder_id: string;
  Data_id: string;
}
```

---

**Filename: data-folder-has-data.module.ts**

```Typescript
import { Module } from '@nestjs/common';
import { DataFolderHasDataService } from './data-folder-has-data.service';
import { DataFolderHasDataController } from './data-folder-has-data.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DataFolderHasDataService],
  controllers: [DataFolderHasDataController],
})
export class DataFolderHasDataModule {}
```

---

**Filename: data-folder-has-data.module.ts**

```Typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DataFolderHasDataService {
  constructor(private prisma: PrismaService) {}

  async create(DataFolder_id: string, Data_id: string) {
    return this.prisma.dataFolder_has_Data.create({
      data: {
        DataFolder_id: DataFolder_id,
        Data_id: Data_id,
      },
    });
  }

  async findAll() {
    return this.prisma.dataFolder_has_Data.findMany();
  }

  async findOne(DataFolder_id: string, Data_id: string) {
    const dataFolder_has_Data =
      await this.prisma.dataFolder_has_Data.findUnique({
        where: {
          Data_id_DataFolder_id: {
            Data_id: Data_id,
            DataFolder_id: DataFolder_id,
          },
        },
      });

    if (!dataFolder_has_Data) {
      throw new NotFoundException(
        `Record with Data_id ${Data_id} and DataFolder_id ${DataFolder_id} not found`,
      );
    }

    return dataFolder_has_Data;
  }

  async delete(DataFolder_id: string, Data_id: string) {
    const dataFolder_has_Data =
      await this.prisma.dataFolder_has_Data.findUnique({
        where: {
          Data_id_DataFolder_id: {
            Data_id: Data_id,
            DataFolder_id: DataFolder_id,
          },
        },
      });

    if (!dataFolder_has_Data) {
      throw new NotFoundException(
        `Record with Data_id ${Data_id} and DataFolder_id ${DataFolder_id} not found`,
      );
    }

    return this.prisma.dataFolder_has_Data.delete({
      where: {
        Data_id_DataFolder_id: {
          Data_id: Data_id,
          DataFolder_id: DataFolder_id,
        },
      },
    });
  }
}
```

---

**Filename: data-folder-has-data.module.ts**

```Typescript
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { DataFolderHasDataService } from './data-folder-has-data.service';
import { CreateDataFolder_has_DataDto } from 'src/data-folder-has-data/dto/data-folder-has-data-create';

@Controller('data-folder-has-data')
export class DataFolderHasDataController {
  constructor(
    private readonly DataFolderHasDataService: DataFolderHasDataService,
  ) {}

  @Post()
  async create(
    @Body() createDataFolder_has_DataDto: CreateDataFolder_has_DataDto,
  ) {
    return this.DataFolderHasDataService.create(
      createDataFolder_has_DataDto.DataFolder_id,
      createDataFolder_has_DataDto.Data_id,
    );
  }

  @Get()
  async findAll() {
    return this.DataFolderHasDataService.findAll();
  }

  @Get(':DataFolder_id/:Data_id')
  async findOne(
    @Param('DataFolder_id') DataFolder_id: string,
    @Param('Data_id') Data_id: string,
  ) {
    return this.DataFolderHasDataService.findOne(DataFolder_id, Data_id);
  }

  @Delete(':DataFolder_id/:Data_id')
  async delete(
    @Param('DataFolder_id') DataFolder_id: string,
    @Param('Data_id') Data_id: string,
  ) {
    return this.DataFolderHasDataService.delete(DataFolder_id, Data_id);
  }
}
```

## Data module

**Filename: data.module.ts**

```Typescript
import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DataService],
  controllers: [DataController],
})
export class DataModule {}
```

---

**Filename: data.service.ts**

```Typescript
// data.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Data, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Data[]> {
    return this.prisma.data.findMany();
  }
  async findOne(dataId: string): Promise<Data> {
    const data = await this.prisma.data.findUnique({
      where: {
        id: dataId,
      },
    });

    if (!data) {
      throw new NotFoundException(`Data with ID ${dataId} not found`);
    }

    return data;
  }

  async create(data: Prisma.DataCreateInput): Promise<Data> {
    return this.prisma.data.create({
      data,
    });
  }

  async updateOne(dataId: string, data: Prisma.DataUpdateInput): Promise<Data> {
    const dataItem = await this.prisma.data.findUnique({
      where: { id: dataId },
    });

    if (!dataItem) {
      throw new NotFoundException(`Data with ID ${dataId} not found`);
    }

    return this.prisma.data.update({
      where: { id: dataId },
      data,
    });
  }

  async deleteOne(dataId: string): Promise<Data> {
    const dataItem = await this.prisma.data.findUnique({
      where: { id: dataId },
    });

    if (!dataItem) {
      throw new NotFoundException(`Data with ID ${dataId} not found`);
    }

    return this.prisma.data.delete({
      where: { id: dataId },
    });
  }
}
```

---

**Filename: data.controller.ts**

```Typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { Data, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Data[]> {
    return this.prisma.data.findMany();
  }
  async findOne(dataId: string): Promise<Data> {
    const data = await this.prisma.data.findUnique({
      where: {
        id: dataId,
      },
    });

    if (!data) {
      throw new NotFoundException(`Data with ID ${dataId} not found`);
    }

    return data;
  }

  async create(data: Prisma.DataCreateInput): Promise<Data> {
    return this.prisma.data.create({
      data,
    });
  }

  async updateOne(dataId: string, data: Prisma.DataUpdateInput): Promise<Data> {
    const dataItem = await this.prisma.data.findUnique({
      where: { id: dataId },
    });

    if (!dataItem) {
      throw new NotFoundException(`Data with ID ${dataId} not found`);
    }

    return this.prisma.data.update({
      where: { id: dataId },
      data,
    });
  }

  async deleteOne(dataId: string): Promise<Data> {
    const dataItem = await this.prisma.data.findUnique({
      where: { id: dataId },
    });

    if (!dataItem) {
      throw new NotFoundException(`Data with ID ${dataId} not found`);
    }

    return this.prisma.data.delete({
      where: { id: dataId },
    });
  }
}
```
