const LoginPage = require("../pageobjects/LoginPage")
const LegalPage = require("../pageobjects/LegalsPage");
const { sferaDe } = require("../pageobjects/LegalsPage");

describe('Legal Organization test', () => {
    beforeEach(async () =>{
        await LoginPage.open();
        await LoginPage.dologin();
        await LoginPage.createClientButton.waitForDisplayed({timeout: 10000});

    })
    


    it('Create Organization', async () =>{
        await LegalPage.open();
        await LegalPage.createLegalButton.click();
        await browser.pause(5000);
        await LegalPage.addCompanyModelPage.waitForDisplayed({timeout: 10000})
        await LegalPage.companyName.setValue("Цветок");
        await LegalPage.tradeName.setValue("Цветок");
        await LegalPage.sfera.click();
        await LegalPage.activytiFirstOptions.click();
        await LegalPage.description.setValue("Описание компании Цветок")
        await LegalPage.saveCompany.click();
        await browser.acceptAlert();
    })

    afterEach('Clear browser', async() =>{
        await browser.reloadSession();
    })



    it('Change Organization', async () => {
        await LegalPage.open();
        await browser.pause(5000);
        await LegalPage.openFirstCompanyDelails.click();
        await LegalPage.editModelPage.waitForDisplayed({timeout: 10000})
        await LegalPage.bonusCard.click();
        await browser.pause(5000);
        await LegalPage.number.clearValue();
        await LegalPage.number.setValue('179');
        await LegalPage.saveNumber.click();
        await LegalPage.companyName.clearValue();
        await LegalPage.companyName.setValue('Кактус');
        await browser.pause(5000);
        await LegalPage.nameOrganization.clearValue();
        await LegalPage.nameOrganization.setValue('Кактус');
        await browser.pause(5000);
        await LegalPage.sferaDe.click();
        await browser.pause(5000);
        
        //await LegalPage.choice.click();
        //await browser.pause(5000);
        //await LegalPage.comment.clearValue();
        //await LegalPage.comment.setValue('Это новае описание компании Кактус');
        //await LegalPage.saveChange.click();
        //await browser.pause(10000);
    })

    //afterEach('Clear browser', async() =>{
    //    await browser.reloadSession();
   // })

   // it('Filter', async()=>{

   // })
})