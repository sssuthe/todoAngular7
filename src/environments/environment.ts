export const environment = {
  production: false,

  oidc: {
    clientId: '0oalqrcqbptWL1ZLA356',
    issuer: 'https://dev-686145.okta.com/oauth2/default',
    // redirectUri: 'http://localhost:4200/implicit/callback',
    redirectUri: 'https://192.168.99.100/implicit/callback',

    scope: 'openid profile email',
    testing: {
      disableHttpsCheck: false
    }
  },
  resourceServer: {
    todoUrl: 'http://localhost:3000/v1/todo/',
    generateUidUrl: 'http://localhost:3000/v1/generate_uid/'
  }
};
