const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = mesasge => {
  console.info("**************");
  console.info(mesasge);
  console.info("**************");
};

export default {
  port:env.PORT || 8080
};
