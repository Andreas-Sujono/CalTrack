require('dotenv').config();
module.exports = {
  server: {
    NODE_ENVIROMMENT: process.env.NODE_ENVIROMMENT || 'development',
    PORT: process.env.PORT || 8080,
  },
  database: {
    DATABASE_URI: process.env.DATABASE_URI || "mongodb+srv://root:root@caltrack.j4yxb.mongodb.net/calTrack?retryWrites=true&w=majority",
  },
  signOptions: (issuer = 'calTrack', subject = 'id', audience = 'mobile user') => ({
    issuer,
    subject,
    audience,
    expiresIn: "30d",
    algorithm: "RS256",
   })
};
