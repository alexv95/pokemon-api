import { Module } from '@nestjs/common';
import { PokemonService } from './service/pokemon.service';
import { PokemonController } from './controller/pokemon.controller';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
