import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { constants } from './constants';
import * as bodyParser from 'body-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
   
    app.enableCors();

    // All routes will be prefixed with 'api'
    app.setGlobalPrefix('api');

    //enable larger request bodies
    app.use(bodyParser.json({ limit: '100mb' }))
    app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

    // Listen on a port specified by an environment variable
    // or 3000
    await app.listen(process.env.PORT || constants.port);    
    console.log(`\nListening on Port ${process.env.PORT || constants.port} ... \n`);
}
bootstrap();
