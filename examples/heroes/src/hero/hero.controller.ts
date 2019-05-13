import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags, ApiImplicitParam } from '@nestjs/swagger';

@ApiUseTags('Hero')
@Controller()
export class HeroController {

  constructor() {}

  @Get(':heroId')
  @ApiImplicitParam({name: 'heroId'})
  getHero(@Param('heroId') heroId) {
    return {hero: `Hero ${heroId}`};
  }
}
