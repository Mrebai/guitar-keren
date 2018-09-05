import messages from './messages'


export default {
    Query:{
        getMessage(obj,args,ctx){
            return  messages.find().fetch().reverse();
        }
    },
    Mutation:{
        sendMsg(obj,{name, phone, email,offer,resDate, subject, message},ctx){
            const date = new Date().toISOString();
            const id = messages.insert({name,date, phone, email,offer,resDate, subject, message});

            return messages.findOne(id);
        },
        deleteMsg(obj,{_id},ctx){
            const id = messages.remove(_id);
            return messages.findOne(id);
        }
    }
}