# 说明

IntelliJ 家的 IDE，都自带了 JRE ，所以正常情况下，IDEA 使用的 JRE 目录就在你的IDEA根目录的jre里

### 环境配置
安装JDK(含JRE)，更改环境变量

系统变量→新建 JAVA_HOME 变量，变量值填写jdk的安装目录
系统变量→寻找 Path 变量→编辑，在变量值最后输入 %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
（注意原来Path的变量值末尾有没有;号，如果没有，先输入；号再输入上面的代码）
系统变量→新建 CLASSPATH 变量，变量值填写 .;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar（注意最前面有一点）
系统变量配置完毕

检验是否配置成功 运行cmd 输入 java -version （java 和 -version 之间有空格）

### 设置
找到JetBrains\IntelliJ IDEA\jre\jre\lib ，把 fontconfig 开头的几个不同后缀的文件全部改名，或者转移到其它目录备份。将 fontconfig.properties 扔到该目录下。重启 IDEA，打开设置。将字体设置为 Menlo 即可。

### 自定义
打开 fontconfig.properties ，把 133~142附近，修改这 4 行即可更换英文字体。
我们试着自定义一个新安装的字体 MONACO。在文件未加上以下内容
filename.Monaco=MONACO.TTF
filename.Monaco_Bold=MONACO.TTF
filename.Monaco_Italic=MONACO.TTF
filename.Monaco_Bold_Italic=MONACO.TTF

然后，把 139~142 行替换为
monospaced.plain.alphabetic=Monaco
monospaced.bold.alphabetic=Monaco Bold
monospaced.italic.alphabetic=Monaco Italic
monospaced.bolditalic.alphabetic=Monaco Bold Italic
重启 IDEA，英文字体即变成 Monaco。