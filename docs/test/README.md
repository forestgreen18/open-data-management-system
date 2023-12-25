# Тестування працездатності системи

Система була протестована за допомогою інструменту Postman.

Можливий доступ до таких таблиць: Users, Permissions, Attributes, User Attributes, Data, DataFolder та Data_folder_has_data.

#### Початковий стан бази даних.

#### Таблиця користувачів

![Users table](./assets/image.png)

#### Таблиця дозволів

![Permissions table](./assets/image-1.png)

#### Таблиця атрибутів

![Attributes table](./assets/image-2.png)

#### Таблиця атрибутів користувачів

![User attributes table](./assets/image-3.png)

#### Таблиця наборів даних

![Data table](./assets/image-4.png)

#### Таблиця тек з даними

![Data folder table](./assets/image-5.png)

#### Таблиця, що поєднує набори даних із теками даних

![Data folder has data table](./assets/image-6.png)

## User

### Створення

![POST: User create](./assets/image-18.png)

### Отримання усіх користувачів

![GET: get all users](./assets/image-11.png)
![GET: get all users](./assets/image-12.png)
![GET: get all users](./assets/image-13.png)
![GET: get all users](./assets/image-14.png)

### Отримання користувача

![GET: single user](./assets/image-15.png)

### Зміна даних користувача

![PATCH: change single user](./assets/image-16.png)

### Видалення користувача

![DELETE: delete single user](./assets/image-17.png)

## Data folder

### Отримання усі теки з даними

![GET: all data folders](./assets/image-19.png)
![GET: all data folders](./assets/image-20.png)
![GET: all data folders](./assets/image-21.png)

### Створення

![POST: create data folder](./assets/image-22.png)

### Отримання теки з даними

![GET: single data folder](./assets/image-23.png)

### Зміна теки з даними

![PATCH: change single data folder](./assets/image-24.png)

### Видалення теки з даними

![DELETE: delete single data folder](./assets/image-25.png)

## Data

### Отримання усіх наборів даних

![GET: all data sets](./assets/image-26.png)
![Alt text](./assets/image-27.png)

### Створення набору даних

![POST: create a data set](./assets/image-28.png)

### Отримання набору даних

![GET: single data set](./assets/image-29.png)

### Зміна набору даних

![PATCH: change single data set](./assets/image-30.png)

### Видалення набору даних

![DELETE: single data set](./assets/image-31.png)

## Data folder and data

### Отримання усіх запис зв'язку "набір даних - тека"

![GET: all records about data sets and the folders those data sets are stored](./assets/image-32.png)

### Створення

![POST: connect data set and data folder](./assets/image-33.png)

### Отримання одного запису

![GET: single connection of data set and data folder](./assets/image-34.png)

### Видалення запису

![DELETE: delete data set and data folder connection](./assets/image-35.png)

## Permissions

### Отримання всіх дозволів

![GET: all permissions](./assets/image-36.png)

### Створення

![POST: create a single permission](./assets/image-37.png)

### Отримання дозволу

![GET: single permission](./assets/image-38.png)

### Зміна дозволу

![PATCH: update single permission](./assets/image-39.png)

### Видалення дозволу

![DELETE: single permission](./assets/image-40.png)

## Attributes

### Отримання усіх атрибутів

![GET: all attributes](./assets/image-41.png)

### Створення атрибута

![POST: create an attribute](./assets/image-42.png)

### Отримання атрибута

![GET: single attribute](./assets/image-43.png)

### Зміна атрибута

![PATCH: update single attribute](./assets/image-44.png)

### Видалення атрибута

![DELETE: single attribute](./assets/image-45.png)

## User attributes

### Отримати всі атрибути користувачів

![GET: all user attributes](./assets/image-46.png)

### Створити атрибут для користувача

![POST: create user attribute](./assets/image-47.png)

### Отримати атрибут для користувача

![GET: single user attribute](./assets/image-48.png)

### Змінити атрибут для користувача

![PATCH: change user attribute](./assets/image-49.png)

### Видалити атрибут для користувача

![DELETE: singe user attribute](./assets/image-50.png)
