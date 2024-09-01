import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @Column()
  @PrimaryColumn()
  pokemonId: number;

  @Column()
  name: string;

  @Column()
  type: string;


  @Column({type:"int"})
  height:number;

  @Column({type:"int"})
  weight:number;
}