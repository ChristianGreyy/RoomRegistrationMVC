import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateCalendarDto {
  @IsNumber()
  @IsNotEmpty()
  day: string;

  @IsNumber()
  @IsNotEmpty()
  month: string;

  @IsNumber()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsString()
  @IsNotEmpty()
  endTime: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  note: string;
}
