/* eslint-disable prettier/prettier */
import 'dotenv/config';
class Config {
      public getEnv(key: string): string {
            if (!process.env[key]) {
                  throw new Error(`Missing env variable: ${key}`);
            }
            return process.env[key];
      }

      get emailUsername(): string {
            return this.getEnv('EMAIL_USERNAME');
      }

      get emailPassword(): string {
            return this.getEnv('EMAIL_PASSWORD');
      }

      get mysqlConfig(): {
            host: string;
            port: number;
            username: string;
            password: string;
            database: string;
      } {
            return {
                  host: this.getEnv('MYSQL_HOST'),
                  port: Number(this.getEnv('MYSQL_PORT')),
                  username: this.getEnv('MYSQL_USERNAME'),
                  password: this.getEnv('MYSQL_PASSWORD'),
                  database: this.getEnv('MYSQL_DATABASE'),
            };
      }
}

export const config = new Config();
