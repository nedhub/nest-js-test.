import { Test, TestingModule } from '@nestjs/testing';
import { SpaceApiController } from './space-api.controller';

describe('SpaceApiController', () => {
  let controller: SpaceApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceApiController],
    }).compile();

    controller = module.get<SpaceApiController>(SpaceApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
