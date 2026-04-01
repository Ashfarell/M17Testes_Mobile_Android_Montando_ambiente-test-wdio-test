import formPage from '../pageobjects/forms.page.js';

describe('Automação - Fluxo completo de cadastro no WebDriverIO', () => {

    it('Deve executar o fluxo completo do formulário com sucesso', async () => {

        // abrir tela
        await formPage.abrirMenuForm();

        // preencher texto
        await formPage.preencherTexto("Teste Appium");
        expect(await formPage.validarTexto()).toEqual("Teste Appium");

        // selecionar dropdown
        await formPage.selecionarOpcao();
        expect(await formPage.validarOpcaoSelecionada()).toBe(true);

        // clicar switch
        await formPage.clicarSwitch();

        // clicar botão
        await formPage.clicarBotao();

        // validar mensagem
        expect(await formPage.validarMensagem()).toBe(true);

    });

});