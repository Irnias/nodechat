const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
const uri = 'mongodb+srv://db_user_garbarino:hdcMIyCTaTo6TJ1Y@cluster0-5j8w8.mongodb.net/platzi_db?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

db.connect(uri, options)
  .then( ()=> console.log('[db] Conectada con exito.'))
  .catch( (e) => console.error('[db] Error en la coneccion', e))

function addMessage(message){
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(){
  // return list;
  const messages = await Model.find();
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  })
  foundMessage.message = message;
  const newMessage = foundMessage.save();
  return newMessage;

}

function deleteMessage(message){

}

module.exports = {
  add: addMessage, 
  list: getMessage,
  // get
  update: updateText,
  // delete: deleteMessage, 
}