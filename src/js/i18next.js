i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        greeting: 'Hello',
        welcome: 'Welcome to our application',
        user: {
          name: 'Name',
          email: 'Email'
        }
      }
    },
    fr: {
      translation: {
        greeting: 'Bonjour',
        welcome: 'Bienvenue dans notre application',
        user: {
          name: 'Nom',
          email: 'Email'
        }
      }
    }
  }
});
