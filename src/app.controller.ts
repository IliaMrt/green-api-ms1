import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern} from "@nestjs/microservices";
import {lastValueFrom} from "rxjs";
import {expDto} from "./dto/exp.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @MessagePattern({ cmd: 'sqrt' })
  sqrt(num: { number: number }): number {
    return this.appService.sqrt(num);
  }

  @MessagePattern({ cmd: 'exp' })
  exponentiation(dto: expDto):number {
    return this.appService.exponentiation(dto);
  }

  @MessagePattern({ cmd: 'emptyQuestion' })
  emptyQuestion(): string {
    return this.appService.emptyQuestion();
  }
}
