// @cliDescription  Example VzBoilerplate command
// Generates a "thing" (rename this to whatever -- component, model, anything).

module.exports = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { parameters, strings, print, ignite } = context
  const { pascalCase, isBlank } = strings

  // validation
  if (isBlank(parameters.first)) {
    print.info(`ignite generate module <name>\n`)
    print.info('A module name is required.')
    return
  }

  const name = pascalCase(parameters.first)
  const props = {
      'container': '${name}Container',
      'component':'${name}Component',
      name
  }

  // Copies the `thing.js.ejs` in your plugin's templates folder
  // into App/Things/${name}.js.
  const jobs = [{
    template: 'module-component.ejs',
    target: `xNative/App/modules/${name}/component.js`
  },
  {
    template: 'module-component-style.ejs',
    target: `xNative/App/modules/${name}/styles.js`
  },
  {
    template: 'module-container.ejs',
    target: `xNative/App/modules/${name}/container.js`
  },
  {
    template: 'xnative-module-index.ejs',
    target: `xNative/App/modules/${name}/index.js`
  },
  {
    template: 'strings.ejs',
    target: `xNative/App/modules/${name}/strings.js`
  },


  {
    template: 'actions.ejs',
    target: `reactive-core/modules/${name}/actions.js`
  },
  {
    template: 'api.ejs',
    target: `reactive-core/modules/${name}/api.js`
  },
  {
    template: 'reactive-core-module-index.ejs',
    target: `reactive-core/modules/${name}/index.js`
  },
  {
    template: `reducers.ejs`,
    target: `reactive-core/modules/${name}/reducers.js`
  },
  {
    template: `saga.ejs`,
    target: `reactive-core/modules/${name}/saga.js`
  },
  {
    template: `selectors.ejs`,
    target: `reactive-core/modules/${name}/selectors.js`
  },
  {
    template: `types.ejs`,
    target: `reactive-core/modules/${name}/types.js`
  },
  {
    template: `fixture-sample.json`,
    target: `reactive-core/modules/${name}/Fixtures/fixture-sample.json`
  },
  ]


  // make the templates and pass in props with the third argument here
  await ignite.copyBatch(context, jobs, props)
}
