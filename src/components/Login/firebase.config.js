import env from "react-dotenv";
const firebaseConfig = {
  apiKey: `${env.API_KEY}`,
  authDomain: `${env.AUTH_DOMAIN}`,
  projectId: `${env.PROJECT_ID}`,
  storageBucket: `${env.STORAGE_BUCKET}`,
  messagingSenderId: `${env.MESSAGING_SENDER_ID}`,
  appId: `${env.APP_ID}`
};;
  export default firebaseConfig;

  // apiKey: "AIzaSyDZVCYYOdhtplTa3JFUSTylLrVOzg9qahY",
  // authDomain: "ema-john-2021.firebaseapp.com",
  // projectId: "ema-john-2021",
  // storageBucket: "ema-john-2021.appspot.com",
  // messagingSenderId: "229783258274",
  // appId: "1:229783258274:web:4d54608d671e4b59aa43fb"




