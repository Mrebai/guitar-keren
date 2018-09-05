import posts from "./posts";
import streaming from "../streaming/streaming";

    let start = 0;
export default {

    Query:{
        allPosts(obj,args,ctx){
            return posts.find({},{skip:args.perPage * args.page, limit:args.perPage }).fetch();
        },
        _allPostsMeta(obj,args,ctx){
            return {count :  Math.ceil(posts.find().count()/args.perPage) };
        },
        Post(obj,{id},ctx){
            return posts.findOne({_id:id});
        }
    },

    Post : {
        id: (post) => {
            return (post._id)
        }
    },
    Mutation:{
        createPost(obj,args,ctx){
            console.log(args)
            const id = posts.insert({title:args.title,writer_id:args.writer_id});
            return posts.findOne(id);
        },
        updatePost(obj,{id,title,writer_id},ctx){
            posts.update({_id:id,writer_id},{
                $set:{
                    title
                }
            });
            return posts.findOne({_id:id})
        },
        deletePost(obj,{id},args){

             res = posts.remove({_id:id});

            return (((res)) !== 0)? {data:id}:{data:"failed "}
        }
    }

}