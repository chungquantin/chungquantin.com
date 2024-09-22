export let siteMetadata = {
  title: 'Archives of Tin Chung',
  author: 'Kaveh',
  fullName: 'Kaveh Tehrani',
  headerTitle: 'Archives of Tin Chung',
  footerTitle: 'Archives of Tin Chung',
  description: 'Internet footprint of Tin Chung',
  language: 'en-us',
  siteUrl: 'https://blog.chungquantin.com/',
  shortUrl: 'kaveh.page',
  siteRepo: 'https://github.com/chungquantin/chungquantin.com',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.png',
  socialBanner: '/static/images/logo.jpg',
  email: 'cqtin0903@gmail.com',
  github: 'https://github.com/chungquantin',
  mastodon: 'https://mastodon.social/@ktehrani/',
  twitter: 'https://twitter.com/chungquantin',
  linkedin: 'https://linkedin.com/in/chungquantin/',
  buttondown: 'kaveh',
  locale: 'en-US',
  analyticsURL: '',
  socialAccounts: {
    github: 'chungquantin',
    twitter: 'chungquantin',
    linkedin: 'chungquantin',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
