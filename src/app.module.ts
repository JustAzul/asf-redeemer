import { Logger, Module } from '@nestjs/common';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SteamAppModule } from './steam-app/steam-app.module';
import { SteamPackageModule } from './steam-package/steam-package.module';

@Module({
  controllers: [AppController],
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          // configure your prisma middleware
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
        ],
      },
    }),
    SteamAppModule,
    SteamPackageModule,
  ],
  providers: [AppService],
})
export class AppModule {}
