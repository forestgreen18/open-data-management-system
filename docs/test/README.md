# Тестування працездатності системи

_В цьому розділі необхідно вказати засоби тестування, навести вихідні коди тестів та результати тестування._

Початковий стан бази даних.

![Users table](image.png)

![Permissions table](image-1.png)

![Attributes table](image-2.png)

![User attributes table](image-3.png)

![Data table](image-4.png)

![Data folder table](image-5.png)

![Data folder has data table](image-6.png)

## User

### Створення

![POST: User create](image-18.png)

### Отримання усіх користувачів

![GET: get all users](image-11.png)
![GET: get all users](image-12.png)
![GET: get all users](image-13.png)
![GET: get all users](image-14.png)

### Отримання користувача

![GET: single user](image-15.png)

### Зміна даних користувача

![PATCH: change single user](image-16.png)

### Видалення користувача

![DELETE: delete single user](image-17.png)

## Data folder

### Отримання усі теки з даними

![GET: all data folders](image-19.png)
![GET: all data folders](image-20.png)
![GET: all data folders](image-21.png)

### Створення

![POST: create data folder](image-22.png)

### Отримання теки з даними

![GET: single data folder](image-23.png)

### Зміна теки з даними

![PATCH: change single data folder](image-24.png)

### Видалення теки з даними

![DELETE: delete single data folder](image-25.png)

## Data

### Отримання усіх наборів даних

![GET: all data sets](image-26.png)
![Alt text](image-27.png)

### Створення набору даних

![POST: create a data set](image-28.png)

### Отримання набору даних

![GET: single data set](image-29.png)

### Зміна набору даних

![PATCH: change single data set](image-30.png)

### Видалення набору даних

![DELETE: single data set](image-31.png)

## Data folder and data

### Отримання усіх запис зв'язку "набір даних - тека"

![GET: all records about data sets and the folders those data sets are stored](image-32.png)

### Створення

![POST: connect data set and data folder](image-33.png)

### Отримання одного запису

![GET: single connection of data set and data folder](image-34.png)

### Видалення запису

![DELETE: delete data set and data folder connection](image-35.png)

## Permissions

### Отримання всіх дозволів

![GET: all permissions](image-36.png)

### Створення

![POST: create a single permission](image-37.png)

### Отримання дозволу

![GET: single permission](image-38.png)

### Зміна дозволу

![PATCH: update single permission](image-39.png)

### Видалення дозволу

![DELETE: single permission](image-40.png)

## Attributes

### Отримання усіх атрибутів

![GET: all attributes](image-41.png)

### Створення атрибута

![POST: create an attribute](image-42.png)

### Отримання атрибута

![GET: single attribute](image-43.png)

### Зміна атрибута

![PATCH: update single attribute](image-44.png)

### Видалення атрибута

![DELETE: single attribute](image-45.png)
