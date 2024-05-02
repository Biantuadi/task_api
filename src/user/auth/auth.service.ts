// auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user.service'; 


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userData: any): Promise<any> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user:any = await this.userService.create({
      ...userData,
      password: hashedPassword,
    });

    const userToSend = {
      ...user.toObject(),
      password: undefined,
    };

    // Générer un token JWT
    const payload = { id: user.id, email: user.email }; // Tu peux personnaliser le payload du token selon tes besoins
    const token = this.jwtService.sign(payload);

    return { message: 'Inscription réussie', user: userToSend, token };
  }

  async login(email: string, password: string): Promise<any> {
    const user:any = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Utilisateur non trouvé');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Mot de passe incorrect');
    }

    const userToSend = {
      ...user.toObject(),
      password: undefined,
    };

    // Générer un token JWT
    const payload = { id: user.id, email: user.email }; // Tu peux personnaliser le payload du token selon tes besoins
    const token = this.jwtService.sign(payload);
    return { message: 'Connexion réussie', token, user: userToSend };
  }
}
