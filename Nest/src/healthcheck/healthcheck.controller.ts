import { Controller, Get } from '@nestjs/common';

@Controller('healthcheck')
export class HealthcheckController {
  
  /**
   * This is meant to be pinged on an interval specified
   * in the dockerfile.
   */
  @Get()
  checkHealth() {
    // TODO return JSON of server stats
    console.log('Looking Good.')
    return 'Looking Good.'
  }
}
