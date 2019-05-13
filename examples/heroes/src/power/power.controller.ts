import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Power')
@Controller()
export class PowerController {
  constructor() {}

  @Get()
  getPowers(@Param('heroId') heroId: number) {
    return { Hero_ID: heroId, powers: ['Super Speed', 'X Ray Vision'] };
  }
}
