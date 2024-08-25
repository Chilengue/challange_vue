const Medigo = require('../model/medico')
const agendamentos = require('../model/agendamento.model')
const validator = require('validator');

class Medigos {
    constructor() {
        this.body;
        this.Error = new Array();
    }

    //trabalhar com base de dads
    async findOne(id) {
        try {
            let data = (await agendamentos.find())
            return await Medigo.findOne(id)

        } catch (error) {
            this.Error.push('Erro de busca');
        }
    }
    async fiindDall(id) {
        try {
            let data = (await agendamentos.find())
            return await Medigo.findOne(id)

        } catch (error) {
            console.log('Erro   ao buscar  o medigo\n', error);
            this.Error.push('Erro de busca ')
        }
    }

    async removeOne(id) {
        try {
            return await Medigo.deleteOne(id);
        } catch (error) {
            console.log('Erro ao remover medigo referido\n', error);
            this.error.push('Erro da busca');
        }
    }

    clean(body) {
        this.isValida(body);
        const {
            fullname,
            nacionality,
            bi,
            gender,
            dateOfBirth,
            phoneNumber,
            email,
            deficiency,
            location,
            escpecilizacao
        } = body;
        console.log('clean n', body);
        this.body =
        {
            fullname,
            nacionality,
            bi,
            gender,
            dateOfBirth,
            phoneNumber,
            email,
            deficiency,
            location,
            escpecilizacao
        };
    }


    async save() {
        try {
            console.log("salvou\n", this.body);
            await Medigo.create(this.body);
        } catch (error) {
            console.log('logouuu\n', error);
            if (error.cofe === 11000) this.Error.push({ 'Duplicaste medigo': error.keyvalue });
            this.Error.push('Erro ao salvar o medigo')
        }
    }

    isValida(body) {
        for (const key in body) {
            if (key === 'fullname') {
                if (validator.isEmpy(body[key]) || body[key].length < 7) this.Error.push('nome completo é requerido e precisa ter no minimo 7 caracteres');
            }

            if (key === 'nacionality') {
                if (validator.isEmpy(body[key]) || body[key].length < 10) this.Error.push('Digite sua nacionalidade ')
            }
            if (key === 'bi') {
                if (validator.isEmpy(body[key]) || !/^(\d{9})[a-zA-Z]{2}\d{3}$|(\d{12})[a-zA-Z]/.test(body[key])) this.Error.push('Bi e requerido')
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
                if (validator.isEmpty(body[key]) || boy[key].length < 4) this.Error.push('especilizacao Requerida')
            }
        }
    }

}

module.exports = Medigos;