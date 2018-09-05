

export default {

    Query: {
      user(obj,args,ctx){
          console.log(ctx);

          return ctx.user || {} ;
      },

    },
    User: {

        email: (user) =>(user._id)?  user.emails[0].address: null ,
        userName: (user) =>(user._id)?   user.username : null,

    }

}
