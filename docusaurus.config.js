module.exports = {
  title: 'BBData',
  tagline: '',
  url: 'https://bbdata-website.netlify.app',
  baseUrl: '/',
  favicon: 'img/icosys_cropped.png',
  organizationName: 'HEIA-FR', // Usually your GitHub org/user name.
  projectName: 'BANTAM', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?' +
          'family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900' +
          '&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900' +
          '&display=swap"'
    },
  ],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'BBData',
      logo: {
        alt: '',
        src: '',
      },
      links: [
        {to: 'showcases', label: 'Showcases', position: 'left'},
        {to: 'docs/get_started', label: 'Developer', position: 'left'},
        {to: 'about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://bbdata-admin.daplab.ch/auth/',
          label: 'Login',
          position: "right",
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} HEIA-FR, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: [
              require.resolve('./src/css/custom.css'),
              require.resolve('./src/css/typography.css')
          ]
        },
      },
    ],
  ],
  plugins: [
      [
          '@docusaurus/plugin-content-pages',
        {
          path: 'src/pages',
          routeBasePath: '',
        },
      ],
  ],
};
