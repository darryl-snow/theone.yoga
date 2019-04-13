module.exports = {
  siteMetadata: {
    title: 'Huo Jie',
    description: 'Iyengar-style yoga instructor in Singapore.',
    author: '@dazsnow',
    email: 'huojie1102@gmail.com',
    phone: '+6581450422',
    linkedin: 'https://www.linkedin.com/in/jie-huo-794a96ab/',
    wechat: 'lulusnow0117',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: 'https://theone.yoga',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:300,400', 'Noto Sans SC:300,400'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Huo Jie',
        short_name: 'huojie',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
  ],
}
