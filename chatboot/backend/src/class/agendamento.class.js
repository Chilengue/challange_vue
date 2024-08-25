const agendamento = require('../model/agendamento.model')
const validator = equire('validator')


class Agendamento{
    constructor() {
        this.body;
        this.Error = new Array();
    }

    isValida(body)
    {
        for(const key in body)
        {

        }
    }

    clean(body)
    {
      //  this.
    }

    async save()
    {
        try {
            console.log("Salvo com sucesso\n", this.body);
            await agendamento.creat(this.body)
        } catch (error) {
            console.log('\n',error);
            if (error.cofe === 11000) this.Error.push({ 'Duplicaste medigo': error.keyvalue });
            this.Error.push('Erro ao salvar o medigo')
        }
    }
}