import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

// console.log("MONGODB_URI loaded:", !!process.env.MONGODB_URI);

const client = new MongoClient(process.env.MONGODB_URI);
// await client.connect()
const db = client.db("study-nook");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }, 
    },
    session: {
      cookieCache: {
        enabled: true,
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 5, // 5 days
      }
    },
    plugins: [
      jwt()
    ]
  
});