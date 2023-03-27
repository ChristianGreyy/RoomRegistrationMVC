import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateSubjectDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  name: string;
}
