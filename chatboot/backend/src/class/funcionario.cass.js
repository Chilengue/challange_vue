const funcinarios = require('../model/funcionario');
const validator = require('validator')

class Funcinario {
    constructor() {
        this.body;
        this.Error = new Array();
    }
    clean(body) {
        this.isValida(body);
        const {
            fullname,
            nacionality,
            bi,
            age,
            gendar,
            dateOfBirth,
            phoneNumber,
            email,
            dificiency,
            location,
            escpecilizacao,
            Hora_entrada,
            Hora_saida


        } = body;
        console.log("clean \n", body)

        this.body = {

            fullname,
            nacionality,
            bi,
            age,
            gendar,
            dateOfBirth,
            phoneNumber,
            email,
            dificiency,
            location,
            escpecilizacao,
            Hora_entrada,
            Hora_saida
        }
    }
    isValida(body) {
        for (const key in body) {
            if (key === 'fullname') {
                if (validator.isEmpty(body[key]) || body[key].length < 7) this.Error.push('nome completo é requerido e precisa ter no minimo 7 caracteres');
            }
            if (key === 'nacionality') {
                if (validator.isEmpty(body[key]) || body[key].
                    length < 10) this.Error.push('Digite sua nacionalidade');
            }
            if (key === 'bi') {
                if (validator.isEmpty(body[key]) || !/^(\d{9})[a-zA-Z]{2}\d{3}$|(\d{12})[a-zA-Z]/.test(body[key])) this.Error.push('BI é requerido');
            }

            if (key === 'gendar') {
                if (validator.isEmpty(body[key]) || body[key].length !== 1) this.Error.push('sexo é requerido');
            }
            if (key === 'dateOfBirth') {
                if (validator.isEmpty(body[key]) || !validator.isDate(body[key])) this.Error.push('data de nascimento é requerido');
            }

            if (key === 'phoneNumber') {
                if (validator.isEmpty(body[key]) || !validator.isMobilePhone(body[key])) this.Error.push('número de telefone é requerido');
            }

            if (key === 'email') {
                if (!validator.isEmail(body[key])) this.Error.push('E-mail invalido');
            }

            if (key === 'dificiency') {
                if (validator.isEmpty(body[key]) || !validator.isBoolean(body[key], { loose: false })) this.Error.push('doficiency é requerido');
            }

            if (key === 'location') {
                if (validator.isEmpty(body[key]) || body[key].length < 4) this.Error.push('localização é requerido');
            }
            if (key === 'escpecilizacao') {
                if (validator.isEmpty(body[key]) || body[key].length < 4) this.Error.push('especializcao é requerido');
            }
            if (key === "Hora_entrada") {
                if (validator.isEmpty(body[key]) || body[key].length) this.Error.push('tempo de entrada requirido')
            }
            if (key === " Hora_saida|") {
                if (validator.isEmpty(body[key]) || body[key].length) this.Error.push('tempo de entrada requirido')
            }


        }
    }
    async save() {
        try {
            console.log("Save\n", this.body);
            await funcinarios.create(this.body);
        } catch (error) {
            console.log('aquiii', error);
            if (error.code === 11000) this.Error.push({ 'duplicate paciente': error.keyValue });
            this.Error.push('Erro ao savar paciente')

        }
    }

}
module.exports = Funcinario;