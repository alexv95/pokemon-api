import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { Pokemon } from '../entities/pokemon.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @ApiOperation({ summary: 'Create a new Pokemon' })
  @ApiResponse({ status: 201, description: 'The Pokemon has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return await this.pokemonService.createPokemon(createPokemonDto);
  }

  @ApiOperation({ summary: 'Find Pokemon by name' })
  @ApiResponse({ status: 200, description: 'Found the Pokemon.' })
  @ApiResponse({ status: 404, description: 'Pokemon not found.' })
  @Get()
  async findByName(@Query('name') name: string): Promise<Pokemon> {
    return await this.pokemonService.findPokemonByName(name);
  }
}
