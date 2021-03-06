const store = require('./store');
const Model = require('./model');

function addMessage(user, message){
  
  return new Promise((resolve, reject)=>{

    if(!user||!message){
      console.error('[messagecontroller] No hay usuario o mensaje');
      reject('Faltan datos o son incorrectos.');
      return false;
    }

    const fullMessage = {
      user,
      message,
      date: new Date()
    }
    
    store.add(fullMessage);
    resolve(fullMessage);

  })
}

function getMessages(){
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

function updateMessage(id, message){
  return new Promise(async (resolve, reject) => {
    console.log(id);
    console.log(message);
    if(!id || !message){
      reject('Invalid data');
      return false;
    }else{
      const result = await store.update(id, message)
        resolve(result);
    }
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage
};