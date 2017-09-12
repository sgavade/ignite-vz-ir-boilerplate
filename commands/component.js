// @cliDescription  Generates a component, styles, and an optional test.

module.exports = async function (context) {
  // grab some features
  const { parameters, strings, print, ignite } = context
  const { pascalCase, isBlank } = strings
  const config = ignite.loadIgniteConfig()
  const { tests } = config

 print.info('parameters.first', parameters.first)
  // validation
  if (isBlank(parameters.first)) {
    print.info(`${context.runtime.brand} generate component <name> <path>\n`)
    print.info('A module name is required.')
    return
  }
  
  if (isBlank(parameters.second)) {
    print.info(`${context.runtime.brand} generate component <name> <path>\n`)
    print.info('A component name is required.')
    return
  }

  // read some configuration
  const module = pascalCase(parameters.first)
  const name = pascalCase(parameters.second)
  const props = { module, name }
  const jobs = [
    {
      template: 'component.ejs',
      target: `xNative/App/modules/${module}/${name}.js`
    },
    {
      template: 'module-component-style.ejs',
      target: `xNative/App/modules/${module}/${name}Style.js`
    }
  ]

  await ignite.copyBatch(context, jobs, props)
}
