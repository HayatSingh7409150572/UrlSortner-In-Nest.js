import { Module } from '@nestjs/common';
import { UrlShortnerService } from './url-shortner.service';
import { UrlShortnerController } from './url-shortner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlShortnerEntity } from './entities/url-shortner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UrlShortnerEntity])],
  controllers: [UrlShortnerController],
  providers: [UrlShortnerService],
})
export class UrlShortnerModule {}
