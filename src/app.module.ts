import { Module } from '@nestjs/common';
import { PokemonModule } from './component/pokemon/pokemon.module';

@Module({
  imports: [PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
