import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger: Logger;

  constructor() {
    this.logger = new Logger();
  }
  getHello(): string {
    this.logger.log('test log - getHello !');
    this.logger.warn('test warn - getHello !');
    this.logger.error('test error - getHello !');
    return 'Hello World!';
  }
}
