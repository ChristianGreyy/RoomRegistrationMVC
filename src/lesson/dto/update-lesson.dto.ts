import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class UpdateLessonDto {
  @IsString()
  @MinLength(1)
  @MaxLength(2)
  @IsNotEmpty()
  name: string;
}
