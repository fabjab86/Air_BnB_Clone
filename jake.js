desc('Migrate test database')
task('makeDatabases', { async: true }, function () {
  var cmds = [
    'createdb popanola;',
    'createdb testpopanola;',
    'node models/TableGenerator.js'
  ]
  jake.exec(cmds, {printStdout: true}, function () {
    console.log('All tests passed.')
    complete()
  })
})

task('dropDatabases', { async: true }, function () {
  var cmds = [
    'dropdb popanola;',
    'dropdb testpopanola;'
  ]
  jake.exec(cmds, {printStdout: true}, function () {
    console.log('All tests passed.')
    complete()
  })
})