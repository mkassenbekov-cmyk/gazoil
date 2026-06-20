# GitHub Setup

## 1. Создать репозиторий

На GitHub создайте новый репозиторий:

```text
gazoil-crm
```

Лучше создать пустой репозиторий без README, потому что README уже есть в проекте.

## 2. Подключить remote

В папке проекта выполнить:

```bash
git remote add origin https://github.com/YOUR_USERNAME/gazoil-crm.git
```

Замените `YOUR_USERNAME` на ваш логин GitHub.

## 3. Отправить код

```bash
git branch -M main
git push -u origin main
```

## 4. Дальше

После подключения GitHub каждое изменение можно сохранять так:

```bash
git add .
git commit -m "Update CRM prototype"
git push
```

