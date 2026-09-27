import { MigrationInterface } from 'typeorm';

export class EmptyBaseline1790000000000 implements MigrationInterface {
  public up(): Promise<void> {
    return Promise.resolve();
  }

  public down(): Promise<void> {
    return Promise.resolve();
  }
}
