import whiter from "./whiter";
import streaming from "../streaming/streaming";

    let start = 0;
export default {

    Query:{
        allWriters(obj,args,ctx){
            return whiter.find({},{skip:args.perPage * args.page, limit:args.perPage }).fetch();
        },
        _allWritersMeta(obj,args,ctx){
            return {count :  Math.ceil(whiter.find().count()/args.perPage) };
        },
        Writer(obj,{id},ctx){
            return whiter.findOne({_id:id});
        }
    },

    Writer : {
        id: (post) => {
            return (post._id)
        }
    },
    Mutation:{
        createWriter(obj,{name,age,rank,email},ctx){
            const id = whiter.insert({name,age,rank,email});
            return whiter.findOne(id);
        },
        updateWriter(obj,{id,name,age,rank,email},ctx){
            whiter.update({_id:id,},{
                $set:{
                    name,age,rank,email
                }
            });
            return whiter.findOne({_id:id})
        },
        deleteWriter(obj,{id},args){

             res = whiter.remove({_id:id});

            return (((res)) !== 0)? {data:id}:{data:"failed "}
        }
    }

}