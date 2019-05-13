import { Module } from '@nestjs/common';
import { PowerController } from './power.controller';

@Module({
  controllers: [PowerController]
})
export class PowerModule {}
