import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get databaseHost(): string {
    return this.configService.get<string>('DB_HOST');
  }

  get databasePort(): number {
    return this.configService.get<number>('DB_PORT');
  }

  get databaseUsername(): string {
    return this.configService.get<string>('DB_USERNAME');
  }

  get databasePassword(): string {
    return this.configService.get<string>('DB_PASSWORD');
  }

  get databaseName(): string {
    return this.configService.get<string>('DB_DATABASE');
  }

  get apiPort(): number {
    return this.configService.get<number>('PORT') || 3001;
  }
}
