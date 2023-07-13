import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/User"
import connect from "@/utils/db"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

//used for authentication using google
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
        await connect()
        try{
          const user= await User.findOne({email:credentials.email});

          if(user){
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password, 
              user.password
            );
            
            if(isPasswordCorrect){
              return user;
            }else{
              throw new Error("wrong credentials");
            }
          }
          else{
            throw new Error("User not found");
          }
        }catch(err){
          throw new Error(err);
        }
      }
    })
  ],
  pages:{
    error:"/dashboard/login",
  }  
})
export{ handler as GET, handler as POST } ;