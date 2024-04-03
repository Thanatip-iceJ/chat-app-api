import { Test, TestingModule } from '@nestjs/testing';
import { EditUserService } from './edit-user.service';

describe('EditUserService', () => {
  let service: EditUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditUserService],
    }).compile();

    service = module.get<EditUserService>(EditUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
