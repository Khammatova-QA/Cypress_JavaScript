describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на нужный сайт
         cy.get('input[type="email"]').type('USER_LOGIN');    // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');    // вводим пароль
         cy.get('button[type="submit"]').click();             // нажимаем на кнопку войти
         cy.get('.header__btns > :nth-child(4)').click();     // нажимаем кнопку Магазин
         cy.get('.available > button').eq(1).click();       // нажимаем на первый доступный к покупке аватар
         cy.get('.credit').type('4620869113632996');          // вводим номер карты
         cy.get('.k_input_ccv').type('125');                  // вводим CVV карты
         cy.get('.k_input_date').type('1225');                // вводим срок действия карты
         cy.get('.k_input_name').type('GELIK');                // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                          // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                 // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();           // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
     })
 })