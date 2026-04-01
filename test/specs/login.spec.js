import { it } from 'mocha';
import loginPage from '../pageobjects/login.page';
import LoginPage from '../pageobjects/login.page'

describe('Funcionalidade: Login', () => {

    beforeEach(async () => {
        await driver.reloadSession()
        await LoginPage.abrirMenu()
    })

    it('Deve fazer login com sucesso', async () => { 
        await LoginPage.preencherLogin('teste@teste.com', '12345678')
        await driver.pause(10000)
        expect(await LoginPage.mensagemAlerta()).toEqual('You are logged in!')

        // 👇 evita erro de alert
        try {
            await driver.acceptAlert()
        } catch (error) {
            // não tinha alerta, segue o fluxo
        }
    });

    it('Deve falhar ao fazer login com email inválido', async () => {
        await LoginPage.preencherLogin('teste@teste', '12345678')
        await LoginPage.mensagemErro('Please enter a valid email address')
        //await mensagemErro.waitForDisplayed()
        //expect(await mensagemErro.isDisplayed()).toBe(true)
    });

    it('Deve falhar ao fazer login com senha inválida', async () => {
        await LoginPage.preencherLogin('teste@teste.com', '1234')
        await LoginPage.mensagemErro('Please enter at least 8 characters')

});
})