class formPage {

    // =========================
    // SELETORES
    // =========================

    get menuForm() { return $('~Forms'); }

    get campoTexto() { return $('~text-input'); }

    get labelResultado() { return $('~input-text-result'); }

    get dropdown() { return $('~Dropdown'); }

    get opcao() { return $('android=new UiSelector().text("webdriver.io is awesome")'); }

    get switchBtn() { return $('~switch'); }

    get botaoActive() { return $('~button-Active'); }

    get mensagem() { return $('id=android:id/message'); }


    // =========================
    // MÉTODOS
    // =========================

    async abrirMenuForm() {
        await this.menuForm.click();
    }

    async preencherTexto(texto) {
        await this.campoTexto.setValue(texto);
    }

    async validarTexto() {
        return await this.labelResultado.getText();
    }

    async selecionarOpcao() {
        await this.dropdown.click();
        await this.opcao.waitForDisplayed({ timeout: 5000 });
        await this.opcao.click();
    }

    // ✅ VALIDAÇÃO CORRETA (BOOLEAN)
    async validarOpcaoSelecionada() {
        await this.opcao.waitForDisplayed({ timeout: 5000 });
        return await this.opcao.isDisplayed();
    }

    async clicarSwitch() {
        await this.switchBtn.click();
    }

    async clicarBotao() {
        await this.botaoActive.click();
    }

    async validarMensagem() {
        await this.mensagem.waitForDisplayed({ timeout: 5000 });
        return await this.mensagem.isDisplayed();
    }

}

export default new formPage();