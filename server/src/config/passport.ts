import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import User from '../entities/User';
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
          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            done(null, user);
          } else {
            user = new User();
            user.googleId = profile.id;
            user.displayName = profile.displayName;
            user.avatar =
              profile.photos === undefined
                ? 'https://hds.hel.fi/static/assets/placeholders/user-image/user-image-l@2x.png'
                : profile.photos[0].value;
            await user.save();
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

  passport.deserializeUser((user: User, done) => {
    done(null, user);
  });
};

export default configPassport;
