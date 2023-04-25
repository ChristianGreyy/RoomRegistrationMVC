import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class UpdateRoomDto {
  @IsNumber()
  @MinLength(1)
  @MaxLength(2)
  @IsNotEmpty()
  name: string;
}
