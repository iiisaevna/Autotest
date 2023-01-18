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
    get nameOrganization(){return $('textarea[name="organization-name"]')}
    get organization(){return $('textarea[name="organization"]')}
    get comment() {return $('textarea[name="comment"]')}
    get sferaDe(){return $('div[class="mat-select-arrow-wrapper"]')}
    get choice() {return $('[title="Воздушный флот"]')}
    get saveChange() {return $('//button[contains(text(), "Сохранить")]')}
    get buttonYes() {return $('button[class="mat-button modal-btn-ok"]') }
    get close(){return $('div[class="close"]')}
    
    //get openSearh(){return $('form.se[class="search-form user-search-form with-options ng-pristine ng-valid ng-touched"]arch-form')}
    //get profObl(){return $('div[class="c-profession-label"]')}






    


    async open() {
        await browser.url(browser.options.baseUrl + 'companies');
        await this.createLegalButton.waitForDisplayed({ timeout: 5000 });
        await this.createLegalButton.waitForClickable({ timeout: 5000 });
    }
}
module.exports = new LegalPage()