// Manually declare process.env to support the usage in the app
// without relying on 'vite/client' or '@types/node' if they are missing.
declare const process: {
  env: {
    API_KEY: string;
    [key: string]: string | undefined;
  };
};
