/*import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth/auth.service'

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
      try {
        const user = await this.authService.validateToken(token);
        req.user = user;
      } catch (err) {
        // handle token validation errors
      }
    }

    next();
  }
}*/