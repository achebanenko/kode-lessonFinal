# 5-6 занятие

## Презентация

https://docs.google.com/presentation/d/1LVrbTKAJSDAMVPNIdBziVFq73_MgapH4A8doy0yN8EY/edit?usp=sharing

## Задача

Реализовать функционал авторизации и регистрации в mobile web Utair.

## Дизайн

https://www.figma.com/file/F2lEzZelwEmOyIifgtaiXp/trainee-final-task?node-id=51%3A0

## Требования

1. Авторизация по email/phone. Используем 1 поле. Автоформатирование телефона типа +7 (999) 333-22-22. Валидация данных.
2. Сделать shared/snack . По дефолту показывать 3000мс. Показывать ошибки API или предусмотренные в дизайне в снеках. для ошибок API использовать поле msgUser
3. При успехе регистрации нужно презаполнить форму логина, перейти на страницу sign in и запустить процесс авторизации.
4. При успешном логине сделать запрос GET /account/profile и вывести в консоль(или страницу HOME).

## API

```
Вход, повторная отправка кода подтверждения
POST /account/profile/login
type Body = { login: string }

login - номер телефона (например, '79995554433') или email (например, 'trainee@appkode.ru')

пример ответа:
{"attemptId": "a955002f-9166-4a3c-8d1e-c488c9d772b7", "channel": "phone"}
```

```
Регистрация
POST /account/profile
type Body = { login: string; confirmationGDPRDate: number}

login - номер телефона, например '79995554433'
confirmationGDPRDate - timestamp на момент отправки запроса

```

```
Подтверждение входа
POST /account/profile/login/confirm
type Body = {
  attemptId: string;
  code: string
}

attemptId - из результатов запроса login
code - введенный пользователем 4значный код (например, '1234')

пример ответа:
{"success": true, "id": "some id", "krrParams": {"krrAccessToken": "some access token", "krrRefreshToken": "some refresh tokne", "loginConfirmCookie": "some cookie"}}
```

```
Получение данных профиля
GET /account/profile

пример ответа:
{"profileData": {"address": {}, "block": {}, "cards": [], "categories": [], "channels": {"email": {"verified": true}, "phone": {"verified": true}, "sms": {"verified": true}}, "documents": [{"number": "2400111222", "type": "PS"}], "email": "email@gmail.com", "initials": {"original": {"name": "", "secondName": "", "surname": ""}}, "initialsIsEditable": true, "phone": "+79995554433", "security": {}, "status": {"cardNo": "1024444228"}, "gender": ""}, "bonusData": {"qualifying": 0, "household": 0, "level": null, "redemption": 0, "levelExpire": null}, "profileIsLimited": true}
```

## Создание репозитория

создаете приватный репозиторий
добавляете в коллабораторы:

- vsfront
- nemarta
- igorantonov

### Дедлайн

Дедлайн для вопросов, 22 апреля 12:00 KGD

Пятница, 26 апреля, 12:00 KGD

# Процесс выполнения

## Результат

https://ecstatic-mclean-7b0ebc.netlify.com/  

!!!POST 404  
https://ecstatic-mclean-7b0ebc.netlify.com/api/v8/sessions/guest  

