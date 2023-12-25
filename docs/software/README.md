# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

- SQL-скрипт для створення на початкового наповнення бази даних

```SQL
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
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
-- Table `open_data_management_system`.`permissions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`permissions` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`permissions` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(254) NULL DEFAULT NULL,
  `level` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`attributes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`attributes` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`attributes` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(254) NULL DEFAULT NULL,
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
    REFERENCES `open_data_management_system`.`permissions` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`data` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`data` (
  `id` VARCHAR(36) NOT NULL,
  `size` DOUBLE NOT NULL,
  `date` DATETIME NOT NULL,
  `dataType` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(254) NULL DEFAULT NULL,
  `tags` VARCHAR(254) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`user` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`user` (
  `id` VARCHAR(36) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`datafolder`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`datafolder` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`datafolder` (
  `id` VARCHAR(36) NOT NULL,
  `description` VARCHAR(254) NULL DEFAULT NULL,
  `date` DATETIME NOT NULL,
  `owner` VARCHAR(254) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `User_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_DataFolder_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_DataFolder_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `open_data_management_system`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`datafolder_has_data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`datafolder_has_data` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`datafolder_has_data` (
  `DataFolder_id` VARCHAR(36) NOT NULL,
  `Data_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`DataFolder_id`, `Data_id`),
  INDEX `fk_DataFolder_has_Data_DataFolder1_idx` (`DataFolder_id` ASC) VISIBLE,
  INDEX `Data_id_fk_idx` (`Data_id` ASC) VISIBLE,
  CONSTRAINT `Data_id_fk`
    FOREIGN KEY (`Data_id`)
    REFERENCES `open_data_management_system`.`data` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `DataFolder_id_fk`
    FOREIGN KEY (`DataFolder_id`)
    REFERENCES `open_data_management_system`.`datafolder` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `open_data_management_system`.`userattributes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `open_data_management_system`.`userattributes` ;

CREATE TABLE IF NOT EXISTS `open_data_management_system`.`userattributes` (
  `id` VARCHAR(45) NOT NULL,
  `AttributeID` VARCHAR(36) NOT NULL,
  `User_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `AttributeID_UNIQUE` (`AttributeID` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_UserAttributes_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_UserAttributes_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `open_data_management_system`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `id`
    FOREIGN KEY (`AttributeID`)
    REFERENCES `open_data_management_system`.`attributes` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

- RESTfull сервіс для управління даними

Для взаємодії з базою даних я використовував стек технологій: Node.js (фреймворк Nest.js), та PrismaORM.

## Конфігураційний файл PRISMA ORM

```PRISMA

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql" // вказує, що базою даних є MySQL
  url      = env("DATABASE_URL") // задає рядок підключення до бази даних з використанням змінної середовища
}

model DataFolder {
  id          String   @id @default(uuid())
  description String?  @db.VarChar(254)
  date        DateTime @default(now())
  owner       String   @db.VarChar(36)
  name        String   @db.VarChar(254)
  userId      String   @map("User_id")
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
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
  data          Data     @relation(fields: [Data_id], references: [id], onDelete: Cascade)
  dataFolder    DataFolder @relation(fields: [DataFolder_id], references: [id], onDelete: Cascade)

  @@id([Data_id, DataFolder_id])
}



model User {
  id             String           @id @default(uuid())
  username       String           @db.VarChar(45)
  password       String           @db.VarChar(45)
  email          String           @unique @db.VarChar(254)
  dataFolders    DataFolder[]
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
  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)
}

```

## Restfull service

Цей код є точкою запуску restfull сервісу на NestJS. Клас NestFactory імпортується з пакета @nestjs/core, який дозволяє створити екземпляр сервера Nest. Також, клас AppModule імпортується з файлу app.module.ts, який є кореневим модулем сервера. Далі йде визначення асинхронної функції bootstrap, яка створює екземпляр програми, передаючи клас AppModule методу NestFactory.create. Функція bootstrap також запускає HTTP-сервер і прослуховує порт 3000 на наявність вхідних запитів.
Нарешті, функція bootstrap викликається для запуску програми.

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

Цей код є модулем сервера на NestJS. Він імпортує клас Module з пакета @nestjs/common, який використовується для декорування класу AppModule за допомогою декоратора @Module(). Декоратор @Module() надає метадані, які Nest використовує для організації структури сервера.

Модуль програми має чотири властивості: imports, controllers, providers та exports. Властивість imports - це масив інших модулів, від яких залежить модуль додатка. <br/>
Наприклад, PrismaModule імпортується для використання Prisma ORM для доступу до бази даних. <br/>
Властивість controllers - це масив контролерів, які обробляють вхідні запити для модуля додатка. AppController є єдиним контролером у цьому модулі. <br/>Властивість providers - це масив сервісів, які забезпечують функціональність модуля додатка. AppService є єдиним сервісом у цьому модулі.<br/>
Властивість exports - це масив провайдерів, доступних для інших модулів, які імпортують модуль додатка. Ця властивість є необов'язковою і її можна не використовувати, якщо модуль програми не експортує жодних провайдерів.

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

Файл user.service.ts містить клас UserService, який відповідає за виконання операцій над сутністю User за допомогою Prisma ORM. Клас UserService має конструктор, який створює PrismaService, що надає доступ до клієнта Prisma. Клас UserService має п'ять методів:

- **findAll()**: Цей метод повертає масив усіх користувачів у базі даних, включно з їхніми користувацькими атрибутами та теками даних.
- **findOne(userId: string)**: Цей метод отримує ідентифікатор користувача як параметр і повертає користувача з цим ідентифікатором або генерує виключення NotFoundException, якщо користувача не знайдено. Він також включає атрибути користувача та теки даних користувача.
- **updateOne(userId: string, data: Prisma.UserUpdateInput)**: Цей метод отримує ідентифікатор користувача та об'єкт даних як параметри та оновлює користувача з цим ідентифікатором, або генерує виключення NotFoundException, якщо користувача не знайдено. Метод повертає оновленого користувача.
- **deleteOne(userId: string)**: Цей метод отримує ідентифікатор користувача як параметр і видаляє користувача з цим ідентифікатором або генерує виключення NotFoundException, якщо користувача не знайдено. Метод повертає видаленого користувача.
- **create(data: Prisma.UserCreateInput)**: Цей метод отримує об'єкт даних як параметр і створює нового користувача в базі даних. Повертає створеного користувача.

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

Файл user.controller.ts містить клас UserController, який відповідає за обробку вхідних запитів і повернення відповідей клієнту для сутності User. Клас UserController має конструктор, який створює UserService, що забезпечує функціональність для операцій User. Клас UserController має п'ять методів, кожен з яких відповідає окремому методу HTTP-запиту:

- **@Get()**: Цей метод обробляє GET-запити до кінцевої адреси /users і повертає масив усіх користувачів у базі даних шляхом виклику методу userService.findAll().
- **@Get(':id')**: Цей метод обробляє GET-запити до кінцевої адреси /users/:id, де :id - параметр, що представляє ідентифікатор користувача. Він повертає користувача з цим ідентифікатором або null, якщо його не було знайдено за допомогою методу userService.findOne(id).
- **@Patch(':id')**: Цей метод обробляє PATCH-запити до кінцевої точки /users/:id, де :id - параметр, який представляє ідентифікатор користувача. Він приймає об'єкт userData як тіло запиту та оновлює користувача з цим ідентифікатором, викликаючи метод userService.updateOne(id, userData). Він повертає оновленого користувача або генерує виняткову ситуацію, якщо його не знайдено.
- **@Delete(':id')**: Цей метод обробляє запити DELETE до кінцевої адреси /users/:id, де :id - параметр, що представляє ідентифікатор користувача. Він видаляє користувача з цим ID шляхом виклику методу userService.deleteOne(id). Він повертає видаленого користувача або генерує виняткову ситуацію, якщо його не знайдено.
- **@Post()**: Цей метод обробляє POST-запити до кінцевої адреси /users. Він приймає об'єкт userData як тіло запиту і створює нового користувача в базі даних, викликаючи метод userService.create(userData). Він повертає створеного користувача.

Структура інших модулів, таких як DataFolderModule, DataModule, PermissionsModule тощо, досить схожа на UserModule, тому немає потреби пояснювати їх детально. Всі вони мають клас сервісу, який виконує операції над відповідною сутністю за допомогою Prisma ORM, і клас контролера, який обробляє запити та відповіді для відповідної сутності за допомогою декораторів методів HTTP-запитів. Вони також імпортують PrismaModule для доступу до клієнта Prisma.

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
