import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import AppUser from '../entities/AppUser';
import logger from './logger';

const GoogleStrategy = passportGoogle.Strategy;

const configPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async (_accessToken, _refreshToken, profile, done) => {
        try {
          let user = await AppUser.findOne({ googleId: profile.id });

          if (user) {
            done(null, user);
          } else {
            user = await AppUser.create({
              googleId: profile.id,
              displayName: profile.displayName,
            }).save();

            done(null, user);
          }

          logger.info(`Authenticated ${user.displayName}`);
        } catch (err) {
          logger.error(`Error authenticating user: ${err}`);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user: AppUser, done) => {
    done(null, user);
  });
};

export default configPassport;
