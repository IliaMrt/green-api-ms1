import { Injectable } from '@nestjs/common';
import { expDto } from './dto/exp.dto';

@Injectable()
export class AppService {
  exponentiation(dto: expDto): number {
    return Math.pow(dto.body, dto.exp);
  }

  sqrt(num: { number: number }): number {
    return Math.sqrt(num.number);
  }

  emptyQuestion() {
    return "Your question is empty.";
  }
}
