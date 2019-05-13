import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { PowerModule } from './power/power.module';
import routes from './routes';

@Module({
  imports: [HeroModule, PowerModule, RouterModule.forRoutes(routes)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
