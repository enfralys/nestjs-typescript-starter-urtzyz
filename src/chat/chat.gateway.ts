import {
      MessageBody, OnGatewayConnection, OnGatewayDisconnect,
      OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer
} from "@nestjs/websockets";
import { Socket, Server } from 'socket.io';
import { AppService } from "src/app.service";
import { Chat } from "src/database/entities/Chat";

@WebSocketGateway({

      cors: {
            origin: `http://localhost:5500/ws`
      }

})
export class ChatGateway
      implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
      constructor(private appService: AppService) { }

      @WebSocketServer() server: Server;

      @SubscribeMessage('sendMessage')
      async handleSendMessage(client: Socket, payload: Chat): Promise<void> {
            // await this.appService.createMessage(payload);
            this.server.emit('recMessage', payload);
      }

      afterInit(server: Server) {
            console.log(server);
            //Do stuffs
      }

      handleDisconnect(client: Socket) {
            console.log(`Disconnected: ${client.id}`);
            //Do stuffs
      }

      handleConnection(client: Socket, ...args: any[]) {
            console.log(`Connected ${client.id}`);
            //Do stuffs
      }
}