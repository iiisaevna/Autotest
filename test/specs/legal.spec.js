const LoginPage = require("../pageobjects/LoginPage")
const LegalPage = require("../pageobjects/LegalsPage");

describe('Legal Organization test', () => {
    beforeEach(async () =>{
        await LoginPage.open();
        await LoginPage.dologin();
        await LoginPage.createClientButton.waitForDisplayed({timeout: 10000});

    })
    


    it('Create Organization', async () =>{
        await LegalPage.open();
        await browser.pause(10000);
        await LegalPage.createLegalButton.click();
        await LegalPage.addCompanyModelPage.waitForDisplayed({timeout: 10000})
        await LegalPage.companyName.setValue("Цветок");
        await LegalPage.tradeName.setValue("Цветок");
        await LegalPage.sfera.click();
        await LegalPage.activytiFirstOptions.click();
        await browser.pause(10000);
        await LegalPage.description.setValue("Описание компании Цветок")
        await LegalPage.saveCompany.click();
        await browser.pause(10000);
        await browser.acceptAlert();
    })

    afterEach('Clear browser', async() =>{
        await browser.reloadSession();
    })



    it('Change Organization', async () => {
       await LegalPage.open();
       await browser.pause(10000);
       await LegalPage.openFirstCompanyDelails.click();
       await LegalPage.editModelPage.waitForDisplayed({timeout: 10000})
       await LegalPage.bonusCard.click();
       await LegalPage.number.clearValue();
       await LegalPage.number.setValue('177');
       await LegalPage.saveNumber.click();
       await LegalPage.nameOrganization.clearValue();
       await LegalPage.nameOrganization.setValue('Gigi');
       await LegalPage.organization.clearValue();
       await LegalPage.organization.setValue('Gigi');
       await LegalPage.comment.clearValue();
       await LegalPage.comment.setValue('Это новое описание компании Gigi');
       await LegalPage.sferaDe.click();
       await LegalPage.choice.click();
       await LegalPage.saveChange.click();
       await browser.pause(5000);
       await LegalPage.buttonYes.click();
       await browser.pause(5000);
       await LegalPage.close.click();
       await browser.acceptAlert();

       
    })

    afterEach('Clear browser', async() =>{
       await browser.reloadSession();
   })

    // it('should open Search: Prof.Obl Filter', async()=>{
    //     await LegalPage.open();
    //     await LegalPage.createLegalButton.click();
    //     await browser.pause(5000);
    //     await LegalPage.addCompanyModelPage.waitForDisplayed({timeout: 10000})
    //     await LegalPage.openSearh.click();
    //     await browser.pause(10000);
    //     await LegalPage.openSearh.profObl.click();
        


        

    // })
})