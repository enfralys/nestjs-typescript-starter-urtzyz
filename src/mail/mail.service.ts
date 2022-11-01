import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { config } from '../config';

@Injectable()
export class MailService {
      constructor(private mailerService: MailerService) { }

      async forgotPassword(email: string, code: string) {
            await this.mailerService.sendMail({
                  to: email,
                  // from: '"Support Team" <support@example.com>', // override default from
                  subject: 'Forgot Password',
                  template: './forgot-password', // `.hbs` extension is appended automatically
                  context: {
                        email,
                        code
                  },
            });
      }

}
