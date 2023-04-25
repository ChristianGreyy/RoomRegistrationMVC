import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateLessonDto {
  @IsNumber()
  @IsNotEmpty()
  name: number;

  @IsNumber()
  @IsNotEmpty()
  startHour: number;

  @IsNumber()
  @IsNotEmpty()
  startMinute: number;

  @IsNumber()
  @IsNotEmpty()
  endHour: number;

  @IsNumber()
  @IsNotEmpty()
  endMinute: number;
}
