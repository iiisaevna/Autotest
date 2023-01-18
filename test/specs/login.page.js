const LoginPage = require('../pageobjects/LoginPage');



describe('Login page on Navigator CRM',() => {
    beforeEach('Clear browser', async() =>{

    })
    afterEach('Clear browser', async () =>{
        
    })

    it('should login', async () => {
        await browser.url('http://167.114.201.175:5000/login');
        //ввести логин
        await LoginPage.loginField.setValue('Admin');
        await browser.pause(5000);
        //ввести пороль
        await (await browser.$('input[name = "password"]')).setValue('Admin@Navi');
        await (await browser.$('button[type = "submit"]')).click();
        await expect(browser).toHaveUrlContaining('clients')
        await browser.pause(5000);

    })

    it('should fail login', async () => {
        await browser.url('http://167.114.201.175:5000/login');
        //ввести логин
        await (await browser.$('input[name = "userName"]')).setValue('Admin');
        //ввести пороль
        await (await browser.$('input[name = "password"]')).setValue('Admin@Navi1');
        await (await browser.$('button[type = "submit"]')).click();
        await expect(browser).toHaveUrlContaining('login')
        await browser.pause(5000);

    })
})