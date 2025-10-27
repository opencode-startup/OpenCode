/**
 * Centralized content management
 * All hardcoded strings, labels, and text content are defined here
 * for easier maintenance and potential internationalization
 */
export const content = {
  app: {
    name: 'OpenCode',
  },
  links: {
    home: '/',
  },
  header: {
    navigation: {
      siteNavigation: 'Site navigation',
      userActions: 'User actions',
      mobileMenu: 'Mobile navigation menu',
      userAccountNavigation: 'User account navigation',
      guestNavigation: 'Guest navigation',
      authenticationActions: 'Authentication actions',
    },
    buttons: {
      pricing: 'Pricing',
      myProgress: 'My Progress',
      accountSettings: 'Account Settings',
      logOut: 'Log Out',
      upgradeToPro: 'Upgrade to Pro',
      logIn: 'Log In',
      contact: 'Contact',
      signUp: 'Sign Up',
    },
    menu: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    defaults: {
      userName: 'John Doe',
      userEmail: 'johndoe@gmail.com',
    },
  },
  footer: {
    ariaLabels: {
      siteFooter: 'Site footer',
    },
    columns: {
      company: 'Company',
      product: 'Product',
      legal: 'Legal',
    },
    links: {
      aboutUs: 'About Us',
      contact: 'Contact',
      pricing: 'Pricing',
      termsOfUse: 'Terms of Use',
      privacyPolicy: 'Privacy Policy',
    },
    copyright: (year: number) => `© ${year} OpenCode. All rights reserved.`,
  },
  components: {
    select: {
      defaultPlaceholder: 'Select an option...',
      loadingLabel: 'Loading',
      optionsLabel: 'Options',
    },
  },
} as const;
