import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/service/logger.service';

@Injectable()
export class AppService {
  constructor(private logger: LoggerService) { }
  getHello(): string {
    this.logger.error("custom error");
    this.logger.log("custom log");
    return 'Hello World!';
  }
}
