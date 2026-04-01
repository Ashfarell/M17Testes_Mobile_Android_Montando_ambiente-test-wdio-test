class LoginPage {
//Seletores
get menuLogin() {
    return $('~Login')
}
get campoEmail(){
    return $('~input-email')
}
get campoSenha(){
    return $('~input-password')
}
get botaLogin(){
    return $('~button-LOGIN')
}
get mensagem(){
    return $('id=android:id/message')
}
//get mensagemErro(){
  //  return $('//android.widget.TextView[@text="Please enter a valid email address"]')
//}

//Métodos c/ ações
async abrirMenu(){
    await this.menuLogin.click()
}   
async preencherLogin(email, senha) {
    await this.campoEmail.clearValue()
    await this.campoEmail.setValue(email)
    await this.campoSenha.clearValue()
    await this.campoSenha.setValue(senha)
    await this.botaLogin.click()
}

async mensagemAlerta(){
return await this.mensagem.getText()
}

async mensagemErro(texto){
    const elemento = $(`//android.widget.TextView[@text="${texto}"]`)  //VAR texto c/ interpolação!
    await expect(elemento).toHaveText(texto)
}



    }
    export default new LoginPage() 