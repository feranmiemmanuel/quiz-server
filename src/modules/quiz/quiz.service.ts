import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
    getAllQuizes() {
    return [1,2,3,4];
  }
}