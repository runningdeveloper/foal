module.exports = {
  title: 'FoalTS',
  description: 'A Web framework to create enterprise-grade Node.JS applications',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Website', link: 'https://foalts.org' },
      { text: 'Github', link: 'https://github.com/FoalTS/foal' },
      { text: 'Twitter', link: 'https://twitter.com/foalts' },
    ],
    sidebar: [
      // {
      //   title: 'Introduction',
      //   children: [
      //     [ 'Why FoalTS?', 'README' ]
      //   ]
      // },
      // {
      //   title: 'Tutorials',
      //   collapsable: false,
      //   children: [
      //     {
      //       title: 'Simple To-Do List',
      //       children: [
      //         [ './tutorials/simple-todo-list/1-installation', 'Installation' ],
      //         [ './tutorials/simple-todo-list/2-introduction', 'Introduction' ],
      //         [ './tutorials/simple-todo-list/3-the-todo-model', 'The Todo Model' ],
      //         [ './tutorials/simple-todo-list/4-the-shell-script-create-todo', 'The Shell Script create-todo' ],
      //         [ './tutorials/simple-todo-list/5-the-rest-api', 'The REST API' ],
      //         [ './tutorials/simple-todo-list/6-validation-and-sanitization', 'Validation & Sanitization' ],
      //         [ './tutorials/simple-todo-list/7-unit-testing', 'Unit Testing' ],
      //       ]
      //     },
      //     {
      //       title: 'Multi-User To-Do List',
      //       children: [
      //         [ './tutorials/multi-user-todo-list/1-Introduction', 'Introduction' ],
      //         [ './tutorials/multi-user-todo-list/2-the-user-and-todo-models', 'The User & Todo Models' ],
      //         [ './tutorials/multi-user-todo-list/3-the-shell-scripts', 'The Shell Scripts' ],
      //         [ './tutorials/multi-user-todo-list/5-auth-controllers-and-hooks', 'Auth Controllers & Hooks' ],
      //         [ './tutorials/multi-user-todo-list/6-todos-and-ownership', 'Todos & Ownership' ],
      //         [ './tutorials/multi-user-todo-list/7-the-signup-page', 'The Sign Up Page' ],
      //         [ './tutorials/multi-user-todo-list/8-e2e-testing-and-authentication', 'E2E Testing & Auth' ],
      //       ]
      //     },
      //     {
      //       title: 'MongoDB To-Do List',
      //       children: [
      //         [ './tutorials/mongodb-todo-list/1-installation', 'Installation' ],
      //         [ './tutorials/mongodb-todo-list/2-introduction', 'Introduction' ],
      //         [ './tutorials/mongodb-todo-list/3-the-todo-model', 'The Todo Model' ],
      //         [ './tutorials/mongodb-todo-list/4-the-shell-script-create-todo', 'The Shell Script create-todo' ],
      //         [ './tutorials/mongodb-todo-list/5-the-rest-api', 'The REST API' ],
      //         [ './tutorials/mongodb-todo-list/6-validation-and-sanitization', 'Validation & Sanitization' ],
      //         [ './tutorials/mongodb-todo-list/7-unit-testing', 'Unit Testing' ],
      //       ]
      //     },
      //   ]
      // },
      // {
      //   title: 'TOPIC GUIDES',
      //   collapsable: false,
      //   children: [
          {
            title: 'Architecture',
            children: [
              [ './architecture/architecture-overview', 'Architecture Overview' ],
              [ './architecture/controllers', 'Controllers' ],
              [ './architecture/services-and-dependency-injection', 'Services & Dependency Injection' ],
              [ './architecture/hooks', 'Hooks' ],
            ]
          },
          {
            title: 'Databases',
            children: [
              [ './databases/typeorm', 'TypeORM (SQL & noSQL)' ],
              [ './databases/create-models-and-queries', 'Create Models & Queries' ],
              [ './databases/generate-and-run-migrations', 'Generate & Run Migrations' ],
              [ './databases/using-mongoose', 'Use Mongoose (MongoDB)' ],
              [ './databases/using-another-orm', 'Use Another ORM' ],
            ]
          },
          {
            title: 'Authentication & Access Control',
            children: [
              [ './authentication-and-access-control/introduction', 'Introduction' ],
              [ './authentication-and-access-control/user-class', 'User Class & create-user Script' ],
              [ './authentication-and-access-control/session-and-cookie', 'Session & Cookie (authentication)' ],
              [ './authentication-and-access-control/jwt', 'JWT (authentication)' ],
              [ './authentication-and-access-control/password-management', 'Password Management' ],
              [ './authentication-and-access-control/administrators-and-roles', 'Administrators & Roles' ],
              [ './authentication-and-access-control/groups-and-permissions', 'Groups & Permissions' ],
            ]
          },
          [ './validation-and-sanitization', 'Validation & Sanitization' ],
          {
            title: 'API',
            children: [
              [ './api-section/rest-blueprints', 'REST API' ],
              [ './api-section/openapi-and-swagger-ui', 'OpenAPI & Swagger UI' ],
              [ './api-section/public-api-and-cors-requests', 'Public API & CORS Requests' ],
            ]
          },
          {
            title: 'Frontend Integration',
            children: [
              [ './frontend-integration/single-page-applications', 'Single Page Applications' ],
              [ './frontend-integration/angular-react-vue', 'Angular, React & Vue' ],
              [ './frontend-integration/jsx-server-side-rendering', 'JSX Server-Side Rendering' ],
            ]
          },
          {
            title: 'CLI & Development Environment',
            children: [
              [ './development-environment/build-and-start-the-app', 'Build & Start the App' ],
              [ './development-environment/create-and-run-scripts', 'Create & Run Scripts' ],
              [ './development-environment/code-generation', 'Code Generation' ],
              [ './development-environment/linting-and-code-style', 'Linting & Code Style' ],
              [ './development-environment/vscode', 'VS Code' ],
            ]
          },
          {
            title: 'Testing',
            children: [
              [ './testing/introduction', 'Introduction' ],
              [ './testing/unit-testing', 'Unit Testing' ],
              [ './testing/e2e-testing', 'E2E Testing' ],
            ]
          },
          {
            title: 'Cloud',
            children: [
              [ './cloud/firebase', 'Firebase' ],
            ]
          },
          {
            title: 'Security',
            children: [
              [ './security/http-headers-protection', 'HTTP Headers Protection' ],
              [ './security/csrf-protection', 'CSRF Protection' ],
              [ './security/xss-protection', 'XSS Protection' ],
            ]
          },
          {
            title: 'Utilities',
            children: [
              [ './utilities/static-files', 'Static Files' ],
              [ './utilities/templating', 'Templating' ],
              [ './utilities/logging-and-debugging', 'Logging & Debugging' ],
            ]
          },
          {
            title: 'Cookbook',
            children: [
              [ './cookbook/upload-and-download-files', 'Upload & Download Files' ],
              [ './cookbook/scheduling-jobs', 'Scheduling Jobs' ],
              [ './cookbook/404-page', '404 Page' ],
              [ './cookbook/custom-directory-structure', 'Custom Directory Structure' ],
            ]
          },
          {
            title: 'Deployment & Environments',
            children: [
              [ './deployment-and-environments/configuration', 'Configuration' ],
              [ './deployment-and-environments/ship-to-production', 'Ship to Production' ],
            ]
          },
          [ './comparison-with-other-frameworks', 'Comparison with Other Frameworks' ]
      //   ]
      // },
      // {
      //   title: 'Upgrading',
      //   collapsable: false,
      //   children: [
      //     [ 'https://github.com/FoalTS/foal/releases/tag/v0.8.0', 'To v0.8' ]
      //   ]
      // },
      // {
      //   title: 'API Reference',
      //   collapsable: false,
      //   children: [
      //     [ '/api/core/api/index', '@foal/core' ],
      //     [ './api/ejs/api/index', '@foal/ejs' ],
      //     [ './api/formidable/api/index', '@foal/formidable' ],
      //     [ './api/jwt/api/index', '@foal/jwt' ],
      //     [ './api/mongoose/api/index', '@foal/mongoose' ],
      //     [ './api/password/api/index', '@foal/password' ],
      //     [ './api/swagger/api/index', '@foal/swagger' ],
      //     [ './api/typeorm/api/index', '@foal/typeorm' ],
      //   ]
      // }
    ]
  }
}