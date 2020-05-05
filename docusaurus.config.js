module.exports = {
  title: 'BBData',
  tagline: '',
  url: 'https://bbdata-website.netlify.app',
  baseUrl: '/',
  favicon: 'img/icosys_cropped.png',
  organizationName: 'HEIA-FR', // Usually your GitHub org/user name.
  projectName: 'BANTAM', // Usually your repo name.
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
          customCss: require.resolve('./src/css/custom.css'),
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
