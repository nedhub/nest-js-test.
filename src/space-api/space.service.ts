import { Injectable, HttpService } from '@nestjs/common';
import { Space } from './space.interface';

@Injectable()
export class SpaceService {



    constructor(private httService:HttpService){}



    async getAstronauts() : Promise<Space> {


        const response = await this.httService.get('http://api.open-notify.org/astros.json').toPromise();

        return response.data;
    }
}
