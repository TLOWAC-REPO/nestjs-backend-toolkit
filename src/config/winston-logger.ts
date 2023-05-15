import { isProd } from '@/common/utils';

import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';

export const winstonTransportConsoleOption = new winston.transports.Console({
  level: isProd ? 'info' : 'silly',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    nestWinstonModuleUtilities.format.nestLike(process.env.SERVICE_NAME, {
      colors: true,
      prettyPrint: true,
    }),
  ),
})

