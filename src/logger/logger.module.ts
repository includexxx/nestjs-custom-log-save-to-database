import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SysLog } from './logger.entity';
import { LoggerService } from './service/logger.service';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([SysLog])],
    providers: [LoggerService],
    exports: [LoggerService]
})
export class LoggerModule { }
