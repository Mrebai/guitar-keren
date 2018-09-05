import streaming from './streaming'


export default {
    Query:{
        getStreaming(obj,args,ctx){
            return streaming.find().fetch().reverse();
        }
    },
    Mutation:{
        addStreaming(obj,{title,info,link,live},ctx){
            const date = new Date().toISOString();
            const id = streaming.insert({title,date,info,link,live: live || false});
            return streaming.findOne(id);
        },
        editStreaming(obj,{_id,title,info,link},ctx){
            const id = streaming.update({_id},{
                $set:{title,info,link}
            });
            return streaming.findOne(id);
        },
        toggleLive(obj,{_id,live},ctx){
            const id = streaming.update({_id},{
                $set:{live}
            });
            return streaming.findOne(id);
        },
        deleteStreaming(obj,{_id},ctx){
            const id = streaming.remove(_id);
            return streaming.findOne(id);
        }
    }
}