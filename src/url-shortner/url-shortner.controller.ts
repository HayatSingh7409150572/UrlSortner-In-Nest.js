import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { UrlShortnerService } from './url-shortner.service';
import { CreateUrlShortnerDto } from './dto/create-url-shortner.dto';
import { UpdateUrlShortnerDto } from './dto/update-url-shortner.dto';
import { Response, Request } from 'express';
import { Http2ServerResponse } from 'http2';
import { UrlShortnerEntity } from './entities/url-shortner.entity';

@Controller('urlShortner')
export class UrlShortnerController {
  constructor(private readonly urlShortnerService: UrlShortnerService) {}

  @Post('post')
  create(@Body() myDto:UrlShortnerEntity, @Req() req:Request , @Res() res:Response) {

    let data = req.body
    console.log(data)
    if(myDto === data){
    return this.urlShortnerService.create(myDto)
    }
  }

  @Get()
  findAll() {
    return this.urlShortnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.urlShortnerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUrlShortnerDto: UpdateUrlShortnerDto,
  ) {
    return this.urlShortnerService.update(+id, updateUrlShortnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urlShortnerService.remove(+id);
  }
}
