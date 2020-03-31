import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { constants } from './constants';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    // All routes will be prefixed with 'api'
    app.setGlobalPrefix('api');

    // Listen on a port specified by an environment variable
    // or 3000
    await app.listen(process.env.PORT || constants.port);    
    console.log(`\nListening on Port ${process.env.PORT || constants.port} ... \n`);
}
bootstrap();
