import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/my-site'
    }
  }
};

export default config;
