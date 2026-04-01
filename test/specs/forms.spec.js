import formPage from '../pageobjects/forms.page.js';

describe('Funcionalidade: Tela de formulário', () => {
   beforeEach(async () => {
      formPage.abrirMenuForm();
   });

   it('Deve validar se o texto foi preenchido corretamente', async () => {
      await formPage.preencherTexto("Teste Appium");
      expect(await formPage.validarTexto()).toEqual("Teste Appium");
      await driver.pause(5000)
   });


   it('Validar a seleção do dropdown', async () => {
      await formPage.selecionarOpcao();
      expect(await formPage.valirOpcao()).toEqual('webdriver.io is awesome')
      await driver.pause(5000)
   });

   it.only('Deve trocar o botão de on para off', async () => {
      //trocar para ON
      const botaoOnOff = await driver.$("accessibility id:switch");
      await botaoOnOff.click();
      await driver.pause(5000)
      //trocar para OFF
      await driver.action('pointer')
         .move({ duration: 0, x: 223, y: 1195 })
         .down({ button: 0 })
         .move({ duration: 1000, x: 120, y: 1208 })
         .up({ button: 0 })
         .perform();  
         await driver.pause(5000)
   })
});
