import Joi from 'joi';

// .env 파일 환경 변수 검증 용도
export const configurationSchema = Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod').default('dev'),
        SERVICE_NAME: Joi.string()
                .required()
                .default("You Have to change 'SERVICE_NAME' on .env file"),
        PORT: Joi.number().default(3000),
        DATABASE_URL: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_NAME: Joi.string(),
        OAUTH_GOOGLE_CLIENT_ID: Joi.string().required(),
        OAUTH_GOOGLE_CLIENT_SECRET: Joi.string().required(),
        OAUTH_CALLBACK_URL: Joi.string().required(),
        MAIL_HOST: Joi.string().required(),
        MAIL_USER: Joi.string().required(),
        MAIL_PASSWORD: Joi.string().required(),
        MAIL_FROM: Joi.string().required(),
});
