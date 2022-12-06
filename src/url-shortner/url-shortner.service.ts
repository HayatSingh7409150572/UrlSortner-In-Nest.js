import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUri } from 'valid-url';
import { Repository } from 'typeorm';
import { CreateUrlShortnerDto } from './dto/create-url-shortner.dto';
import { UpdateUrlShortnerDto } from './dto/update-url-shortner.dto';
import { UrlShortnerEntity } from './entities/url-shortner.entity';

@Injectable()
export class UrlShortnerService {
  constructor(
    @InjectRepository(UrlShortnerEntity)
    private readonly ProductPostRepository: Repository<UrlShortnerEntity>,
  ) {}

  create(createUrlShortnerDto: UrlShortnerEntity) {
    console.log('service', createUrlShortnerDto);
    return this.ProductPostRepository.save(createUrlShortnerDto);
    //this.ProductPostRepository.save(createUrlShortnerDto);
  }

  findAll() {
    return `This action returns all urlShortner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} urlShortner`;
  }

  update(id: number, updateUrlShortnerDto: UpdateUrlShortnerDto) {
    return `This action updates a #${id} urlShortner`;
  }

  remove(id: number) {
    return `This action removes a #${id} urlShortner`;
  }
}
