import { DataSource } from 'typeorm';
import { config } from './config';
import { Doctors } from './database/entities/Doctors';
import { Especialidades } from './database/entities/Especialidades';
import { Metadata } from './database/entities/Metadata';
import { Payments } from './database/entities/Payments';
import { ProductosServicios } from './database/entities/ProductosServicios';
import { User } from './database/entities/User';

const { host, username, password, database, port } = config.mysqlConfig;
export const databaseProviders = [
      {
            provide: 'DATA_SOURCE',
            useFactory: async () => {
                  const dataSource = new DataSource({
                        type: 'mysql',
                        host,
                        port,
                        username,
                        password,
                        database,
                        entities: [__dirname + '/database/entities/*{.ts,.js}'],
                        synchronize: false,
                  });

                  return dataSource.initialize();
            },
      },
];

export const databaseEntities = [
      {
            provide: 'DOCTOR_REPOSITORY',
            useFactory: (dataSource: DataSource) => dataSource.getRepository(Doctors),
            inject: ['DATA_SOURCE'],
      },

      {
            provide: 'ESPECIALTY_REPOSITORY',
            useFactory: (dataSource: DataSource) => dataSource.getRepository(Especialidades),
            inject: ['DATA_SOURCE'],
      },
      {
            provide: 'DOCTOR_METADATA_REPOSITORY',
            useFactory: (dataSource: DataSource) => dataSource.getRepository(Metadata),
            inject: ['DATA_SOURCE'],
      },
      {
            provide: 'PRODUCT_REPOSITORY',
            useFactory: (dataSource: DataSource) =>
                  dataSource.getRepository(ProductosServicios),
            inject: ['DATA_SOURCE'],
      },
      {
            provide: 'USER_REPOSITORY',
            useFactory: (dataSource: DataSource) =>
                  dataSource.getRepository(User),
            inject: ['DATA_SOURCE'],
      }, {
            provide: 'PAYMENTS_REPOSITORY',
            useFactory: (dataSource: DataSource) =>
                  dataSource.getRepository(Payments),
            inject: ['DATA_SOURCE'],
      },

];
