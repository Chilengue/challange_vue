// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const agendamentoSchema = new Schema({
// 	dataOfMarkup: {
// 		type: Date,
// 		required: true,
// 	},
// 	hourOfMarkup: {
// 		type: String,
// 		required: true,
// 	},
// 	ID_Paciente : [{
// 		type: Schema.Types.ObjectId, ref: 'paciente',
// 		required: true,
// 	}],
// 	ID_Médico: [{
// 		type: Schema.Types.ObjectId, ref: 'medigo',
// 	}],
// 	consultType:  {
// 		type: String,
// 		required: true,
// 	},
// 	status:  {
// 		type: String,
// 		required: true,
// 	},
// 	observacoes:  {
// 		type: String,
// 		required: true,
// 	},
// });


// mongoose.model('agendamentos', agendamentoSchema);
// const  agendamentoSchem= mongoose.model('agendamentos');
// module.exports=agendamentoSchema;