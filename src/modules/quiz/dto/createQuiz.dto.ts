import { IsNotEmpty, Length } from "class-validator"

export class createQuizDto {

    @IsNotEmpty({ message: 'the title field is required' })

    @Length(3, 255)

    title: string;


    description: string
}