import {Routes} from 'nest-router';
import { HeroModule } from './hero/hero.module';
import { PowerModule } from './power/power.module';

const routes: Routes = [
  {
    path: '/heroes',
    module: HeroModule,
    children: [
      {
        path: ':heroId/powers',
        module: PowerModule,
      },
    ],
  },
];

export default routes;
