import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { config } from '../config';

@Module({
      exports: [MailService],
      imports: [
            MailerModule.forRoot({
                  // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
                  // or
                  transport: {
                        host: 'smtp.gmail.com',
                        secure: false,
                        auth: {
                              user: config.emailUsername,
                              pass: config.emailPassword,
                        },
                  },
                  defaults: {
                        from: `"No Reply" <noreply@${config.emailUsername}>`,
                  },
                  template: {
                        dir: join(__dirname, 'templates'),
                        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
                        options: {
                              strict: true,
                        },
                  },
            }),
      ],
      providers: [MailService],
})
export class MailModule { }
