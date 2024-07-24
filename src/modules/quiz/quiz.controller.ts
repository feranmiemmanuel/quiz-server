import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { createQuizDto } from './dto/createQuiz.dto';

@Controller('quiz')
export class QuizController {
    constructor (private readonly quizService: QuizService) {}

    @Get('/') 
    getAllQuizes() {
        return this.quizService.getAllQuizes()
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    createQuiz (@Body() quizData: createQuizDto) {
        return { data: quizData }
    }
}
