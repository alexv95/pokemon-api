import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';
import { Like, Repository } from 'typeorm';
import { Pokemon } from '../entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    private readonly httpService: HttpService,
  ) {}

  async createPokemon(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const { pokemonId, type } = createPokemonDto;

    let pokemon = await this.pokemonRepository.findOne({ pokemonId });

    if (!pokemon) {
      const externalApiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      const response = await this.httpService.get(externalApiUrl).toPromise();
      const externalData = response.data;

      const name = externalData.name || externalData.pokemon?.name;

      pokemon = this.pokemonRepository.create({
        pokemonId,
        name,
        type,
        additionalField1: externalData.someField1,
        additionalField2: externalData.someField2,
        additionalField3: externalData.someField3,
      });

      await this.pokemonRepository.save(pokemon);
    }

    return pokemon;
  }

  async findPokemonByName(name: string): Promise<Pokemon[]> {
    return await this.pokemonRepository.find({
      where: { name: Like(`%${name}%`) },
    });
  }
}