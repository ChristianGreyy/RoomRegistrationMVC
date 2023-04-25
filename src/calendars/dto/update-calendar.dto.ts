import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class UpdateCalendarDto {
  @IsNumber()
  @MinLength(1)
  @MaxLength(2)
  @IsNotEmpty()
  day: string;

  @IsNumber()
  @MinLength(1)
  @MaxLength(2)
  @IsNotEmpty()
  month: string;

  @IsNumber()
  @MinLength(4)
  @IsNotEmpty()
  year: string;

  @IsNumber()
  @IsNotEmpty()
  startTime: string;

  @IsNumber()
  @IsNotEmpty()
  endTime: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  note: string;
}
