import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElectionModule } from './election/election.module';
import { MongooseModule } from '@nestjs/mongoose';
import { XlsxMiddleware } from './middleware/xlsx.middleware';
import { TranslateCsvMiddleware } from './middleware/translate-csv.middleware';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [
    ElectionModule,
    HealthcheckModule,
    MongooseModule.forRoot('mongodb://localhost/chicago', {
      connectionName: 'chicago',
    }),
    MongooseModule.forFeature()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(XlsxMiddleware, TranslateCsvMiddleware)
      .forRoutes({ path: 'election', method: RequestMethod.POST });
  }
}
