export const environment = {
  production: true,

  oidc: {
    clientId: '0oalqrcqbptWL1ZLA356',
    issuer: 'https://dev-686145.okta.com/oauth2/default',
    redirectUri: 'https://sssuthe.com/implicit/callback',
    scope: 'openid profile email',
    testing: {
      disableHttpsCheck: false
    }
  },
  resourceServer: {
    todoUrl: 'https://shark-local.com/api/v1/todo/',
    generateUidUrl: 'https://shark-local.com/api/v1/generate_uid/'
  }
};
