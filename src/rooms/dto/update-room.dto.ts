import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class UpdateRoomDto {
  @IsString()
  @MinLength(1)
  @MaxLength(2)
  @IsNotEmpty()
  day: string;

  @IsString()
  @MinLength(1)
  @MaxLength(2)
  @IsNotEmpty()
  month: string;

  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  startHour: string;

  @IsString()
  @IsNotEmpty()
  startMinute: string;

  @IsString()
  @IsNotEmpty()
  endHour: string;

  @IsString()
  @IsNotEmpty()
  endMinute: string;
}
