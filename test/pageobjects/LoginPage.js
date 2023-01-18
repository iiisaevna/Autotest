class LoginPage{
    get loginField() { return $('input[name="userName"]')}
    get passwordField() { return $('input[name="password"]')}
    get submitButton() { return $('button[type="submit"]')}
    get createClientButton() {return $('button.clients-add-user-dialog')}

    async dologin(userName ="Admin", password = "Admin@Navi"){
        await this.loginField.setValue(userName);
        await this.passwordField.setValue(password);
        await this.submitButton.click();
    }

    async open(){
        await browser.url(browser.options.baseUrl + 'login');
    }

}

module.exports = new LoginPage()