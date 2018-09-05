import videos from './videos'

export default {
    Query:{
        getVideos(obj,args,ctx){
            return videos.find().fetch().reverse();
        }
    },
    Mutation:{
        addVideo(obj,{title,info,video},ctx){
            const date = new Date().toISOString();
            const id = videos.insert({title,date,info,video});
            return videos.findOne(id);
        },
        editVideo(obj,{_id,title,info,video},ctx){
            const id = videos.update({_id},{
                $set:{title,info,video}
            });
            return videos.findOne(id);
        },
        deleteVideo(obj,{_id},ctx){
            const id = videos.remove(_id);
            return videos.findOne(id);
        }
    }
}