import albums from './albums'
import videos from "../videos/videos";

export default {
    Query:{
        getAlbums(obj,args,ctx){
            return albums.find().fetch().reverse();
        }
    },
    Mutation:{
        addAlbum(obj,{title,thumbnail,info,images},ctx){
            const date = new Date().toISOString();
            const id = albums.insert({title,date,thumbnail,info,images});
            return albums.findOne(id);
        },
        editAlbum(obj,{_id,title,thumbnail,info,images},ctx){
            const id = albums.update({_id},{
                $set:{title,thumbnail,info,images}
            });
            return albums.findOne(id);
        },
        deleteAlbum(obj,{_id},ctx){
            const id = albums.remove(_id);
            return albums.findOne(id);
        }
    }
}