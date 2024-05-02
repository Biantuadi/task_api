// ip-logger.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class IpLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Incoming request from IP: ${ip}`);
    next();
  }
}
