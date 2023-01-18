class LegalPage{
    get createLegalButton() { return $('button[class="clients-add-user-dialog crm-button"]')}
    get addCompanyModelPage() { return $('div[class="modal-window company"]')}
    get companyName() { return this.addCompanyModelPage.$('input[formcontrolname="companyName"]')}
    get tradeName() { return this.addCompanyModelPage.$('input[formcontrolname="tradeName"]')}
    get sfera() {return this.addCompanyModelPage.$('mat-select[formcontrolname="occupation"]')}
    get activytiFirstOptions() {return $('[class="cdk-overlay-container"] [title="Издательства / полиграфия"]')}
    get description () {return this.addCompanyModelPage.$('[formcontrolname="comment"]')}
    get saveCompany () {return this.addCompanyModelPage.$('button[class="save"]')}



    get openFirstCompanyDelails(){return $('table.crm-navigator-table tbody tr')}
    get editModelPage(){return $('div[class="modal-window company"]')}
    get bonusCard(){return this.editModelPage.$('span[class="editIcon"]')}
    get number(){return $('input[formcontrolname="cardNo"]')}
    get saveNumber() {return $('//mat-dialog-container//button[contains(text(), "Сохранить")]')}
    get nameCompany(){return $('input[name="organization-name"]')}
    get nameOrganization(){return $('inputname="organization"]')}
    get sferaDe(){return $('div[class="mat-select-arrow-wrapper"]')}
    //get choice() {return this.editModelPage.$('[title="Воздушный флот"]')}
    //get comment() {return this.editModelPage.$('[name="comment"]')}
    //get saveChange() {return this.editModelPage.$('//button[contains(text(), "Сохранить")]')}






    


    async open() {
        await browser.url(browser.options.baseUrl + 'companies');
        await this.createLegalButton.waitForDisplayed({ timeout: 5000 });
        await this.createLegalButton.waitForClickable({ timeout: 5000 });
    }
}
module.exports = new LegalPage()