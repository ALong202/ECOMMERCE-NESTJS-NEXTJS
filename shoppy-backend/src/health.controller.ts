import { Controller, Get } from '@nestjs/common';

@Controller()
export class HeathController {
  @Get()
  health() {
    return true;
  }
}
