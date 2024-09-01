import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min, Max, IsNotEmpty, IsPositive } from 'class-validator';

export class CreatePokemonDto {
  @ApiProperty({
    description: 'Unique identifier for the Pokemon',
    example: 1,
  })
  @IsInt({ message: 'Pokemon ID must be an integer.' })
  @IsPositive({ message: 'Pokemon ID must be a positive integer.' })
  pokemonId: number;

  @ApiProperty({
    description: 'Pokemon name',
    example: 'ditto',
  })
  @IsString({ message: 'Pokemon name must be a string.' })
  @IsNotEmpty({ message: 'Pokemon name cannot be empty.' })
  name: string;

  @ApiProperty({
    description: 'Type of the Pokemon',
    example: 'Fire',
  })
  @IsString({ message: 'Pokemon type must be a string.' })
  @IsNotEmpty({ message: 'Pokemon type cannot be empty.' })
  type: string;

  @ApiProperty({
    description: 'Height of the Pokemon in cm',
    example: 87,
  })
  @IsInt({ message: 'Height must be an integer.' })
  @Min(1, { message: 'Height must be a positive number greater than 0.' })
  height: number;

  @ApiProperty({
    description: 'Weight of the Pokemon in kg',
    example: 87,
  })
  @IsInt({ message: 'Weight must be an integer.' })
  @Min(1, { message: 'Weight must be a positive number greater than 0.' })
  weight: number;
}
