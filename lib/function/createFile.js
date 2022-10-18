 function getData(path) {
        return new Promise(resolve => {//文件读写是一个异步请求 用promise包起来方便使用时的async+await
          plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, fs => {//请求文件系统
            console.log('plus.io.PUBLIC_DOCUMENTS',plus.io.PUBLIC_DOCUMENTS)
            fs.root.getFile(path, {//请求地址文件  '/storage/emulated/0/config.txt'为根目录  '/config.txt'为/storage/Android/data/io.dcloud.HBuilder（包名）/documents/config.js
              create: true//当文件不存在时创建
            }, fileEntry => {
              fileEntry.file(function (file) {
                let fileReader = new plus.io.FileReader()//new一个可以用来读取文件的对象fileReader
                fileReader.readAsText(file, 'utf-8')//读文件的格式
                fileReader.onerror = e => {//读文件失败
                  console.log('获取文件失败', fileReader.error)
                  plus.nativeUI.toast("获取文件失败,请重启应用", {
                    background: '#ffa38c',
                  })
                  return
                }
                fileReader.onload = e => {//读文件成功
                  let txtData = e.target.result
                  resolve(txtData)////回调函数内的值想返回到函数外部  就用promise+resolve来返回出去
                }
              })
            }, error => {
              console.log('2新建获取文件失败', error)
              plus.nativeUI.toast("获取文件失败,请重启应用", {
                background: '#ffa38c',
              })
              return
            })
          },
            e => {
              console.log('1请求文件系统失败', e.message)
              plus.nativeUI.toast("请求系统失败,请重启应用", {
                background: '#ffa38c',
              })
              return
            }
          )
        }
        )
      }