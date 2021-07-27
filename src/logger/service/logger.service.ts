import { Injectable, Logger } from '@nestjs/common';
import { SysLog } from '../logger.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class LoggerService extends Logger {
    constructor(
        @InjectRepository(SysLog)
        private loggerRepository: Repository<SysLog>
    ) {
        super();
    }

    error(message: any, trace?: string, context?: string): void {
        this.saveMessage(message, trace, context);
        super.error(message, trace, context);
    }

    // log(message: any, context?: string): void { // we should not save logger.log()
    //     this.saveMessage(message, context);
    //     super.error(message, context);
    // }

    // warn()

    // debug()

    async saveMessage(message = "", trace = "", context = ""): Promise<void> {
        const log = new SysLog();
        log.message = String(message);
        log.context = context;
        log.trace = trace;
        try {
            await this.loggerRepository.save(log);
        } catch (error) {
            console.log("Error to save syslog: ", error);
        }
    }
}