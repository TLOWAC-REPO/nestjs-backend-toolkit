// ConfigService 에서 사용하는 용도
export default () => ({
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  database: {
    url: process.env.DATABASE_URL,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  oauth: {
    google_client_id: process.env.OAUTH_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
    google_callback_url: process.env.OAUTH_CALLBACK_URL,
  },
  mail: {
    host: process.env.MAIL_HOST,
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
    from: process.env.MAIL_FROM,
  }
})