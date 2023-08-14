// import { Injectable, Inject } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {

//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 'dev',
//       ignoreExpiration: true,
//     });
//   }

//   private validate(token: string): Promise<Auth | never> {
//     return this.jwtService.validateUser(token);
//   }
// }
