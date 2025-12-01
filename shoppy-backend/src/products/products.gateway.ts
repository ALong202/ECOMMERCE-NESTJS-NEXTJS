import { WebSocketGateway, WebSocketServer, WsException } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ProductsGateway {
  constructor(private readonly authSerivce: AuthService) {}

  @WebSocketServer()
  private readonly server: Server;

  handleProductUpdated() {
    this.server.emit('productUpdate');
  }
  handleConnection(client: Socket) {
    try {
      this.authSerivce.verifyToken(client.handshake.auth.authentication.value);
    } catch (err) {
      throw new WsException('Unauthorized.')
    }
  }
}
