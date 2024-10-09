import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// import { kakaoStrategy } from "passport-kakao" // 예시

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        const cookie = req.headers.cookie;
        const refreshToken = cookie.replace('refreshToken=', '');
        return refreshToken;
      }, // 프론트 한테 받은 accessToken
      secretOrKey: '나의리프레시비밀번호', // jwt 만들때 사용한 암호키
    });
  }

  validate(payload) {
    console.log(payload); // { sub:dsadsa(유저아이디) }

    return {
      // passport 검증 성공하면 그 결과를 req에 담기
      id: payload.sub,
    };
  }
}
