import { IsString, IsNotEmpty, IsNumber, MinLength, IsInt, IsNumberString } from "class-validator";

export class CatsDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @IsNumberString()
    age: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    breed: string;
}