import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessStrategy } from './stratagies/jwt-access.strategy';
import { JwtRefreshStrategy } from './stratagies/jwt-refresh.strategy';

@Module({
  imports: [JwtModule.register({}), UsersModule],
  providers: [JwtAccessStrategy, JwtRefreshStrategy, AuthResolver, AuthService],
})
export class AuthModule {}
