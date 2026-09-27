import { registerAs } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required database setting: ${name}`);
  }
  return value;
}

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: required('DB_HOST'),
    port: Number(required('DB_PORT')),
    username: required('DB_USERNAME'),
    password: required('DB_PASSWORD'),
    database: required('DB_DATABASE'),
    entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    logging: process.env.NODE_ENV === 'development',
  }),
);
