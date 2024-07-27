describe('Форма логина и пароля', function () {

    it('Правильный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');      //Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');    //Ввели верный пароль
         cy.get('#loginButton').click();        //Нажали кнопку Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверили, что всплывает окно успеха с нужным текстом
         cy.get('#messageHeader').should('be.visible');     //Текст в окне видимый
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Крестик в окне видимый
         cy.get('#exitMessageButton > .exitIcon').click();  //На крестик можно нажать
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');   //Зашли на сайт
        cy.get('#forgotEmailButton').click();   //Нажали на кнопку Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввели почту
        cy.get('#restoreEmailButton').click();  //Нажали на кнопку Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверили, что в окне нужный текст
        cy.get('#messageHeader').should('be.visible');   //Текст в окне видимый
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Крестик в окне видимый
        cy.get('#exitMessageButton > .exitIcon').click();  //На крестик можно нажать
    })
   
    it('Авторизация с неправильным паролем', function () {
        cy.visit('https://login.qa.studio/');   //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio15');    //Ввели неверный пароль
        cy.get('#loginButton').click();        //Нажали кнопку Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверили, что в окне нужный текст
        cy.get('#messageHeader').should('be.visible');   //Текст в окне видимый
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Крестик в окне видимый
        cy.get('#exitMessageButton > .exitIcon').click();  //На крестик можно нажать
    })

    it('Авторизация с неправильным логином', function () {
        cy.visit('https://login.qa.studio/');   //Зашли на сайт
        cy.get('#mail').type('german@dolnik.ru'); //Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1');    //Ввели верный пароль
        cy.get('#loginButton').click();        //Нажали кнопку Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверили, что в окне нужный текст
        cy.get('#messageHeader').should('be.visible');   //Текст в окне видимый
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Крестик в окне видимый
        cy.get('#exitMessageButton > .exitIcon').click();  //На крестик можно нажать
    })

    it('Авторизация с логином без @', function () {
        cy.visit('https://login.qa.studio/');   //Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1');    //Ввели верный пароль
        cy.get('#loginButton').click();        //Нажали кнопку Войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверили, что в окне нужный текст
        cy.get('#messageHeader').should('be.visible');   //Текст в окне видимый
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Крестик в окне видимый
        cy.get('#exitMessageButton > .exitIcon').click();  //На крестик можно нажать
    })

    it('Логин разного регистра', function () {
        cy.visit('https://login.qa.studio/');   //Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели верный логин разным регистром
        cy.get('#pass').type('iLoveqastudio1');    //Ввели верный пароль
        cy.get('#loginButton').click();        //Нажали кнопку Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверили, что в окне нужный текст
        cy.get('#messageHeader').should('be.visible');   //Текст в окне видимый
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Крестик в окне видимый
        cy.get('#exitMessageButton > .exitIcon').click();  //На крестик можно нажать
    })
 })