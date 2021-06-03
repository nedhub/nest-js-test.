import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpaceApiController } from './space-api/space-api.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, SpaceApiController],
  providers: [AppService],
})
export class AppModule {}
