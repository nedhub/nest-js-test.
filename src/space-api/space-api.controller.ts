import { Controller } from '@nestjs/common';
import { Space } from './space.interface';
import { SpaceService } from './space.service';

@Controller('space-api')
export class SpaceApiController {




    constructor(private spaceService: SpaceService) {

    }

    @Get()
    getAstronauts():Promise<Space>   {




        console.log('::: Retrieving Astronauts from space');
        return this.spaceService.getAstronauts();

    }
}
