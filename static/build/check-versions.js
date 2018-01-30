'use strict'
const chalk = require('chalk') //颜色插件 作用是在控制台中输出不同的颜色的字
const semver = require('semver') //对特定的版本号做判断的
const packageConfig = require('../../package.json')
const shell = require('shelljs') //用来执行Unix系统命令
//安全的使用包，这个包的名字不是目前在使用,但曾被另一个包。为了避免恶意使用,npm挂在包的名称,但是松散,我们可能会给你如果你想要它。
const childProcess = require('child_process') 

//执行命令  同步
function exec(cmd){
  //child_process.exec()创建了一个子进程，第一个参数是一个shell命令，第二个参数是回调函数
  return childProcess.execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version), //去掉版本号以外的多余空格等,使用semver插件吧版本信息转化成规定格式
    versionRequirement: packageConfig.engines.node
  }
]

if(shell.which('npm')){
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'), //自动调用npm --version命令，并且把参数返回给exec函数，从而获取纯净的版本号
    versionRequirement: packageConfig.engines.npm
  })
}


module.exports = function() {
  const warnings = [];
  for(let i = 0; i < versionRequirements.length; i++){
    const mod = versionRequirements[i]
    //第一位置版本号是否满足第二位置条件
    if(!semver.satisfies(mod.currentVersion, mod.versionRequirement)){
      warnings.push(mod.name + ':' +
        chalk.red(mod.currentVersion)+' should be '+
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if(warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    
    for(let i = 0; i < warnings.length; i++){
      const warning = warnings[i]
      console.log('   ' + warning)
    }

    console.log()
    // exit方法会在当进程退出的时候执行,因为进程退出之后将不再执行事件循环，所有只有那些没有回调函数的代码才会被执行
    process.exit(1)
    console.log('test can or not print after exit')
  }
}