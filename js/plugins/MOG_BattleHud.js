//=============================================================================
// MOG_BattleHud.js
//=============================================================================

/*:
 * @plugindesc (v3.5) 战斗 - 角色窗口
 * @author Moghunter （Drill_up翻译）
 * 
 * @param 是否使用垂直模式
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default false
 *
 * @param 平移-窗口 X
 * @desc x轴方向平移，单位像素。注意，负数向右，正数向左。
 * 水平模式0为角色自动位置，垂直模式0为贴在最左边。
 * @default -90
 *
 * @param 平移-窗口 Y
 * @desc y轴方向平移，单位像素。
 * 两种模式0都表示贴在最上面。
 * @default 480
 *
 * @param 间隔-窗口 X
 * @desc 多个角色之间窗口的间隔距离，单位像素。（可为负数）
 * 水平模式会自动规划x轴距离。
 * @default 0
 *
 * @param 间隔-窗口 Y
 * @desc 多个角色之间窗口的间隔距离，单位像素。（可为负数）
 * @default 0
 *
 * @param 滑动-窗口 X
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，
 * 这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 滑动-窗口 Y
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，
 * 这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 250
 *
 * @param 战斗最大人数
 * @type number
 * @min 1
 * @desc 最多可以支持8个角色同时战斗。（只不过看起来像是打群架）
 * @default 4
 *
 * @param ---最前框---
 * @default 
 *
 * @param 是否显示最前框
 * @parent ---最前框---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 最前面的框图，可以挡住头像，生命条等图片。
 * @default true
 *
 * @param 平移-最前框 X
 * @parent ---最前框---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-最前框 Y
 * @parent ---最前框---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 * 
 * @param ---轮到的角色---
 * @default  
 *
 * @param 是否显示轮到图形
 * @parent ---轮到的角色---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-轮到图形 X
 * @parent ---轮到的角色---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default -10
 *
 * @param 平移-轮到图形 Y
 * @parent ---轮到的角色---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 轮到图形旋转速度
 * @parent ---轮到的角色---
 * @desc 旋转的速度，单位 pi/帧。（1秒60帧）
 * 3.14表示360度，设置0.01表示大概5秒转一圈。
 * @default 0.01
 *
 * @param 是否使用轮到图形的缩放效果
 * @parent ---轮到的角色---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 * 
 * @param ---角色头像---
 * @default  
 *
 * @param 是否显示角色头像
 * @parent ---角色头像---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-头像 X
 * @parent ---角色头像---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 52
 *
 * @param 平移-头像 Y
 * @parent ---角色头像---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 62
 *
 * @param 受伤是否震动头像
 * @parent ---角色头像---
 * @type boolean
 * @on 震动
 * @off 不震动
 * @desc true - 震动，false - 不震动
 * @default true
 *
 * @param 头像是否使用缩放效果
 * @parent ---角色头像---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 受伤头像动画帧
 * @parent ---角色头像---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc 若开启，则头像将被分成5份，如果受伤震动，则会播放后面4份的图片，形成角色疼痛的动画。
 * @default false
 *
 * @param 头像优先权
 * @parent ---角色头像---
 * @type select
 * @option 头像在框后面
 * @value 0
 * @option 头像在框前面
 * @value 1
 * @desc 0 - 头像在框后面， 1- 头像在框前面
 * @default 0
 *
 * @param ---角色名---
 * @default  
 *
 * @param 是否显示角色名
 * @parent ---角色名---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-角色名 X
 * @parent ---角色名---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default -45
 *
 * @param 平移-角色名 Y
 * @parent ---角色名---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 75 
 *
 * @param 角色名文本对齐
 * @parent ---角色名---
 * @type select
 * @option 左对齐
 * @value 0
 * @option 居中
 * @value 1
 * @option 右对齐
 * @value 2
 * @desc 0 - 左对齐，1- 居中，2 - 右对齐
 * @default 1
 *
 * @param 角色名字体大小
 * @parent ---角色名---
 * @type number
 * @min 1
 * @desc 角色名的字体大小。
 * @default 20
 *
 * @param 角色名字体粗细
 * @parent ---角色名---
 * @type number
 * @min 1
 * @desc 角色名的字体粗细。
 * @default 4
 *
 * @param 角色名字体是否为斜体
 * @parent ---角色名---
 * @type boolean
 * @on 是
 * @off 否
 * @desc true - 是，false - 否
 * @default false
 *
 * @param ---生命---
 * @default  
 *
 * @param 是否显示生命条
 * @parent ---生命---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-生命条 X
 * @parent ---生命---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 87
 *
 * @param 平移-生命条 Y
 * @parent ---生命---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 17
 *
 * @param 角度-生命条
 * @parent ---生命---
 * @desc 以生命条的位置为基准，逆时针旋转。单位度。
 * @default 0
 *
 * @param 生命条是否流动
 * @parent ---生命---
 * @type boolean
 * @on 流动
 * @off 不流动
 * @desc 生命条从左往右流动。修改时注意资源图片的宽度。
 * true - 流动，false - 不流动
 * @default true
 *
 * @param 是否显示生命数值
 * @parent ---生命---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 平移-生命数值 X
 * @parent ---生命---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 170
 *
 * @param 平移-生命数值 Y
 * @parent ---生命---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default -1
 * 
 * @param 是否显示最大生命数值
 * @parent ---生命---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 平移-最大生命数值 X
 * @parent ---生命---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 245
 *
 * @param 平移-最大生命数值 Y
 * @parent ---生命---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 20
 *
 * @param 生命数值文本对齐方式
 * @parent ---生命---
 * @type select
 * @option 左对齐
 * @value 0
 * @option 居中
 * @value 1
 * @option 右对齐
 * @value 2
 * @desc 0 - 左对齐，1- 居中，2 - 右对齐
 * @default 0
 *
 * @param ---魔法---
 * @default  
 *
 * @param 是否显示魔法条
 * @parent ---魔法---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 平移-魔法条 X
 * @parent ---魔法---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 104
 *
 * @param 平移-魔法条 Y
 * @parent ---魔法---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 43
 *
 * @param 角度-魔法条
 * @parent ---魔法---
 * @desc 以魔法条的位置为基准，逆时针旋转。单位度。
 * @default 0
 *
 * @param 魔法条是否流动
 * @parent ---魔法---
 * @on 流动
 * @off 不流动
 * @desc 魔法条从左往右流动。修改时注意资源图片的宽度。
 * true - 流动，false - 不流动
 * @default true
 *
 * @param 是否显示魔法数值
 * @parent ---魔法---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-魔法数值 X
 * @parent ---魔法---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 187
 *
 * @param 平移-魔法数值 Y
 * @parent ---魔法---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 26
 *
 * @param 是否显示最大魔法数值
 * @parent ---魔法---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 平移-最大魔法数值 X
 * @parent ---魔法---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 196
 *
 * @param 平移-最大魔法数值 Y
 * @parent ---魔法---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 78
 *
 * @param 魔法数值文本对齐方式
 * @parent ---魔法---
 * @type select
 * @option 左对齐
 * @value 0
 * @option 居中
 * @value 1
 * @option 右对齐
 * @value 2
 * @desc 0 - 左对齐，1- 居中，2 - 右对齐
 * @default 0
 *
 * @param ---怒气---
 * @default  
 *
 * @param 是否显示怒气条
 * @parent ---怒气---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 平移-怒气条 X
 * @parent ---怒气---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 104
 *
 * @param 平移-怒气条 Y
 * @parent ---怒气---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 69
 *
 * @param 角度-怒气条
 * @parent ---怒气---
 * @desc 以怒气条的位置为基准，逆时针旋转。单位度。
 * @default 0
 *
 * @param 怒气条是否流动
 * @parent ---怒气---
 * @type boolean
 * @on 流动
 * @off 不流动
 * @desc 怒气条从左往右流动。修改时注意资源图片的宽度。
 * true - 流动，false - 不流动
 * @default true
 *
 * @param 是否显示怒气数值
 * @parent ---怒气---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 平移-怒气数值 X
 * @parent ---怒气---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 187
 *
 * @param 平移-怒气数值 Y
 * @parent ---怒气---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 53
 *
 * @param 是否显示最大怒气数值
 * @parent ---怒气---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 平移-最大怒气数值 X
 * @parent ---怒气---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 185
 *
 * @param 平移-最大怒气数值 Y
 * @parent ---怒气---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 116
 *
 * @param 怒气数值文本对齐方式
 * @parent ---怒气---
 * @type select
 * @option 左对齐
 * @value 0
 * @option 居中
 * @value 1
 * @option 右对齐
 * @value 2
 * @desc 0 - 左对齐，1- 居中，2 - 右对齐
 * @default 0
 *
 * @param ---ATB---
 * @default  
 *
 * @param 是否显示ATB条
 * @parent ---ATB---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 平移-ATB条 X
 * @parent ---ATB---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 80
 *
 * @param 平移-ATB条 Y
 * @parent ---ATB---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 125
 *
 * @param 角度-ATB条
 * @parent ---ATB---
 * @desc 以怒气条的位置为基准，逆时针旋转。单位度。
 * @default 0
 *
 * @param ATB条是否流动
 * @parent ---ATB---
 * @type boolean
 * @on 流动
 * @off 不流动
 * @desc ATB条从左往右流动。修改时注意资源图片的宽度。
 * true - 流动，false - 不流动
 * @default false
 *
 * @param ---状态---
 * @default 
 *
 * @param 是否显示状态
 * @parent ---状态---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 平移-状态 X
 * @parent ---状态---
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。
 * @default 102
 *
 * @param 平移-状态 Y
 * @parent ---状态---
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。
 * @default 86
 *
 * @param 状态显示模式
 * @parent ---状态---
 * @type select
 * @option 依次闪烁
 * @value 0
 * @option 直线并排
 * @value 1
 * @desc 0 - 依次闪烁     1 - 直线并排
 * @default 0
 *
 * @param 最大显示状态数量
 * @parent ---状态---
 * @type number
 * @min 1
 * @desc 状态显示的数量上限。
 * @default 4
 *
 * @param 状态对齐方式
 * @parent ---状态---
 * @type select
 * @option 左对齐
 * @value 0
 * @option 右对齐
 * @value 1
 * @option 上对齐
 * @value 2
 * @option 下对齐
 * @value 3
 * @desc 0 - 左对齐，1 - 右对齐，2 - 上对齐，3 - 下对齐
 * @default 0
 *
 * @param ---------------------------
 * @default 
 *
 * @param 是否矫正技能类型面板位置
 * @type boolean
 * @on 矫正
 * @off 不矫正
 * @desc 矫正的位置，将与角色的位置对齐，如果不矫正，则面板将固定在一个地方。
 * @default true
 *
 * @param ---命令面板---
 * @default 
 *
 * @param 平移-命令面板 X
 * @parent ---命令面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0    
 *
 * @param 平移-命令面板 Y
 * @parent ---命令面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default -15
 *
 * @param 命令面板宽度
 * @parent ---命令面板---
 * @type number
 * @min 1
 * @desc 命令面板的宽度。
 * @default 192
 *
 * @param 命令面板高度
 * @parent ---命令面板---
 * @type number
 * @min 1
 * @desc 命令面板的高度。
 * @default 180
 *
 * @param 滑动-命令面板 X
 * @parent ---命令面板---
 * @desc 命令面板会从滑动的点出现，然后滑动到原位置。
 * x轴方向平移，单位像素。（可为负数）
 * @default 0    
 *
 * @param 滑动-命令面板 Y
 * @parent ---命令面板---
 * @desc 命令面板会从滑动的点出现，然后滑动到原位置。
 * y轴方向平移，单位像素。（可为负数）
 * @default 64
 * 
 * @param 是否使用命令面板布局
 * @parent ---命令面板---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-命令面板布局 X
 * @parent ---命令面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default -25   
 *
 * @param 平移-命令面板布局 Y
 * @parent ---命令面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default -35
 *
 * @param ---战斗回合面板---
 * @default  
 *
 * @param 平移-战斗回合面板 X
 * @parent ---战斗回合面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 325 
 *
 * @param 平移-战斗回合面板 Y
 * @parent ---战斗回合面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default 170
 *
 * @param 战斗回合面板宽度
 * @parent ---战斗回合面板---
 * @type number
 * @min 1
 * @desc 战斗回合面板的宽度。
 * @default 192
 *
 * @param 战斗回合面板高度
 * @parent ---战斗回合面板---
 * @type number
 * @min 1
 * @desc 战斗回合面板的高度。
 * @default 110
 *
 * @param 滑动-战斗回合面板 X
 * @parent ---战斗回合面板---
 * @desc 战斗回合面板会从滑动的点出现，然后滑动到原位置。
 * x轴方向平移，单位像素。（可为负数）
 * @default 0    
 *
 * @param 滑动-战斗回合面板 Y
 * @parent ---战斗回合面板---
 * @desc 战斗回合面板会从滑动的点出现，然后滑动到原位置。
 * y轴方向平移，单位像素。（可为负数）
 * @default -150
 * 
 * @param 是否使用战斗回合面板布局
 * @parent ---战斗回合面板---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-战斗回合面板布局 X
 * @parent ---战斗回合面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default -325   
 *
 * @param 平移-战斗回合面板布局 Y
 * @parent ---战斗回合面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default -42 
 *
 * @param ---帮助面板---
 * @default  
 *
 * @param 平移-帮助面板 X
 * @parent ---帮助面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0 
 *
 * @param 平移-帮助面板 Y
 * @parent ---帮助面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 帮助面板宽度
 * @parent ---帮助面板---
 * @type number
 * @min 1
 * @desc 帮助面板的宽度。
 * @default 816
 *
 * @param 帮助面板高度
 * @parent ---帮助面板---
 * @type number
 * @min 1
 * @desc 帮助面板的高度。
 * @default 108
 *
 * @param 滑动-帮助面板 X
 * @parent ---帮助面板---
 * @desc 帮助面板会从滑动的点出现，然后滑动到原位置。
 * x轴方向平移，单位像素。（可为负数）
 * @default 0    
 *
 * @param 滑动-帮助面板 Y
 * @parent ---帮助面板---
 * @desc 帮助面板会从滑动的点出现，然后滑动到原位置。
 * y轴方向平移，单位像素。（可为负数）
 * @default -150
 * 
 * @param 是否使用帮助面板布局
 * @parent ---帮助面板---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-帮助面板布局 X
 * @parent ---帮助面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-帮助面板布局 Y
 * @parent ---帮助面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param ---技能选择面板---
 * @default  
 *
 * @param 技能选择面板列数
 * @parent ---技能选择面板---
 * @type number
 * @min 1
 * @desc 技能选择面板的列数。默认2列。
 * @default 2
 *
 * @param 平移-技能选择面板 X
 * @parent ---技能选择面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0 
 *
 * @param 平移-技能选择面板 Y
 * @parent ---技能选择面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default 444
 *
 * @param 技能选择面板宽度
 * @parent ---技能选择面板---
 * @type number
 * @min 1
 * @desc 技能选择面板的宽度。
 * @default 816
 *
 * @param 技能选择面板高度
 * @parent ---技能选择面板---
 * @type number
 * @min 1
 * @desc 技能选择面板的高度。
 * @default 180
 *
 * @param 滑动-技能选择面板 X
 * @parent ---技能选择面板---
 * @desc 技能选择面板会从滑动的点出现，然后滑动到原位置。
 * x轴方向平移，单位像素。（可为负数）
 * @default 0    
 *
 * @param 滑动-技能选择面板 Y
 * @parent ---技能选择面板---
 * @desc 技能选择面板会从滑动的点出现，然后滑动到原位置。
 * y轴方向平移，单位像素。（可为负数）
 * @default 100
 * 
 * @param 是否使用技能选择面板布局
 * @parent ---技能选择面板---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-技能选择面板布局 X
 * @parent ---技能选择面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-技能选择面板布局 Y
 * @parent ---技能选择面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default -67
 *
 * @param ---物品选择面板---
 * @default  
 *
 * @param 物品选择面板列数
 * @parent ---物品选择面板---
 * @type number
 * @min 1
 * @desc 物品选择面板的列数。默认2列。
 * @default 2
 *
 * @param 平移-物品选择面板 X
 * @parent ---物品选择面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0 
 *
 * @param 平移-物品选择面板 Y
 * @parent ---物品选择面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default 444
 *
 * @param 物品选择面板宽度
 * @parent ---物品选择面板---
 * @type number
 * @min 1
 * @desc 物品选择面板的宽度。
 * @default 816
 *
 * @param 物品选择面板高度
 * @parent ---物品选择面板---
 * @type number
 * @min 1
 * @desc 物品选择面板的高度。
 * @default 180
 *
 * @param 滑动-物品选择面板 X
 * @parent ---物品选择面板---
 * @desc 物品选择面板会从滑动的点出现，然后滑动到原位置。
 * x轴方向平移，单位像素。（可为负数）
 * @default 0    
 *
 * @param 滑动-物品选择面板 Y
 * @parent ---物品选择面板---
 * @desc 物品选择面板会从滑动的点出现，然后滑动到原位置。
 * y轴方向平移，单位像素。（可为负数）
 * @default 150
 * 
 * @param 是否使用物品选择面板布局
 * @parent ---物品选择面板---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-物品选择面板布局 X
 * @parent ---物品选择面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-物品选择面板布局 Y
 * @parent ---物品选择面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default -67
 *
 * @param ---角色选择面板---
 * @default  
 *
 * @param 角色选择面板列数
 * @parent ---角色选择面板---
 * @type number
 * @min 1
 * @desc 角色选择面板的列数。默认1列。
 * @default 1
 *
 * @param 平移-角色选择面板 X
 * @parent ---角色选择面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0 
 *
 * @param 平移-角色选择面板 Y
 * @parent ---角色选择面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default 444
 *
 * @param 角色选择面板宽度
 * @parent ---角色选择面板---
 * @type number
 * @min 1
 * @desc 角色选择面板的宽度。
 * @default 816
 *
 * @param 角色选择面板高度
 * @parent ---角色选择面板---
 * @type number
 * @min 1
 * @desc 角色选择面板的高度。
 * @default 180
 *
 * @param 滑动-角色选择面板 X
 * @parent ---角色选择面板---
 * @desc 角色选择面板会从滑动的点出现，然后滑动到原位置。
 * x轴方向平移，单位像素。（可为负数）
 * @default 0    
 *
 * @param 滑动-角色选择面板 Y
 * @parent ---角色选择面板---
 * @desc 角色选择面板会从滑动的点出现，然后滑动到原位置。
 * y轴方向平移，单位像素。（可为负数）
 * @default 150
 * 
 * @param 是否使用角色选择面板布局
 * @parent ---角色选择面板---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-角色选择面板布局 X
 * @parent ---角色选择面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-角色选择面板布局 Y
 * @parent ---角色选择面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default -67
 *
 * @param ---敌人选择面板---
 * @default  
 *
 * @param 敌人选择面板列数
 * @parent ---敌人选择面板---
 * @type number
 * @min 1
 * @desc 敌人选择面板的列数。默认2列。
 * @default 2
 *
 * @param 平移-敌人选择面板 X
 * @parent ---敌人选择面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0 
 *
 * @param 平移-敌人选择面板 Y
 * @parent ---敌人选择面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default 444
 *
 * @param 敌人选择面板宽度
 * @parent ---敌人选择面板---
 * @type number
 * @min 1
 * @desc 敌人选择面板的宽度。
 * @default 816
 *
 * @param 敌人选择面板高度
 * @parent ---敌人选择面板---
 * @type number
 * @min 1
 * @desc 敌人选择面板的高度。
 * @default 180
 *
 * @param 滑动-敌人选择面板 X
 * @parent ---敌人选择面板---
 * @desc 敌人选择面板会从滑动的点出现，然后滑动到原位置。
 * x轴方向平移，单位像素。（可为负数）
 * @default 0    
 *
 * @param 滑动-敌人选择面板 Y
 * @parent ---敌人选择面板---
 * @desc 敌人选择面板会从滑动的点出现，然后滑动到原位置。
 * y轴方向平移，单位像素。（可为负数）
 * @default 150
 * 
 * @param 是否使用敌人选择面板布局
 * @parent ---敌人选择面板---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-敌人选择面板布局 X
 * @parent ---敌人选择面板---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-敌人选择面板布局 Y
 * @parent ---敌人选择面板---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default -67
 *
 * @param ---屏幕整体布局---
 * @default  
 *
 * @param 是否使用屏幕整体布局
 * @parent ---屏幕整体布局---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-屏幕整体布局 X
 * @parent ---屏幕整体布局---
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-屏幕整体布局 Y
 * @parent ---屏幕整体布局---
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param ---自定义角色位置---
 * @default   
 *
 * @param 角色位置 1
 * @parent ---自定义角色位置---
 * @desc 固定第一个角色头像的位置，填入 x,y 的坐标。
 * 比如：200,200 不填则不固定位置。
 * @default
 *
 * @param 角色位置 2
 * @parent ---自定义角色位置---
 * @desc 固定第一个角色头像的位置，填入 x,y 的坐标。
 * 比如：200,200 不填则不固定位置。
 * @default
 *
 * @param 角色位置 3
 * @parent ---自定义角色位置---
 * @desc 固定第一个角色头像的位置，填入 x,y 的坐标。
 * 比如：200,200 不填则不固定位置。
 * @default
 *
 * @param 角色位置 4
 * @parent ---自定义角色位置---
 * @desc 固定第一个角色头像的位置，填入 x,y 的坐标。
 * 比如：200,200 不填则不固定位置。
 * @default
 *
 * @param 角色位置 5
 * @parent ---自定义角色位置---
 * @desc 固定第一个角色头像的位置，填入 x,y 的坐标。
 * 比如：200,200 不填则不固定位置。
 * @default
 *
 * @param 角色位置 6
 * @parent ---自定义角色位置---
 * @desc 固定第一个角色头像的位置，填入 x,y 的坐标。
 * 比如：200,200 不填则不固定位置。
 * @default
 *
 * @param 角色位置 7
 * @parent ---自定义角色位置---
 * @desc 固定第一个角色头像的位置，填入 x,y 的坐标。
 * 比如：200,200 不填则不固定位置。
 * @default
 *
 * @param 角色位置 8
 * @parent ---自定义角色位置---
 * @desc 固定第一个角色头像的位置，填入 x,y 的坐标。
 * 比如：200,200 不填则不固定位置。
 * @default
 *
 * @help  
 * =============================================================================
 * +++ MOG_BattleHud (v3.5) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 战斗过程的角色头像窗口。包含角色选择技能、敌人等面板。
 * ★★需要关联外部png文件★★
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 一旦开启了此插件，必须包含以下资源。
 * 需要含有以下文件在 img/battlehud/ 中：（如果没有文件夹，需要自己建立）
 *
 * Layout.png       （窗口）
 * Layout2.png      （最前框）
 * Turn.png         （轮到角色的滚轮）
 * HP_Meter.png     （生命）
 * HP_Number.png
 * MP_Meter.png     （魔法）
 * MP_Number.png
 * TP_Meter.png     （怒气）
 * TP_Number.png
 * ATB_Meter.png    （ATB）
 *
 * Layout_Screen.png  （屏幕整体布局）
 * Layout_Command.png （指令面板）
 * Layout_Help.png    （帮助面板）
 * Layout_Actor.png   （角色选择面板）
 * Layout_Enemy.png   （敌人选择面板）
 * Layout_Item.png    （物品选择面板）
 * Layout_Party.png   （战斗回合面板）
 * Layout_Skill.png   （技能选择面板）
 *
 * Face_1.png    （角色头像，与角色编号一一对应。）
 * Face_2.png
 * Face_3.png
 * ………
 *
 * -----------------------------------------------------------------------------
 * ----插件影响
 * MOG_BattleCommands 技能类型面板 会将该插件中的 角色选择面板 
 * 和 敌人选择面板 屏蔽，并换成新的配置。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件设置战斗时角色窗口是否显示:
 *
 * 插件指令（隐藏）：bhud_disable
 * 插件指令（显示）：bhud_enable 
 * 
 * 你也可以直接写脚本设置显示：
 *
 * 脚本（隐藏）：$gameSystem._bhud_visible = false
 * 脚本（显示）：$gameSystem._bhud_visible = true
 *  
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_BattleHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_BattleHud');
   
    // HUD POSITION
	Moghunter.bhud_pos_x = Number(Moghunter.parameters['平移-窗口 X'] || -90);
	Moghunter.bhud_pos_y = Number(Moghunter.parameters['平移-窗口 Y'] || 480);
	Moghunter.bhud_space_x = Number(Moghunter.parameters['间隔-窗口 X'] || 0);
	Moghunter.bhud_space_y  = Number(Moghunter.parameters['间隔-窗口 Y'] || 0);
	Moghunter.bhud_pos_mode = String(Moghunter.parameters['是否使用垂直模式'] || false);
	Moghunter.bhud_max_battle_members = Number(Moghunter.parameters['战斗最大人数'] || 4);
	Moghunter.bhud_slideX = Number(Moghunter.parameters['滑动-窗口 X'] || 0);
	Moghunter.bhud_slideY = Number(Moghunter.parameters['滑动-窗口 Y'] || 250);
	
    // Layout Overlay
	Moghunter.bhud_layoverlay_visible = String(Moghunter.parameters['是否显示最前框'] || "true");
	Moghunter.bhud_layoverlay_x = Number(Moghunter.parameters['平移-最前框 X'] || 0);
	Moghunter.bhud_layoverlay_y = Number(Moghunter.parameters['平移-最前框 Y'] || 0);
	
    // Screen Layout
	Moghunter.bhud_screen_layout = String(Moghunter.parameters['是否使用屏幕整体布局'] || "true");
	Moghunter.bhud_screen_layout_x = Number(Moghunter.parameters['平移-屏幕整体布局 X'] || 0);
	Moghunter.bhud_screen_layout_y = Number(Moghunter.parameters['平移-屏幕整体布局 Y'] || 0);
		
	// TURN POSITION
	Moghunter.bhud_turn_visible = String(Moghunter.parameters['是否显示轮到图形'] || true);
	Moghunter.bhud_turn_pos_x = Number(Moghunter.parameters['平移-轮到图形 X'] || -10);
	Moghunter.bhud_turn_pos_y = Number(Moghunter.parameters['平移-轮到图形 Y'] || 0);		
	Moghunter.bhud_turn_rotation = Number(Moghunter.parameters['轮到图形旋转速度'] || 0.01);	
	Moghunter.bhud_turn_zoom = String(Moghunter.parameters['是否使用轮到图形的缩放效果'] || "true");
	
	// FACE POSITION
	Moghunter.bhud_face_visible = String(Moghunter.parameters['是否显示角色头像'] || true);
	Moghunter.bhud_face_shake = String(Moghunter.parameters['受伤是否震动头像'] || true);
	Moghunter.bhud_face_zoom = String(Moghunter.parameters['头像是否使用缩放效果'] || true);
	Moghunter.bhud_face_animated = String(Moghunter.parameters['头像动画帧'] || false);
	Moghunter.bhud_face_pos_x = Number(Moghunter.parameters['平移-头像 X'] || 52);
	Moghunter.bhud_face_pos_y = Number(Moghunter.parameters['平移-头像 Y'] || 62);
	Moghunter.bhud_face_priority = Number(Moghunter.parameters['头像优先权'] || 0);
	
	// NAME POSITION
	Moghunter.bhud_name_visible = String(Moghunter.parameters['是否显示角色名'] || true);
	Moghunter.bhud_name_font_size = Number(Moghunter.parameters['角色名字体大小'] || 20);
	Moghunter.bhud_name_font_bold_size = Number(Moghunter.parameters['角色名字体粗细'] || 4);
	Moghunter.bhud_name_font_italic = String(Moghunter.parameters['角色名字体是否为斜体'] || false);
	Moghunter.bhud_name_align  = Number(Moghunter.parameters['角色名文本对齐'] || 1);
	Moghunter.bhud_name_pos_x = Number(Moghunter.parameters['平移-角色名 X'] || -25);
	Moghunter.bhud_name_pos_y = Number(Moghunter.parameters['平移-角色名 Y'] || 75);	

	// HP METER POSITION
	Moghunter.bhud_hp_meter_visible = String(Moghunter.parameters['是否显示生命条'] || true);
	Moghunter.bhud_hp_meter_pos_x = Number(Moghunter.parameters['平移-生命条 X'] || 87);
	Moghunter.bhud_hp_meter_pos_y = Number(Moghunter.parameters['平移-生命条 Y'] || 17);
	Moghunter.bhud_hp_meter_rotation = Number(Moghunter.parameters['角度-生命条'] || 0);
	Moghunter.bhud_hp_meter_flow = String(Moghunter.parameters['生命条是否流动'] || true);
	
	// HP NUMBER POSITION
	Moghunter.bhud_hp_number_visible  = String(Moghunter.parameters['是否显示生命数值'] || true);
	Moghunter.bhud_hp_number_pos_x  = Number(Moghunter.parameters['平移-生命数值 X'] || 170);
	Moghunter.bhud_hp_number_pos_y  = Number(Moghunter.parameters['平移-生命数值 Y'] || -1);
	Moghunter.bhud_maxhp_number_visible  = String(Moghunter.parameters['是否显示最大生命数值'] || false);
	Moghunter.bhud_maxhp_number_pos_x  = Number(Moghunter.parameters['平移-最大生命数值 X'] || 245);
	Moghunter.bhud_maxhp_number_pos_y  = Number(Moghunter.parameters['平移-最大生命数值 Y'] || 20);	
    Moghunter.bhud_hp_align_type  = Number(Moghunter.parameters['生命数值文本对齐方式'] || 0);	
	
	// MP METER POSITION
	Moghunter.bhud_mp_meter_visible = String(Moghunter.parameters['是否显示魔法条'] || true);
	Moghunter.bhud_mp_meter_pos_x = Number(Moghunter.parameters['平移-魔法条 X'] || 104);
	Moghunter.bhud_mp_meter_pos_y = Number(Moghunter.parameters['平移-魔法条 Y'] || 43);	
	Moghunter.bhud_mp_meter_rotation = Number(Moghunter.parameters['角度-魔法条'] || 0);
	Moghunter.bhud_mp_meter_flow = String(Moghunter.parameters['魔法条是否流动'] || true);
	
	// MP NUMBER POSITION
	Moghunter.bhud_mp_number_visible  = String(Moghunter.parameters['是否显示魔法数值'] || true);
	Moghunter.bhud_mp_number_pos_x  = Number(Moghunter.parameters['平移-魔法数值 X'] || 187);
	Moghunter.bhud_mp_number_pos_y  = Number(Moghunter.parameters['平移-魔法数值 Y'] || 26);
	Moghunter.bhud_maxmp_number_visible  = String(Moghunter.parameters['是否显示最大魔法数值'] || false);
	Moghunter.bhud_maxmp_number_pos_x  = Number(Moghunter.parameters['平移-最大魔法数值 X'] || 196);
	Moghunter.bhud_maxmp_number_pos_y  = Number(Moghunter.parameters['平移-最大魔法数值 Y'] || 78);	
    Moghunter.bhud_mp_align_type  = Number(Moghunter.parameters['魔法数值文本对齐方式'] || 0);
	Moghunter.bhud_mp_diagonal_number  = Number(Moghunter.parameters['MP Number Diagonal'] || true);
	
	// TP METER POSITION
	Moghunter.bhud_tp_meter_visible = String(Moghunter.parameters['是否显示怒气条'] || true);
	Moghunter.bhud_tp_meter_pos_x = Number(Moghunter.parameters['平移-怒气条 X'] || 104);
	Moghunter.bhud_tp_meter_pos_y = Number(Moghunter.parameters['平移-怒气条 Y'] || 69);	
	Moghunter.bhud_tp_meter_rotation = Number(Moghunter.parameters['角度-怒气条'] || 0);
	Moghunter.bhud_tp_meter_flow = String(Moghunter.parameters['怒气条是否流动'] || true);
	
	// TP NUMBER POSITION
	Moghunter.bhud_tp_number_visible  = String(Moghunter.parameters['是否显示怒气数值'] || true);
	Moghunter.bhud_tp_number_pos_x  = Number(Moghunter.parameters['平移-怒气数值 X'] || 187);
	Moghunter.bhud_tp_number_pos_y  = Number(Moghunter.parameters['平移-怒气数值 Y'] || 53);
	Moghunter.bhud_maxtp_number_visible  = String(Moghunter.parameters['是否显示最大怒气数值'] || false);
	Moghunter.bhud_maxtp_number_pos_x  = Number(Moghunter.parameters['平移-最大怒气数值 X'] || 185);
	Moghunter.bhud_maxtp_number_pos_y  = Number(Moghunter.parameters['平移-最大怒气数值 Y'] || 116);	
    Moghunter.bhud_tp_align_type  = Number(Moghunter.parameters['怒气数值文本对齐方式'] || 0);
	Moghunter.bhud_tp_diagonal_number  = Number(Moghunter.parameters['TP Number Diagonal'] || false);
	
    // AT METER POSITION
	Moghunter.bhud_at_meter_visible = String(Moghunter.parameters['是否显示ATB条'] || true);
	Moghunter.bhud_at_meter_pos_x = Number(Moghunter.parameters['平移-ATB条 X'] || 100);
	Moghunter.bhud_at_meter_pos_y = Number(Moghunter.parameters['平移-ATB条 Y'] || 125);	
	Moghunter.bhud_at_meter_rotation = Number(Moghunter.parameters['角度-ATB条'] || 0);
	Moghunter.bhud_at_meter_flow = String(Moghunter.parameters['ATB条是否流动'] || false);
	
	// STATES POSITION
	Moghunter.bhud_states_visible = String(Moghunter.parameters['是否显示状态'] || true);
	Moghunter.bhud_states_pos_x = Number(Moghunter.parameters['平移-状态 X'] || 102);
	Moghunter.bhud_states_pos_y = Number(Moghunter.parameters['平移-状态 Y'] || 86);	
    Moghunter.bhud_statesType = Number(Moghunter.parameters['状态显示模式'] || 0);	
	Moghunter.bhud_statesMax = Number(Moghunter.parameters['最大显示状态数量'] || 4);	
	Moghunter.bhud_statesAlign = Number(Moghunter.parameters['状态对齐方式'] || 0);	
	
    // COMMAND WINDOWS
	Moghunter.bhud_auto_pos = String(Moghunter.parameters['是否矫正技能类型面板位置'] || true);
    Moghunter.bhud_com_x = Number(Moghunter.parameters['平移-命令面板 X'] || 0);
    Moghunter.bhud_com_y = Number(Moghunter.parameters['平移-命令面板 Y'] || -15);
	Moghunter.bhud_com_width =  Number(Moghunter.parameters['命令面板宽度'] || 192);
    Moghunter.bhud_com_height =  Number(Moghunter.parameters['命令面板高度'] || 180);		
    Moghunter.bhud_com_slideX = Number(Moghunter.parameters['滑动-命令面板 X'] || 0);
    Moghunter.bhud_com_slideY = Number(Moghunter.parameters['滑动-命令面板 Y'] || 64);
	Moghunter.bhud_com_layout = String(Moghunter.parameters['是否使用命令面板布局'] || true);
    Moghunter.bhud_com_lay_x = Number(Moghunter.parameters['平移-命令面板布局 X'] || -25);
    Moghunter.bhud_com_lay_y = Number(Moghunter.parameters['平移-命令面板布局 Y'] || -35);
	
		
	// PARTY WINDOWS
    Moghunter.bhud_party_x = Number(Moghunter.parameters['平移-战斗回合面板 X'] || 325);
    Moghunter.bhud_party_y = Number(Moghunter.parameters['平移-战斗回合面板 Y'] || 170);
	Moghunter.bhud_party_width =  Number(Moghunter.parameters['战斗回合面板宽度'] || 192);
    Moghunter.bhud_party_height =  Number(Moghunter.parameters['战斗回合面板高度'] || 110);
    Moghunter.bhud_party_slide_x = Number(Moghunter.parameters['滑动-战斗回合面板 X'] || 0);
    Moghunter.bhud_party_slide_y = Number(Moghunter.parameters['滑动-战斗回合面板 Y'] || -150);
	Moghunter.bhud_party_layout = String(Moghunter.parameters['是否使用战斗回合面板布局'] || true);
    Moghunter.bhud_party_lay_x = Number(Moghunter.parameters['平移-战斗回合面板布局 X'] || -325);
    Moghunter.bhud_party_lay_y = Number(Moghunter.parameters['平移-战斗回合面板布局 Y'] || -42);			
		
	// HELP WINDOW
	Moghunter.bhud_help_x = Number(Moghunter.parameters['平移-帮助面板 X'] || 0);
    Moghunter.bhud_help_y = Number(Moghunter.parameters['平移-帮助面板 Y'] || 0);
	Moghunter.bhud_help_width = Number(Moghunter.parameters['帮助面板宽度'] || 816);
    Moghunter.bhud_help_height = Number(Moghunter.parameters['帮助面板高度'] || 108);
	Moghunter.bhud_help_slide_x = Number(Moghunter.parameters['滑动-帮助面板 X'] || 0);
    Moghunter.bhud_help_slide_y = Number(Moghunter.parameters['滑动-帮助面板 Y'] || -150);	
	Moghunter.bhud_help_layout = String(Moghunter.parameters['是否使用帮助面板布局'] || true);
	Moghunter.bhud_help_lay_x = Number(Moghunter.parameters['平移-帮助面板布局 X'] || 0);
    Moghunter.bhud_help_lay_y = Number(Moghunter.parameters['平移-帮助面板布局 Y'] || 0);
		
	// SKILL WINDOW
	Moghunter.bhud_skill_maxcols = Number(Moghunter.parameters['技能选择面板列数'] || 2);
	Moghunter.bhud_skill_x =  Number(Moghunter.parameters['平移-技能选择面板 X'] || 0);
    Moghunter.bhud_skill_y =  Number(Moghunter.parameters['平移-技能选择面板 Y'] || 444);
	Moghunter.bhud_skill_width =  Number(Moghunter.parameters['技能选择面板宽度'] || 816);
    Moghunter.bhud_skill_height =  Number(Moghunter.parameters['技能选择面板高度'] || 180);
	Moghunter.bhud_skill_slide_x =  Number(Moghunter.parameters['滑动-技能选择面板 X'] || 0);
    Moghunter.bhud_skill_slide_y =  Number(Moghunter.parameters['滑动-技能选择面板 Y'] || 100);	
	Moghunter.bhud_skill_layout = String(Moghunter.parameters['是否使用技能选择面板布局'] || true);
	Moghunter.bhud_skill_lay_x =  Number(Moghunter.parameters['平移-技能选择面板布局 X'] || 0);
    Moghunter.bhud_skill_lay_y =  Number(Moghunter.parameters['平移-技能选择面板布局 Y'] || -67);
	
	// ITEM WINDOW
	Moghunter.bhud_item_maxcols = Number(Moghunter.parameters['物品选择面板列数'] || 2);
	Moghunter.bhud_item_x =  Number(Moghunter.parameters['平移-物品选择面板 X'] || 0);
    Moghunter.bhud_item_y =  Number(Moghunter.parameters['平移-物品选择面板 Y'] || 444);
	Moghunter.bhud_item_width =  Number(Moghunter.parameters['物品选择面板宽度'] || 816);
    Moghunter.bhud_item_height =  Number(Moghunter.parameters['物品选择面板高度'] || 180);	
	Moghunter.bhud_item_slide_x =  Number(Moghunter.parameters['滑动-物品选择面板 X'] || 0);
    Moghunter.bhud_item_slide_y =  Number(Moghunter.parameters['滑动-物品选择面板 Y'] || 150);	
	Moghunter.bhud_item_layout = String(Moghunter.parameters['是否使用物品选择面板布局'] || true);
	Moghunter.bhud_item_lay_x =  Number(Moghunter.parameters['平移-物品选择面板布局 X'] || 0);
    Moghunter.bhud_item_lay_y =  Number(Moghunter.parameters['平移-物品选择面板布局 Y'] || -67);
	
    // ACTOR WINDOWS
	Moghunter.bhud_enemy_maxcols = Number(Moghunter.parameters['角色选择面板列数'] || 1);
    Moghunter.bhud_actor_x = Number(Moghunter.parameters['平移-角色选择面板 X'] || 0);
    Moghunter.bhud_actor_y = Number(Moghunter.parameters['平移-角色选择面板 Y'] || 444);
	Moghunter.bhud_actor_width =  Number(Moghunter.parameters['角色选择面板宽度'] || 816);
    Moghunter.bhud_actor_height =  Number(Moghunter.parameters['角色选择面板高度'] || 180);	
    Moghunter.bhud_actor_slide_x = Number(Moghunter.parameters['滑动-角色选择面板 X'] || 0);
    Moghunter.bhud_actor_slide_y = Number(Moghunter.parameters['滑动-角色选择面板 Y'] || 150);	
	Moghunter.bhud_actor_layout = String(Moghunter.parameters['是否使用角色选择面板布局'] || true);
    Moghunter.bhud_actor_lay_x = Number(Moghunter.parameters['平移-角色选择面板布局 X'] || 0);
    Moghunter.bhud_actor_lay_y = Number(Moghunter.parameters['平移-角色选择面板布局 Y'] || -67);
	
    // ENEMY WINDOWS
	Moghunter.bhud_enemy_maxcols = Number(Moghunter.parameters['敌人选择面板列数'] || 2);
    Moghunter.bhud_enemy_x = Number(Moghunter.parameters['平移-敌人选择面板 X'] || 0);
    Moghunter.bhud_enemy_y = Number(Moghunter.parameters['平移-敌人选择面板 Y'] || 444);
	Moghunter.bhud_enemy_width =  Number(Moghunter.parameters['敌人选择面板宽度'] || 816);
    Moghunter.bhud_enemy_height =  Number(Moghunter.parameters['敌人选择面板高度'] || 180);	
    Moghunter.bhud_enemy_slide_x = Number(Moghunter.parameters['滑动-敌人选择面板 X'] || 0);
    Moghunter.bhud_enemy_slide_y = Number(Moghunter.parameters['滑动-敌人选择面板 Y'] || 150);
	Moghunter.bhud_enemy_layout = String(Moghunter.parameters['是否使用敌人选择面板布局'] || true);
    Moghunter.bhud_enemy_lay_x = Number(Moghunter.parameters['平移-敌人选择面板布局 X'] || 0);
    Moghunter.bhud_enemy_lay_y = Number(Moghunter.parameters['平移-敌人选择面板布局 Y'] || -67);
		
	// Custom Position
	Moghunter.bhud_custom_pos = [];
	for (var i = 0; i < 8; i++) {
		Moghunter.bhud_custom_pos[i] = (Moghunter.parameters['角色位置 ' + String(i + 1)] || null);
	};

//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * BHud
//==============================
ImageManager.loadBHud = function(filename) {
    return this.loadBitmap('img/battlehud/', filename, 0, true);
};		

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_bhud_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_bhud_pluginCommand.call(this,command, args)
	if (command === "bhud_disable")  {$gameSystem._bhud_visible = false};
	if (command === "bhud_enable")  {$gameSystem._bhud_visible = true};
	return true;
};
	
//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_bhud_temp_initialize.call(this);
	this._bhud_position = [];	
	this._bhud_position_active = null;
	this._battleEnd = false;
	this._bhud_dp = false;
	this._refreshBhud = false;
};

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_bhud_sys_initialize.call(this);
	this._bhud_position = [];
	for (var i = 0; i < 8; i++) {
	    this._bhud_position[i] = this.set_hudcp(Moghunter.bhud_custom_pos[i]);
    };
	this._bhud_auto_com = false;
	this._bhud_pos_mode = 0;
	this._bhud_visible = true;
	if (String(Moghunter.bhud_pos_mode) === "true") {this._bhud_pos_mode = 1};
	if (String(Moghunter.bhud_auto_pos) === "true") {this._bhud_auto_com = true};
};

//==============================
// * set Hudcp
//==============================
Game_System.prototype.set_hudcp = function(value) {
	if (!value) {return null};
	var s = value.split(',');
	if (!s[0] || !s[1]) {return null};
	return  [Number(s[0]),Number(s[1])];
}

//=============================================================================
// ** Game Interpreter
//=============================================================================

//==============================
// * Command129
//==============================
var _alias_mog_bhud_command129 = Game_Interpreter.prototype.command129;
Game_Interpreter.prototype.command129 = function() {	
	_alias_mog_bhud_command129.call(this);	
	$gameTemp._refresh_Bhud = true;
	return true;
};

//=============================================================================
// ** Game Party
//=============================================================================

//==============================
// * max Battle Members
//==============================
Game_Party.prototype.maxBattleMembers = function() {
    return Math.max(Moghunter.bhud_max_battle_members,1);
};

//=============================================================================
// ** BattleManager
//=============================================================================

//==============================
// * processVictory
//==============================
var _alias_mog_bhud_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	 $gameTemp._battleEnd = true;
	 _alias_mog_bhud_processVictory.call(this);	 
};

//==============================
// * processAbort
//==============================
var _alias_mog_bhud_processAbort = BattleManager.processAbort;
BattleManager.processAbort = function() {
	 $gameTemp._battleEnd = true;
	 _alias_mog_bhud_processAbort.call(this);	 
};

//==============================
// * processDefeat
//==============================
var _alias_mog_bhud_processDefeat = BattleManager.processDefeat;
BattleManager.processDefeat = function() {
	 $gameTemp._battleEnd = true;
	 _alias_mog_bhud_processDefeat.call(this);	 
};


//=============================================================================
// ** Game BattlerBase
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_gbat_initMembers = Game_BattlerBase.prototype.initMembers
Game_BattlerBase.prototype.initMembers = function() {
	_alias_mog_bhud_gbat_initMembers.call(this);
	this.need_refresh_bhud_states = false;
	this._bhud_face_data = [0,0,0,0];
	this._face_pos = [0,0];
};

//==============================
// * addNewState
//==============================
var _alias_mog_bhud_addNewState = Game_BattlerBase.prototype.addNewState
Game_BattlerBase.prototype.addNewState = function(stateId) {
    _alias_mog_bhud_addNewState.call(this,stateId);
	this.need_refresh_bhud_states = true;
};

//==============================
// * eraseState
//==============================
var _alias_mog_bhud_eraseState = Game_BattlerBase.prototype.eraseState
Game_BattlerBase.prototype.eraseState = function(stateId) {
	_alias_mog_bhud_eraseState.call(this,stateId);
	this.need_refresh_bhud_states = true;
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _alias_mog_bhud_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	 var oldhp = target.hp
	 _alias_mog_bhud_apply.call(this,target);
	 if (target.isActor()) {
		 if (oldhp > target.hp) {target._bhud_face_data = [30,20,3,30]}
		 else if (oldhp < target.hp) {target._bhud_face_data = [0,20,1,30]};
	 };
};

//==============================
// * Prepare
//==============================
var _alias_mog_bmhud_action_prepare = Game_Action.prototype.prepare
Game_Action.prototype.prepare = function() {	
	_alias_mog_bmhud_action_prepare.call(this);
	if (this.subject().isActor() && String(Moghunter.bhud_face_zoom) === "true"){this.subject()._bhud_face_data = [0,40,2,40];};
};

//=============================================================================
// ** Game Actor
//=============================================================================

//==============================
// * Gain HP
//==============================
var _alias_mog_bhud_gainHp =Game_Actor.prototype.gainHp;
Game_Actor.prototype.gainHp = function(value) {
    _alias_mog_bhud_gainHp.call(this,value);
	this._bhud_face_data[3] += 1;
};

//==============================
// * Recover All
//==============================
var _alias_mog_bhud_recoverAll = Game_Actor.prototype.recoverAll;
Game_Actor.prototype.recoverAll = function() {
	_alias_mog_bhud_recoverAll.call(this);
	this._bhud_face_data[3] += 1;
};

//=============================================================================
// ** Window_BattleStatus
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bhud_initialize = Window_BattleStatus.prototype.initialize
Window_BattleStatus.prototype.initialize = function() {
	_alias_mog_bhud_initialize.call(this);
    this.visible = false
};

//=============================================================================
// ** Window_BattleSkill
//=============================================================================

//==============================
// * windowWidth
//==============================
Window_BattleSkill.prototype.windowWidth = function() {
   return Moghunter.bhud_skill_width;
};

//==============================
// * maxCols
//==============================
Window_BattleSkill.prototype.maxCols = function() {
    return Moghunter.bhud_skill_maxcols;
};

//=============================================================================
// ** Window_BattleItem
//=============================================================================

//==============================
// * windowWidth
//==============================
Window_BattleItem.prototype.windowWidth = function() {
   return Moghunter.bhud_item_width;
};

//==============================
// * maxCols
//==============================
Window_BattleItem.prototype.maxCols = function() {
    return Moghunter.bhud_item_maxcols;
};

//=============================================================================
// ** Window_BattleActor
//=============================================================================

//==============================
// * Initialize
//==============================
Window_BattleActor.prototype.windowWidth = function() {
    return Moghunter.bhud_actor_width;
};

//==============================
// * maxCols
//==============================
Window_BattleActor.prototype.maxCols = function() {
    return Moghunter.bhud_actor_maxcols;
};

//=============================================================================
// ** Window_BattleEnemy
//=============================================================================

//==============================
// * windowWidth
//==============================
Window_BattleEnemy.prototype.windowWidth = function() {
   return Moghunter.bhud_enemy_width;
};

//==============================
// * maxCols
//==============================
Window_BattleEnemy.prototype.maxCols = function() {
    return Moghunter.bhud_enemy_maxcols;
};

//=============================================================================
// ** Window Actor Command
//=============================================================================

//==============================
// * initialize
//==============================
var _alias_mog_bhud_wActCom_initialize = Window_ActorCommand.prototype.initialize;
Window_ActorCommand.prototype.initialize = function() {
    _alias_mog_bhud_wActCom_initialize.call(this);
	this._com_mode = Number($gameSystem._bhud_pos_mode);
	this._force_hide_duration = 0;
	this.org = [Moghunter.bhud_com_x,Moghunter.bhud_com_y];
	this.org2 = [
			this.org[0] + Moghunter.bhud_com_slideX,
			this.org[1] + Moghunter.bhud_com_slideY
	];
	this.slide = Moghunter.bhud_com_slideX === 0 && Moghunter.bhud_com_slideY === 0 ? false : true;
	this._actorVis != this._actor;
	this.xp = -1;
	this.yp = -1;
};

//==============================
// * Activate
//==============================
var _alias_mog_bhud_wActCom_activate = Window_ActorCommand.prototype.activate;
Window_ActorCommand.prototype.activate = function() {
    _alias_mog_bhud_wActCom_activate.call(this);
    if (String(Moghunter.bhud_com_layout) === "true") {this._force_hide_duration = 1};
};

//==============================
// * Sprite Move To
//==============================
Window_ActorCommand.prototype.sprite_move_to = function(value,real_value) {
	if (value === real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / 12);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// ** slideWindow
//==============================
Window_ActorCommand.prototype.slideWindow = function(win,vmode) {
	 var vm = vmode ? win.active : win.visible;
	 if (vm) {
	     var np = [win.org[0],win.org[1]];
		 win.contentsOpacity += 15;	
	 } else {
	     var np = [win.org2[0],win.org2[1]];
		 win.contentsOpacity = 0;	
    };
	 win.x = this.sprite_move_to(win.x,np[0]);
	 win.y = this.sprite_move_to(win.y,np[1]);	
};

//==============================
// ** update Position
//==============================
Window_ActorCommand.prototype.updatePosition = function() {
	if (Imported.MOG_BattleCommands) {
	     this.updateBattleCommands();
    } else {
		 if (!this.slide) {
			 this.updatePosN();
		 } else {
			 this.updatePosS();
		 };
    };
};

//==============================
// ** update Battle Commands
//==============================
Window_ActorCommand.prototype.updateBattleCommands = function() {
	if ($gameTemp._bhud_position_active) {
		this.visible = this.active;
		if ($gameSystem._bhud_auto_com) {
        	this.x = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
			if (this._com_mode === 0) {
	        	this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y - this.height;}
		    else {this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y};	}
	    else {
        	this.x = Moghunter.bhud_com_x;
         	this.y = Moghunter.bhud_com_y;
		};
	};
};

//==============================
// ** update Position S
//==============================
Window_ActorCommand.prototype.updatePosS = function() {
	if ($gameTemp._bhud_position_active) {
		this.visible = this.active;
		if ($gameSystem._bhud_auto_com) {
			if (this.xp != $gameTemp._bhud_position_active[0] || this.yp != $gameTemp._bhud_position_active[1]) {
				this.xp = $gameTemp._bhud_position_active[0];
				this.yp = $gameTemp._bhud_position_active[1];
				this.org[0] = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
				if (this._com_mode === 0) {
					this.org[1] = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y - this.height;
				} else {
					this.org[1] = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y;
				};
				this.org2 = [
					this.org[0] + Moghunter.bhud_com_slideX,
					this.org[1] + Moghunter.bhud_com_slideY
				];
				if (this._actorVis != this._actor) {
					this.x = this.org2[0];
					this.y = this.org2[1];		
					this._actorVis = this._actor;  
				};					
			};
			this.slideWindow(this,false);			
	    } else {
        	this.slideWindow(this,false);
		};
	};
};

//==============================
// ** update Position N
//==============================
Window_ActorCommand.prototype.updatePosN = function() {
	if ($gameTemp._bhud_position_active) {
		this.visible = this.active;
		if ($gameSystem._bhud_auto_com) {
        	this.x = $gameTemp._bhud_position_active[0] + Moghunter.bhud_com_x;
			if (this._com_mode === 0) {
	        	this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y - this.height;}
		    else {this.y = $gameTemp._bhud_position_active[1] + Moghunter.bhud_com_y};	}
	    else {
        	this.x = Moghunter.bhud_com_x;
         	this.y = Moghunter.bhud_com_y;
		};
	};
};

//==============================
// * Update
//==============================
var _alias_mog_bhud_wcom_update = Window_ActorCommand.prototype.update;
Window_ActorCommand.prototype.update = function() {
    _alias_mog_bhud_wcom_update.call(this);	
    this.updatePosition();
	if (this._force_hide_duration > 0) {this._force_hide_duration -= 1;this.visible = false};
};


//=============================================================================
// ** Sprite Actor
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_bhud_sprt_actor_initialize = Sprite_Actor.prototype.initialize
Sprite_Actor.prototype.initialize = function(battler) {
	_alias_bhud_sprt_actor_initialize.call(this,battler);
	this._sprite_face = false;
	if (String(Moghunter.bhud_face_visible) === "true") {this._sprite_face = true};
};

//==============================
// * Damage Offset X
//==============================
Sprite_Actor.prototype.damageOffsetX = function() {
	if (!$gameSystem.isSideView() && this._sprite_face) {return 0};
    return -32;
};

//==============================
// * update Position
//==============================
var _alias_mog_bhud_sprt_actor_updatePosition = Sprite_Battler.prototype.updatePosition;
Sprite_Battler.prototype.updatePosition = function() {
	if (!$gameSystem.isSideView() && this._sprite_face) {
		if (this._battler && $gameTemp._bhud_position[this._battler.index()]) {
   		   this.x = $gameTemp._bhud_position[this._battler.index()][0] + Moghunter.bhud_face_pos_x;
		   this.y = $gameTemp._bhud_position[this._battler.index()][1] + Moghunter.bhud_face_pos_y;
		   return;
		};
	};	
    _alias_mog_bhud_sprt_actor_updatePosition.call(this);
};

//==============================
// * Setup Animation
//==============================
var _alias_mog_bhud_sprt_actor_setupAnimation = Sprite_Battler.prototype.setupAnimation;
Sprite_Actor.prototype.setupAnimation = function() {
	if (!$gameSystem.isSideView() && this._sprite_face) {
    while (this._battler.isAnimationRequested()) {
        var data = this._battler.shiftAnimation();
        var animation = $dataAnimations[data.animationId];
        var mirror = data.mirror;
        var delay = animation.position === 3 ? 0 : data.delay;
        this.startAnimation(animation, mirror, delay);
        for (var i = 0; i < this._animationSprites.length; i++) {
            var sprite = this._animationSprites[i];
            sprite.visible = true;
        }
    }
	return;
	};
	_alias_mog_bhud_sprt_actor_setupAnimation.call(this);
};

//==============================
// * Setup Damage Popup
//==============================
var _alias_mog_bhud_sprt_actor_setupDamagePopup = Sprite_Battler.prototype.setupDamagePopup
Sprite_Actor.prototype.setupDamagePopup = function() {
	if (!$gameSystem.isSideView() && this._sprite_face) {
	    if (this._battler.isDamagePopupRequested()) {
            var sprite = new Sprite_Damage();
            sprite.x = this.x + this.damageOffsetX();
            sprite.y = this.y + this.damageOffsetY();
            sprite.setup(this._battler);
            this._damages.push(sprite);
            this.parent.addChild(sprite);
            this._battler.clearDamagePopup();
            this._battler.clearResult();
        };
	return;
	};
	_alias_mog_bhud_sprt_actor_setupDamagePopup.call(this);
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// ** createWindowLayer
//==============================
var _alias_mog_bhud_createUpperLayer = Spriteset_Battle.prototype.createUpperLayer
Spriteset_Battle.prototype.createUpperLayer = function() {
	this.create_battle_hud() 	
	_alias_mog_bhud_createUpperLayer.call(this);
	if (!$gameSystem.isSideView()) {this.createActorsF()};
};

//==============================
// ** createActorsF
//==============================
Spriteset_Battle.prototype.createActorsF = function() {
	if (this._actorSprites) {
		for (var i = 0; i < this._actorSprites.length; i++) {
		    this._battleField.removeChild(this._actorSprites[i]);
		};
	};
    this._actorSprites = [];
    for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
        this._actorSprites[i] = new Sprite_Actor();
        this.addChild(this._actorSprites[i]);
    };
};

//==============================
// ** create Battle Hud
//==============================
Spriteset_Battle.prototype.create_battle_hud = function() {
	if (String(Moghunter.bhud_screen_layout) === "true") {this.create_screen_layout();};
	$gameTemp.refresh_Bhud = false;
	$gameTemp._battleEnd = false;
	this._com_mode = Number($gameSystem._bhud_pos_mode)
	this._battle_hud = [];
	for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
		this._battle_hud[i] = new Battle_Hud(i);
		this.addChild(this._battle_hud[i]);
	};	
};

//==============================
// * Create Screen Layout
//==============================
Spriteset_Battle.prototype.create_screen_layout = function() {	
	this._screen_layout = new Sprite(ImageManager.loadBHud("Layout_Screen"));
	this._screen_layout.opacity = 0;
	this._screen_layout.x = Moghunter.bhud_screen_layout_x;
	this._screen_layout.y = Moghunter.bhud_screen_layout_y;
    this.addChild(this._screen_layout);
};

//==============================
// * Update Hud visible
//==============================
Spriteset_Battle.prototype.update_hud_visible = function() {
	if (this.is_hud_visible()) {this._screen_layout.opacity += 10}	 
	else {this._screen_layout.opacity -= 10};
};

//==============================
// * Is Hud Visible
//==============================
Spriteset_Battle.prototype.is_hud_visible = function() {
	if ($gameMessage.isBusy()) {return false};
	if ($gameTemp._battleEnd) {return false};
	if (!$gameSystem._bhud_visible) {return false};
	return true
};

//==============================
// ** Update
//==============================
var _alias_mog_bhud_scbat_update = Spriteset_Battle.prototype.update
Spriteset_Battle.prototype.update = function() {
	_alias_mog_bhud_scbat_update.call(this);
	if (this._screen_layout) {this.update_hud_visible()};
	if ($gameTemp._refresh_Bhud) {this.refresh_battle_hud()};
};

//==============================
// ** Refresh Battle Hud
//==============================
Spriteset_Battle.prototype.refresh_battle_hud = function() {
	if (!this._battle_hud) {return};
	$gameTemp._refresh_Bhud = false;
	for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
		this._battle_hud[i].refresh_bhud();
	};		
};

//==============================
// ** createWindowLayer
//==============================
var _alias_mog_bhud_createWindowLayer = Scene_Battle.prototype.createWindowLayer
Scene_Battle.prototype.createWindowLayer = function() {
	this.create_layout_window();	
	_alias_mog_bhud_createWindowLayer.call(this);
};

//==============================
// ** createAllWindows
//==============================
var _alias_mog_bhud_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
	_alias_mog_bhud_createAllWindows.call(this);
	// ACTOR COMMAND ---------------------------------------------------------------------
    this._actorCommandWindow.x = Moghunter.bhud_com_x;
	this._actorCommandWindow.y = Moghunter.bhud_com_y;
	this._actorCommandWindow.vis = this._actorCommandWindow.visible;
	this._actorCommandWindow.width = Moghunter.bhud_com_width;
	this._actorCommandWindow.height = Moghunter.bhud_com_height;		
	if (String(Moghunter.bhud_com_layout) === "true") {this._actorCommandWindow.opacity = 0};
	// PARTY COMMAND ---------------------------------------------------------------------	
	this._partyCommandWindow.x = Moghunter.bhud_party_x;
	this._partyCommandWindow.y = Moghunter.bhud_party_y;
	this._partyCommandWindow.org = [Moghunter.bhud_party_x,Moghunter.bhud_party_y];
	this._partyCommandWindow.org2 = [
	      this._partyCommandWindow.org[0] + Moghunter.bhud_party_slide_x,
		  this._partyCommandWindow.org[1] + Moghunter.bhud_party_slide_y
    ];
	this._partyCommandWindow.slide = Moghunter.bhud_party_slide_x === 0 && Moghunter.bhud_party_slide_y === 0 ? false : true;
	this._partyCommandWindow.vis = this._partyCommandWindow.visible;
	this._partyCommandWindow.width = Moghunter.bhud_party_width;
	this._partyCommandWindow.height = Moghunter.bhud_party_height;		
	if (String(Moghunter.bhud_party_layout) === "true") {this._partyCommandWindow.opacity = 0};
	// HELP WINDOW ---------------------------------------------------------------------
	this._helpWindow.x = Moghunter.bhud_help_x;
	this._helpWindow.y = Moghunter.bhud_help_y;
	this._helpWindow.org = [this._helpWindow.x,this._helpWindow.y];
	this._helpWindow.org2 = [
	     this._helpWindow.org[0] + Moghunter.bhud_help_slide_x,
		 this._helpWindow.org[1] + Moghunter.bhud_help_slide_y
	];
	this._helpWindow.slide = Moghunter.bhud_help_slide_x === 0 && Moghunter.bhud_help_slide_y === 0 ? false : true;
	this._helpWindow.vis = this._helpWindow.visible;
	this._helpWindow.width = Moghunter.bhud_help_width;
	this._helpWindow.height = Moghunter.bhud_help_height;	
	if (String(Moghunter.bhud_help_layout) === "true") {this._helpWindow.opacity = 0};
	// SKILL WINDOW ---------------------------------------------------------------------
	this._skillWindow.x = Moghunter.bhud_skill_x;
	this._skillWindow.y = Moghunter.bhud_skill_y;
	this._skillWindow.org = [Moghunter.bhud_skill_x,Moghunter.bhud_skill_y];
	this._skillWindow.org2 = [
	     this._skillWindow.org[0] + Moghunter.bhud_skill_slide_x,
		 this._skillWindow.org[1] + Moghunter.bhud_skill_slide_y
	];
	this._skillWindow.slide = Moghunter.bhud_skill_slide_x === 0 && Moghunter.bhud_skill_slide_y === 0 ? false : true;
	this._skillWindow.vis = this._skillWindow.visible;
	this._skillWindow.width = Moghunter.bhud_skill_width;
	this._skillWindow.height = Moghunter.bhud_skill_height;
	if (String(Moghunter.bhud_skill_layout) === "true") {this._skillWindow.opacity = 0};
	// ITEM COMMAND ---------------------------------------------------------------------
	this._itemWindow.x = Moghunter.bhud_item_x;
	this._itemWindow.y = Moghunter.bhud_item_y;
	this._itemWindow.org = [this._itemWindow.x,this._itemWindow.y];
	this._itemWindow.org2 = [
	     this._itemWindow.org[0] + Moghunter.bhud_item_slide_x,
		 this._itemWindow.org[1] + Moghunter.bhud_item_slide_y
	];
	this._itemWindow.slide = Moghunter.bhud_item_slide_x === 0 && Moghunter.bhud_item_slide_y === 0 ? false : true;
	this._itemWindow.vis = this._itemWindow.visible;
	this._itemWindow.width = Moghunter.bhud_item_width;
	this._itemWindow.height = Moghunter.bhud_item_height;	
	if (String(Moghunter.bhud_item_layout) === "true") {this._itemWindow.opacity = 0};
	// ACTOR WINDOW ---------------------------------------------------------------------
	this._actorWindow.x = Moghunter.bhud_actor_x;
	this._actorWindow.y = Moghunter.bhud_actor_y;
	this._actorWindow.org = [this._actorWindow.x,this._actorWindow.y];
	this._actorWindow.org2 = [
	     this._actorWindow.org[0] + Moghunter.bhud_actor_slide_x,
		 this._actorWindow.org[1] + Moghunter.bhud_actor_slide_y
	];
	this._actorWindow.slide = Moghunter.bhud_actor_slide_x === 0 && Moghunter.bhud_actor_slide_y === 0 ? false : true;
	this._actorWindow.vis = this._actorWindow.visible;
	this._actorWindow.width = Moghunter.bhud_actor_width;
	this._actorWindow.height = Moghunter.bhud_actor_height;	
	if (String(Moghunter.bhud_actor_layout) === "true") {this._actorWindow.opacity = 0};
	// ENEMY WINDOW ---------------------------------------------------------------------
	this._enemyWindow.x = Moghunter.bhud_enemy_x;
	this._enemyWindow.y = Moghunter.bhud_enemy_y;
	this._enemyWindow.org = [Moghunter.bhud_enemy_x,Moghunter.bhud_enemy_y];
	this._enemyWindow.org2 = [
	     this._enemyWindow.org[0] + Moghunter.bhud_enemy_slide_x,
		 this._enemyWindow.org[1] + Moghunter.bhud_enemy_slide_y
	];
	this._enemyWindow.slide = Moghunter.bhud_enemy_slide_x === 0 && Moghunter.bhud_enemy_slide_y === 0 ? false : true;
	this._enemyWindow.vis = this._enemyWindow.visible;
	this._enemyWindow.width = Moghunter.bhud_enemy_width;
	this._enemyWindow.height = Moghunter.bhud_enemy_height;
	if (String(Moghunter.bhud_enemy_layout) === "true") {this._enemyWindow.opacity = 0};
};

//==============================
// ** create Layout Window 
//==============================
Scene_Battle.prototype.create_layout_window = function() {
	if (String(Moghunter.bhud_com_layout) === "true") {
		this._com_layout = new Sprite(ImageManager.loadBHud("Layout_Command"))
		this._com_layout.x = Moghunter.bhud_com_lay_x;
		this._com_layout.y = Moghunter.bhud_com_lay_y;
		this._com_layout.visible = false;
		this.addChild(this._com_layout);
	};
	if (String(Moghunter.bhud_party_layout) === "true") {
		this._party_layout = new Sprite(ImageManager.loadBHud("Layout_Party"))
		this._party_layout.x = Moghunter.bhud_party_lay_x;
		this._party_layout.y = Moghunter.bhud_party_lay_y;
		this._party_layout.visible = false;
		this.addChild(this._party_layout);
	};
	if (String(Moghunter.bhud_help_layout) === "true") {
		this._help_layout = new Sprite(ImageManager.loadBHud("Layout_Help"))
		this._help_layout.x = Moghunter.bhud_help_lay_x;
		this._help_layout.y = Moghunter.bhud_help_lay_y;
		this._help_layout.visible = false;
		this.addChild(this._help_layout);
	};	
	if (String(Moghunter.bhud_skill_layout) === "true") {

		this._skill_layout = new Sprite(ImageManager.loadBHud("Layout_Skill"))
		this._skill_layout.x = Moghunter.bhud_skill_lay_x;
		this._skill_layout.y = Moghunter.bhud_skill_lay_y;
		this._skill_layout.visible = false;
		this.addChild(this._skill_layout);
	};
	if (String(Moghunter.bhud_item_layout) === "true") {
		this._item_layout = new Sprite(ImageManager.loadBHud("Layout_Item"))
		this._item_layout.x = Moghunter.bhud_item_lay_x;
		this._item_layout.y = Moghunter.bhud_item_lay_y;
		this._item_layout.visible = false;
		this.addChild(this._item_layout);
	};		
	if (String(Moghunter.bhud_actor_layout) === "true") {
		this._actor_layout = new Sprite(ImageManager.loadBHud("Layout_Actor"))
		this._actor_layout.x = Moghunter.bhud_actor_lay_x;
		this._actor_layout.y = Moghunter.bhud_actor_lay_y;
		this._actor_layout.visible = false;
		this.addChild(this._actor_layout);
	};
	if (String(Moghunter.bhud_enemy_layout) === "true") {
		this._enemy_layout = new Sprite(ImageManager.loadBHud("Layout_Enemy"))
		this._enemy_layout.x = Moghunter.bhud_enemy_lay_x;
		this._enemy_layout.y = Moghunter.bhud_enemy_lay_y;
		this._enemy_layout.visible = false;
		this.addChild(this._enemy_layout);
	};	
};

//==============================
// ** update
//==============================
var _alias_mog_bhud_scnbattle_update = Scene_Battle.prototype.update
Scene_Battle.prototype.update = function() {
    _alias_mog_bhud_scnbattle_update.call(this);
	this.updateBattleHud();
};

//==============================
// ** update Battle Hud
//==============================
Scene_Battle.prototype.updateBattleHud = function() {
	this.updateWindowSlideEffect()
	this.updateLayoutWindow();
};

//==============================
// ** slideWindow
//==============================
Scene_Battle.prototype.slideWindow = function(win,vmode) {
	 var vm = vmode ? win.active : win.visible;
	 if (vm) {
	     var np = [win.org[0],win.org[1]];
		 win.contentsOpacity += 15;	
	 } else {
	     var np = [win.org2[0],win.org2[1]];
		 win.contentsOpacity = 0;	
	 };
	 win.x = this.sprite_move_to(win.x,np[0]);
	 win.y = this.sprite_move_to(win.y,np[1]);	
};

//==============================
// ** updateWindowSlideEffect
//==============================
Scene_Battle.prototype.updateWindowSlideEffect = function() {
	if (this._partyCommandWindow.slide) {this.slideWindow(this._partyCommandWindow,true)};
	if (this._helpWindow.slide) {this.slideWindow(this._helpWindow,false)};
	if (this._skillWindow.slide){this.slideWindow(this._skillWindow,false)};
	if (this._itemWindow.slide) {this.slideWindow(this._itemWindow,false)};
	if (this._actorWindow.slide){this.slideWindow(this._actorWindow,false)};
	if (this._enemyWindow.slide) {this.slideWindow(this._enemyWindow,false)};
};	 
	 
//==============================
// ** updateLayoutWindows
//==============================
Scene_Battle.prototype.updateLayoutWindow = function() {
	if (this._com_layout) {
    	this._com_layout.x = Moghunter.bhud_com_lay_x + this._actorCommandWindow.x;
    	this._com_layout.y = Moghunter.bhud_com_lay_y + this._actorCommandWindow.y;
    	this._com_layout.visible = this._actorCommandWindow.active;
		this._com_layout.opacity = this._actorCommandWindow.contentsOpacity;
		if (!this._actorCommandWindow.visible) {this._com_layout.visible = false};
    };	
	if (this._party_layout) {
    	this._party_layout.x = Moghunter.bhud_party_lay_x + this._partyCommandWindow.x;
    	this._party_layout.y = Moghunter.bhud_party_lay_y + this._partyCommandWindow.y;
    	this._party_layout.visible = this._partyCommandWindow.active;
		this._party_layout.opacity = this._partyCommandWindow.contentsOpacity;
		if (!this._partyCommandWindow.visible) {this._party_layout.visible = false};
    };
	if (this._help_layout) {
    	this._help_layout.x = Moghunter.bhud_help_lay_x + this._helpWindow.x;
    	this._help_layout.y = Moghunter.bhud_help_lay_y + this._helpWindow.y;
    	this._help_layout.visible = this._helpWindow.visible;
		this._help_layout.opacity = this._helpWindow.contentsOpacity;		
    };	
	if (this._skill_layout) {
    	this._skill_layout.x = Moghunter.bhud_skill_lay_x + this._skillWindow.x;
    	this._skill_layout.y = Moghunter.bhud_skill_lay_y + this._skillWindow.y;
    	this._skill_layout.visible = this._skillWindow.active;
		this._skill_layout.opacity = this._skillWindow.contentsOpacity;
		if (!this._skillWindow.visible) {this._skill_layout.visible = false};
    };	
	if (this._item_layout) {
    	this._item_layout.x = Moghunter.bhud_item_lay_x + this._itemWindow.x;
    	this._item_layout.y = Moghunter.bhud_item_lay_y + this._itemWindow.y;
    	this._item_layout.visible = this._itemWindow.active;
		this._item_layout.opacity = this._itemWindow.contentsOpacity;
		if (!this._itemWindow.visible) {this._item_layout.visible = false};
    };	
	if (this._actor_layout) {
    	this._actor_layout.x = Moghunter.bhud_actor_lay_x + this._actorWindow.x;
    	this._actor_layout.y = Moghunter.bhud_actor_lay_y + this._actorWindow.y;
    	this._actor_layout.visible = this._actorWindow.active;
		this._actor_layout.opacity = this._actorWindow.contentsOpacity;
		if (!this._actorWindow.visible) {this._actor_layout.visible = false};
    };	
	if (this._enemy_layout) {
    	this._enemy_layout.x = Moghunter.bhud_enemy_lay_x + this._enemyWindow.x;
    	this._enemy_layout.y = Moghunter.bhud_enemy_lay_y + this._enemyWindow.y;
    	this._enemy_layout.visible = this._enemyWindow.active;
		this._enemy_layout.opacity = this._enemyWindow.contentsOpacity;
		if (!this._enemyWindow.visible) {this._enemy_layout.visible = false};
    };		
};

//==============================
// * Sprite Move To
//==============================
Scene_Battle.prototype.sprite_move_to = function(value,real_value) {
	if (value === real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / 12);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//=============================================================================
// * Battle_Hud
//=============================================================================
function Battle_Hud() {
    this.initialize.apply(this, arguments);
};

Battle_Hud.prototype = Object.create(Sprite.prototype);
Battle_Hud.prototype.constructor = Battle_Hud;

//==============================
// * Initialize
//==============================
Battle_Hud.prototype.initialize = function(hud_id) {
    Sprite.prototype.initialize.call(this);	
    this._data_initial_ref = [0,true];
	this._hud_id = hud_id;
	this._slideA = [0,Moghunter.bhud_slideX,Moghunter.bhud_slideY];
	if (this._slideA[1] != 0 || this._slideA[2] != 0) {this._slideA[0] = this._hud_id * 10};
	this.x = this._slideA[1];
	this.y = this._slideA[2];
	this._hud_size = [0,0];
    this.base_parameter_clear();
    this.load_img();
	this.opacity = 0;
	$gameTemp._bhud_position_active = null;
	$gameTemp._battleEnd = false;
};

//==============================
// * Load Img
//==============================
Battle_Hud.prototype.load_img = function() {
	this._layout_img = ImageManager.loadBHud("Layout");
	if (String(Moghunter.bhud_layoverlay_visible) == "true") {this._layout2_img = ImageManager.loadBHud("Layout2");;};
	this._turn_img = ImageManager.loadBHud("Turn");
	this._state_img = ImageManager.loadSystem("IconSet");
	if (String(Moghunter.bhud_hp_meter_visible) == "true") {this._hp_meter_img = ImageManager.loadBHud("HP_Meter");};
	if (String(Moghunter.bhud_mp_meter_visible) == "true") {this._mp_meter_img = ImageManager.loadBHud("MP_Meter");};
	if (String(Moghunter.bhud_tp_meter_visible) == "true") {this._tp_meter_img = ImageManager.loadBHud("TP_Meter");};
	if (String(Moghunter.bhud_at_meter_visible) == "true") {this._at_meter_img = ImageManager.loadBHud("ATB_Meter");};
	if (String(Moghunter.bhud_hp_number_visible) == "true") {this._hp_number_img = ImageManager.loadBHud("HP_Number");};
	if (String(Moghunter.bhud_mp_number_visible) == "true") {this._mp_number_img = ImageManager.loadBHud("MP_Number");};
	if (String(Moghunter.bhud_tp_number_visible) == "true") {this._tp_number_img = ImageManager.loadBHud("TP_Number");};
	if (String(Moghunter.bhud_maxhp_number_visible) == "true") {this._maxhp_number_img = ImageManager.loadBHud("HP_Number2");};
	if (String(Moghunter.bhud_maxmp_number_visible) == "true") {this._maxmp_number_img = ImageManager.loadBHud("MP_Number2");};
	if (String(Moghunter.bhud_maxtp_number_visible) == "true") {this._maxtp_number_img = ImageManager.loadBHud("TP_Number2");};	
};

//==============================
// * Base Parameter Clear
//==============================
Battle_Hud.prototype.base_parameter_clear = function() {
 	 this._hp_old = [-1,-1];
	 this._maxhp_old = [-1,-1];
	 this._hp_old_ani = [-1,-1];
	 this._hp_flow = [false,0,0,0];
     this._mp_old = [-1,-1];
	 this._maxmp_old = [-1,-1];
	 this._mp_old_ani = [-1,-1];
	 this._mp_flow = [false,0,0,0];
	 this._tp_old = [-1,-1];
	 this._maxtp_old = [-1,-1];
	 this._tp_old_ani = -1;
	 this._tp_flow = [false,0,0,0];
	 this._at_flow = [false,0,0,0];
	 this._hp_number_old = -1;
	 this._mp_number_old = -1;
	 this._hp_number_old = -1;
	 this._number_align = [];
	 this._number_align[0] = Moghunter.bhud_hp_align_type;
	 this._number_align[1] = Moghunter.bhud_mp_align_type;
	 this._number_align[2] = Moghunter.bhud_tp_align_type;
	 this._diagonal_number = [];
	 this._diagonal_number[0] = Moghunter.bhud_hp_diagonal_number;
	 this._diagonal_number[1] = Moghunter.bhud_mp_diagonal_number;
	 this._diagonal_number[2] = Moghunter.bhud_tp_diagonal_number;
	 this._hp_img_data = [0,0,0];
	 this._mp_img_data = [0,0,0];
	 this._tp_img_data = [0,0,0];
	 this._states_old = [];
	 this._states_data = [0,0,0];
	 this._active = false;
	 this._hud_size = [0,0];
};

//==============================
// * Need Refresh Bhud
//==============================
Battle_Hud.prototype.need_refreh_bhud = function() {
	if (this._data_initial_ref[1]) {return true};
	if (this._battler != $gameParty.battleMembers()[this._hud_id]) {return true};
	return false;
};

//==============================
// * Refresh Bhud
//==============================
Battle_Hud.prototype.refresh_bhud = function() {
	 this._data_initial_ref[1] = false;
	 this._battler = $gameParty.battleMembers()[this._hud_id];
	 this.opacity = 0;
	 this._hud_size = [0,0];
	 this.base_parameter_clear();
	 this.create_base_sprites();
};

//==============================
// * Refresh Position
//==============================
Battle_Hud.prototype.refresh_position = function() {
	 this.set_hud_position();	      
	 this.create_sprites();
 	 this._layout.x = this._pos_x;
	 this._layout.y = this._pos_y;
	 if (this._face) {
     	 this._face.x = this._pos_x + Moghunter.bhud_face_pos_x;
 	     this._face.y = this._pos_y + Moghunter.bhud_face_pos_y;
     };
	 if (this._turn) {
        this._turn.x = this._pos_x + (this._turn.width / 2) + Moghunter.bhud_turn_pos_x;
	    this._turn.y = this._pos_y + (this._turn.height / 2) + Moghunter.bhud_turn_pos_y;
	 };
	 if (this._layout2) { 
	  	 this._layout2.x = this._pos_x + Moghunter.bhud_layoverlay_x;
	     this._layout2.y = this._pos_y + Moghunter.bhud_layoverlay_y;
     };
	 if (this._face) {this._battler._face_pos = [this._face.x,this._face.y]}; 
};

//==============================
// * Set Hud Position
//==============================
Battle_Hud.prototype.set_hud_position = function() {
   	 this._hud_size = [this._layout.bitmap.width,this._layout.bitmap.height];
	 this._members_max = $gameParty.battleMembers().length;
	 var ps = [Number(Moghunter.bhud_space_x) * this._hud_id,
                Number(Moghunter.bhud_space_y) * this._hud_id];
	 if ($gameSystem._bhud_position[this._hud_id]) {
	     this._pos_x = $gameSystem._bhud_position[this._hud_id][0];
		 this._pos_y = $gameSystem._bhud_position[this._hud_id][1];
	 }
	 else {
		if (Number($gameSystem._bhud_pos_mode) === 0) {		//!!这个位置，修改了x,y的值
			var spc = ((Graphics.boxWidth - 44) / this._members_max);
			/*if(  this._members_max > 4 ) {	
				spc = ((Graphics.boxWidth - 44) / 4 );
			}
			var px = (spc / 2) + (spc * (this._hud_id % 4) );*/
			var px = (spc / 2) + (spc * this._hud_id );
			this._pos_x = -(Moghunter.bhud_pos_x + px + ps[0]) + 600;
			//this._pos_y = Moghunter.bhud_pos_y + Math.floor(this._hud_id / 4) *90 + ps[1];	
			if(  this._members_max > 4 ) {	
				this._pos_y = Moghunter.bhud_pos_y - 40 + (this._hud_id %2 ) *80 + ps[1];	
			}else{
				this._pos_y = Moghunter.bhud_pos_y + ps[1];	
			}
		}
		else {
			var py = (this._hud_size[1] + 5) * this._hud_id;
			this._pos_x = Moghunter.bhud_pos_x + ps[0];
			this._pos_y = Moghunter.bhud_pos_y + py + ps[1];
		};
     };
	 $gameTemp._bhud_position[this._hud_id] = [this._pos_x,this._pos_y];     
};

//==============================
// * Update
//==============================
Battle_Hud.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (this._data_initial_ref[0] < 2) {this._data_initial_ref[0] += 1; return};
	if (this.need_refreh_bhud()) {this.refresh_bhud()};
    if (!this._battler) {return};
	if (!this._layout.bitmap.isReady()) {return};
	if (this._hud_size[0] === 0) {this.refresh_position();return};
	this.update_sprites();
	this.updateSlide();
};

//==============================
// * Update Slide
//==============================
Battle_Hud.prototype.updateSlide = function() {
	 if (!this.is_hud_visible()) {return}; 
	 if (this._slideA[0] > 0) {
		 this.visible = false;
		 this.opacity = 0;
		 this._slideA[0]--;
	     return;
	 };
	 this.visible = true;
	 this.x = this.update_dif(this.x,0,20);
	 this.y = this.update_dif(this.y,0,20);
};

//==============================
// * Create Base Sprites
//==============================
Battle_Hud.prototype.create_base_sprites = function() {
	this.create_turn();
	if (Number(Moghunter.bhud_face_priority) === 0) {
   	    this.create_face();
	    this.create_layout();}
	else {
		this.create_layout();
   	    this.create_face();	    		
    };
};

//==============================
// * Create Sprites
//==============================
Battle_Hud.prototype.create_sprites = function() {
	this.create_hp_meter();
	this.create_mp_meter();
    this.create_tp_meter();
	this.create_at_meter();	
	if (String(Moghunter.bhud_layoverlay_visible) == "true") {this.create_layoutOverlay()};
	this.create_hp_number();	
	this.create_maxhp_number();
	this.create_mp_number();	
    this.create_maxmp_number();
 	this.create_tp_number();
	this.create_maxtp_number();
	this._stateType = Number(Moghunter.bhud_statesType);
	if (this._stateType === 0) {
        this.create_states();
	} else { 
	    this.create_states2();
	};
	this.create_name();
};

//==============================
// * Update Sprites
//==============================
Battle_Hud.prototype.update_sprites = function() {	
    this.update_active();
	this.update_visible();
	this.update_turn();
	this.update_face();	
    this.update_hp();
	this.update_mp();
    this.update_tp();
	this.update_at();	 
    if (this._state_icon) {
		if (this._stateType === 0) {
 		     this.update_states();
		} else {
			 this.update_states2();
		};
	};
};

//==============================
// * Update Active
//==============================
Battle_Hud.prototype.update_active = function() {	
   this._active = false
   if (this._battler == BattleManager.actor()) {this._active = true;
   $gameTemp._bhud_position_active = $gameTemp._bhud_position[this._hud_id]};
};

//==============================
// * Update visible
//==============================
Battle_Hud.prototype.update_visible = function(sprite) {
	if (this.is_hud_visible()) {this.opacity += 10}	 
	else {this.opacity -= 10};
};

//==============================
// * Is Hud Visible
//==============================
Battle_Hud.prototype.is_hud_visible = function(sprite) {
	if ($gameMessage.isBusy()) {return false};
	if ($gameTemp._battleEnd) {return false};
	if (!$gameSystem._bhud_visible) {return false};
	return true
};

//==============================
// * Update Dif
//==============================
Battle_Hud.prototype.update_dif = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Refresh Meter
//==============================
Battle_Hud.prototype.refresh_meter = function(sprite,value,value_max,type) {
	var ch = sprite.bitmap.height / 2;
    var meter_rate = sprite.bitmap.width * value / value_max;
	sprite.setFrame(0,type * ch, meter_rate, ch);
};

//==============================
// * Refresh Flow
//==============================
Battle_Hud.prototype.refresh_meter_flow = function(sprite,value,value_max,type,flow) {
	var cw = sprite.bitmap.width / 3;
	var ch = sprite.bitmap.height / 2;
    var meter_rate = cw * value / value_max;
	sprite.setFrame(flow,type * ch, meter_rate, ch);
};

//==============================
// * Refresh Number
//==============================
Battle_Hud.prototype.refresh_number = function(sprites,value,img_data,x,y,type) {
    numbers = Math.abs(value).toString().split("");  
	var nx = 0;
	var ny = 0;
	var dir = 1;
   	for (var i = 0; i < sprites.length ; i++) {sprites[i].visible = false;
	   if (i > numbers.length) {return};
	   var n = Number(numbers[i]);
	   sprites[i].setFrame(n * img_data[2], 0, img_data[2], img_data[1]);
	   sprites[i].visible = true;	
	   if (this._number_align[type] === 0) {
            var nx = -(img_data[2] * i) + (img_data[2] * numbers.length);
	   } else if (this._number_align[type] === 1) {
	        var nx = -(img_data[2] * i) + ((img_data[2] / 2) * numbers.length);
	   } else if (this._number_align[type] === 2) {
	        var nx = -(img_data[2] * i);
	   } else if (this._number_align[type] === 3) {
		  var nx = -(img_data[2] * i);
	      var ny = (img_data[3] * i);				
	   } else {
	      var nx = -(img_data[2] * i) + (img_data[2] * numbers.length);
	      var ny = (img_data[3] / 2) * dir;		  
	   };
	   sprites[i].x = x - nx;
	   sprites[i].y = y - ny;
	   dir = dir === 0 ? 1 : 0;
    };
};

//==============================
// * Need Refresh Parameter
//==============================
Battle_Hud.prototype.need_refresh_parameter = function(parameter) {
  switch (parameter) {
  	case 0:
         if (this._hp_old[0] != this._battler.hp) {return true};
		 if (this._hp_old[1] != this._battler.mhp) {return true};
         break;
  	case 1:
         if (this._mp_old[0] != this._battler.mp) {return true};
		 if (this._mp_old[1] != this._battler.mmp) {return true};
         break;			
  	case 2:
         if (this._tp_old != this._battler.tp) {return true};
         break;					
  };
  return false;
};

//==============================
// * Create Layout
//==============================
Battle_Hud.prototype.create_layout = function() {
	this.removeChild(this._layout);
	if (!this._battler) {return};
	this._layout = new Sprite(this._layout_img);
	this.addChild(this._layout);
};

//==============================
// * Create Layout Overlay
//==============================
Battle_Hud.prototype.create_layoutOverlay = function() {
	this.removeChild(this._layout2);
	if (!this._battler) {return};
	this._layout2 = new Sprite(this._layout2_img);
	this.addChild(this._layout2);
};

//==============================
// * Create Turn
//==============================
Battle_Hud.prototype.create_turn = function() {
	if (String(Moghunter.bhud_turn_visible) != "true") {return};
	this.removeChild(this._turn);	
	if (!this._battler) {return};
	this._turn = new Sprite(this._turn_img);
	this._turn.anchor.x = 0.5;
	this._turn.anchor.y = 0.5;
	this._turn.rt = Number(Moghunter.bhud_turn_rotation);
	this._turn.zt = String(Moghunter.bhud_turn_zoom) === "true" ? true : false;
	this._turn.vis = this._turn.visible;
	this._turn_blink = [0,0];
	this.addChild(this._turn);
};
	
//==============================
// * Update Turn
//==============================
Battle_Hud.prototype.update_turn = function() {
	if (!this._turn) {return};
    if (!this._active) {this._turn.visible = false;return;};
	if (this._turn.rt != 0) {this._turn.rotation += this._turn.rt};
	if (this._turn.zt) {this.updateTurnZoom()};
	this._turn.visible = true;
	this._turn_blink[0] += 1
	if (this._turn_blink[0] < 60) {this._turn_blink[1] += 2}
	else if (this._turn_blink[0] < 120) {this._turn_blink[1] -= 2}
	else {this._turn_blink = [0,0]};
	this._turn.opacity = 135 + this._turn_blink[1]
};	

//==============================
// * Update Turn Zoom
//==============================
Battle_Hud.prototype.updateTurnZoom = function() {
	if (this._turn.vis != this._turn.visible) {
		this._turn.vis = this._turn.visible;
		this._turn.scale.x = 1.50;
		this._turn.scale.y = this._turn.scale.x;
	};
	if (this._turn.scale.x > 0) {
		this._turn.scale.x -= 0.04;
		if (this._turn.scale.x <= 1.00) {this._turn.scale.x = 1.00};
	};
	this._turn.scale.y = this._turn.scale.x;
};
	
//==============================
// * Create Face
//==============================
Battle_Hud.prototype.create_face = function() {
	if (String(Moghunter.bhud_face_visible) != "true") {return};
	this.removeChild(this._face);
	if (!this._battler) {return};	
	this._face = new Sprite(ImageManager.loadBHud("Face_" + this._battler._actorId));
	this._face.anchor.x = 0.5;
	this._face.anchor.y = 0.5;
	this._face_data = [0,0,false,false,false,-1];
	if (String(Moghunter.bhud_face_shake) === "true") {this._face_data[2] = true}
	if (String(Moghunter.bhud_face_animated) === "true") {this._face_data[4] = true}
	this._battler._bhud_face_data = [0,0,0,0]
	this.addChild(this._face);
};

//==============================
// * Update Face
//==============================
Battle_Hud.prototype.update_face = function() {
	if (!this._face) {return};
	if (!this._face.bitmap.isReady()) {return};
	if (this._face_data[4] && this._face_data[5] != this._battler._bhud_face_data[2]) {this.refresh_face();};
    this.update_face_animation();
    this.update_face_shake();
    this.update_face_zoom();
};

//==============================
// * Refresh Face
//==============================
Battle_Hud.prototype.refresh_face = function() {
	this._face_data[5] = this._battler._bhud_face_data[2];
	var cw = this._face.bitmap.width / 5;
	var ch = this._face.bitmap.height;
	this._face.setFrame(cw * this._face_data[5], 0, cw, ch);
};

//==============================
// * Update Face Animation
//==============================
Battle_Hud.prototype.update_face_animation = function() {
	if (this._battler._bhud_face_data[3] > 0) {this._battler._bhud_face_data[3] -= 1;
	    if (this._battler._bhud_face_data[3] === 0) {
			if (this._battler.isDead()) {this._battler._bhud_face_data[2] = 4}
			else if (this._battler.hp <= 30 * this._battler.mhp / 100) {this._battler._bhud_face_data[2] = 3}
			else {this._battler._bhud_face_data[2] = 0};
			};
	};
};

//==============================
// * Update Face Zoom
//==============================
Battle_Hud.prototype.update_face_zoom = function() {
	if (this._battler._bhud_face_data[1] > 0) {this._battler._bhud_face_data[1] -= 1;
	    if (this._battler._bhud_face_data[1] == 0) {this._face.scale.x = 1.00}
		else if (this._battler._bhud_face_data[1] < 20) {this._face.scale.x -= 0.01;
		         if (this._face.scale.x < 1.00) {this._face.scale.x = 1.00;};	
	    }
		else if (this._battler._bhud_face_data[1] < 40){this._face.scale.x += 0.01;
		         if (this._face.scale.x > 1.25) {this._face.scale.x = 1.25;};
	    };
	    this._face.scale.y = this._face.scale.x;
	};
};

//==============================
// * Update Face Shake
//==============================
Battle_Hud.prototype.update_face_shake = function() {
	this._face.x = this._pos_x + Moghunter.bhud_face_pos_x;
	if (this._face_data[2] && this._battler._bhud_face_data[0] > 0) {this._battler._bhud_face_data[0] -= 1;
	    this._face.x = this._pos_x + Moghunter.bhud_face_pos_x + ((Math.random() * 12) - 6);
	};
};

//==============================
// * Create Name
//==============================
Battle_Hud.prototype.create_name = function() {
	if (String(Moghunter.bhud_name_visible) != "true") {return};
	this.removeChild(this._name);
	if (!this._battler) {return};	
	this._name = new Sprite(new Bitmap(200,48));
	this._name.x = this._pos_x + Moghunter.bhud_name_pos_x;
	this._name.y = this._pos_y + Moghunter.bhud_name_pos_y;
	this._name.bitmap.fontSize = Number(Moghunter.bhud_name_font_size);
	if (String(Moghunter.bhud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._name.bitmap.outlineWidth = Number(Moghunter.bhud_name_font_bold_size);
	this.addChild(this._name);	
	this.refresh_name();
};

//==============================
// * Refresh Name
//==============================
Battle_Hud.prototype.refresh_name = function() {
	this._name.bitmap.clear();
	var align = "left"
	if (Moghunter.bhud_name_align === 1) {
		var align = "center"
	} else if (Moghunter.bhud_name_align === 2) {
		var align = "right"
	};
	this._name.bitmap.drawText(this._battler._name, 0, 0, this._name.bitmap.width, this._name.bitmap.height,align);	
};

//==============================
// * Create HP Meter
//==============================
Battle_Hud.prototype.create_hp_meter = function() {
	if (String(Moghunter.bhud_hp_meter_visible) != "true") {return};
	this.removeChild(this._hp_meter_blue);
	this.removeChild(this._hp_meter_red);
	if (!this._battler) {return};
	this._hp_meter_red = new Sprite(this._hp_meter_img);
	this._hp_meter_red.x = this._pos_x + Moghunter.bhud_hp_meter_pos_x;
	this._hp_meter_red.y = this._pos_y + Moghunter.bhud_hp_meter_pos_y;
	this._hp_meter_red.rotation = Moghunter.bhud_hp_meter_rotation;
	this.addChild(this._hp_meter_red);		
	this._hp_meter_blue = new Sprite(this._hp_meter_img);
	this._hp_meter_blue.x = this._hp_meter_red.x;
	this._hp_meter_blue.y = this._hp_meter_red.y;
	this._hp_meter_blue.rotation = this._hp_meter_red.rotation;
	this.addChild(this._hp_meter_blue);
	if (String(Moghunter.bhud_hp_meter_flow) === "true") {this._hp_flow[0] = true;
	    this._hp_flow[2] = this._hp_meter_img.width / 3;
		this._hp_flow[3] = this._hp_flow[2] * 2;
		this._hp_flow[1] = Math.floor(Math.random() * this._hp_flow[2]);
	};
};

//==============================
// * Create HP Number
//==============================
Battle_Hud.prototype.create_hp_number = function() {
	if (String(Moghunter.bhud_hp_number_visible) != "true") {return};
	if (this._hp_number) {for (var i = 0; i < this._hp_number.length; i++) {this.removeChild(this._hp_number[i]);}};
	if (!this._battler) {return};
	this._hp_number = [];
	this._hp_img_data = [this._hp_number_img.width,this._hp_number_img.height,
	                      this._hp_number_img.width / 10, this._hp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_hp_number_pos_x,
						  this._pos_y + Moghunter.bhud_hp_number_pos_y,
						  ];
	for (var i = 0; i < 6; i++) {
	   this._hp_number[i] = new Sprite(this._hp_number_img);
	   this._hp_number[i].visible = false;
	   this._hp_number[i].x = this._hp_img_data[4];
	   this._hp_number[i].y = this._hp_img_data[5];
	   this.addChild(this._hp_number[i]);
	};	
	this._hp_number_old = this._battler.hp;
	this.refresh_number(this._hp_number,this._hp_number_old,this._hp_img_data,this._hp_img_data[4],this._hp_img_data[5],0);	
};

//==============================
// * Create maxHP Number
//==============================
Battle_Hud.prototype.create_maxhp_number = function() {
	if (String(Moghunter.bhud_maxhp_number_visible) != "true") {return};
	if (this._maxhp_number) {for (var i = 0; i < this._maxhp_number.length; i++) {this.removeChild(this._maxhp_number[i]);}};
	if (!this._battler) {return};	
	this._maxhp_number = [];
	this._maxhp_img_data = [this._maxhp_number_img.width,this._maxhp_number_img.height,
	                      this._maxhp_number_img.width / 10, this._maxhp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_maxhp_number_pos_x,
						  this._pos_y + Moghunter.bhud_maxhp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._maxhp_number[i] = new Sprite(this._maxhp_number_img);
	   this._maxhp_number[i].visible = false;
	   this._maxhp_number[i].x = this._maxhp_img_data[4];
	   this._maxhp_number[i].y = this._maxhp_img_data[5];
	   this.addChild(this._maxhp_number[i]);
	};		
	this._maxhp_number_old = this._battler.mhp;
	this.refresh_number(this._maxhp_number,this._maxhp_number_old,this._maxhp_img_data,this._maxhp_img_data[4],this._maxhp_img_data[5],0);	
};

//==============================
// * Update HP
//==============================
Battle_Hud.prototype.update_hp = function() {
	if (this._hp_meter_blue) {
		if(this._hp_flow[0]) {
		   this.refresh_meter_flow(this._hp_meter_blue,this._battler.hp,this._battler.mhp,0,this._hp_flow[1]);
	   	   var dif_meter = this.update_dif(this._hp_old_ani[0],this._battler.hp,160)
		   if (this._hp_old_ani[0] != dif_meter) {this._hp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._hp_meter_red,this._hp_old_ani[0],this._battler.mhp,1,this._hp_flow[1]);
		   };
		   this._hp_flow[1] += 1.5;
		   if (this._hp_flow[1] > this._hp_flow[3]) {this._hp_flow[1] = 0};		   
   	    }
		else {
		   if (this.need_refresh_parameter(0)) {
				this.refresh_meter(this._hp_meter_blue,this._battler.hp,this._battler.mhp,0);
				this._hp_old = [this._battler.hp,this._battler.mhp];
			};
			var dif_meter = this.update_dif(this._hp_old_ani[0],this._battler.hp,160)
			if (this._hp_old_ani[0] != dif_meter) {this._hp_old_ani[0] = dif_meter;
			this.refresh_meter(this._hp_meter_red,this._hp_old_ani[0],this._battler.mhp,1);};		
	    };
    };
	if (this._hp_number) {
		var dif_number = this.update_dif(this._hp_number_old,this._battler.hp,30)
		if (this._hp_number_old != dif_number) {this._hp_number_old = dif_number;
		this.refresh_number(this._hp_number,this._hp_number_old,this._hp_img_data,this._hp_img_data[4],this._hp_img_data[5],0);};
	};
    if (this._maxhp_number) {
		if (this._maxhp_number_old != this._battler.mhp) {this._maxhp_number_old = this._battler.mhp;
		this.refresh_number(this._maxhp_number,this._maxhp_number_old,this._maxhp_img_data,this._maxhp_img_data[4],this._maxhp_img_data[5],0);};
	};
};

//==============================
// * Create MP Meter
//==============================
Battle_Hud.prototype.create_mp_meter = function() {
	if (String(Moghunter.bhud_mp_meter_visible) != "true") {return};
	this.removeChild(this._mp_meter_blue);
	this.removeChild(this._mp_meter_red);
	if (!this._battler) {return};
	this._mp_meter_red = new Sprite(this._mp_meter_img);
	this._mp_meter_red.x = this._pos_x + Moghunter.bhud_mp_meter_pos_x;
	this._mp_meter_red.y = this._pos_y + Moghunter.bhud_mp_meter_pos_y;
	this._mp_meter_red.rotation = Moghunter.bhud_mp_meter_rotation;
	this.addChild(this._mp_meter_red);		
	this._mp_meter_blue = new Sprite(this._mp_meter_img);
	this._mp_meter_blue.x = this._mp_meter_red.x;
	this._mp_meter_blue.y = this._mp_meter_red.y;
	this._mp_meter_blue.rotation = this._mp_meter_red.rotation;
	this.addChild(this._mp_meter_blue);
	if (String(Moghunter.bhud_mp_meter_flow) === "true") {this._mp_flow[0] = true;
	    this._mp_flow[2] = this._mp_meter_img.width / 3;
		this._mp_flow[3] = this._mp_flow[2] * 2;
		this._mp_flow[1] = Math.floor(Math.random() * this._mp_flow[2]);
	};
};

//==============================
// * Create MP Number
//==============================
Battle_Hud.prototype.create_mp_number = function() {
	if (String(Moghunter.bhud_mp_number_visible) != "true") {return};
	if (this._mp_number) {for (var i = 0; i < this._mp_number.length; i++) {this.removeChild(this._mp_number[i]);}};
	if (!this._battler) {return};
	this._mp_number = [];
	this._mp_img_data = [this._mp_number_img.width,this._mp_number_img.height,
	                      this._mp_number_img.width / 10, this._mp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_mp_number_pos_x,
						  this._pos_y + Moghunter.bhud_mp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._mp_number[i] = new Sprite(this._mp_number_img);
	   this._mp_number[i].visible = false;
	   this._mp_number[i].x = this._mp_img_data[4];
	   this._mp_number[i].y = this._mp_img_data[5] ;
	   this.addChild(this._mp_number[i]);
	};	
	this._mp_number_old = this._battler.mp;
	this.refresh_number(this._mp_number,this._mp_number_old,this._mp_img_data,this._mp_img_data[4],this._mp_img_data[5],1);	
};

//==============================
// * Create MaxMP Number
//==============================
Battle_Hud.prototype.create_maxmp_number = function() {
	if (String(Moghunter.bhud_maxmp_number_visible) != "true") {return};
	if (this._maxmp_number) {for (var i = 0; i < this._maxmp_number.length; i++) {this.removeChild(this._maxmp_number[i]);}};
	if (!this._battler) {return};
	this._maxmp_number = [];
	this._maxmp_img_data = [this._maxmp_number_img.width,this._maxmp_number_img.height,
	                      this._maxmp_number_img.width / 10, this._maxmp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_maxmp_number_pos_x,
						  this._pos_y + Moghunter.bhud_maxmp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._maxmp_number[i] = new Sprite(this._maxmp_number_img);
	   this._maxmp_number[i].visible = false;
	   this._maxmp_number[i].x = this._maxmp_img_data[4];
	   this._maxmp_number[i].y = this._maxmp_img_data[5] ;
	   this.addChild(this._maxmp_number[i]);
	};	
	this._maxmp_number_old = this._battler.mmp;
	this.refresh_number(this._maxmp_number,this._maxmp_number_old,this._maxmp_img_data,this._maxmp_img_data[4],this._maxmp_img_data[5],1);	
};

//==============================
// * Update MP
//==============================
Battle_Hud.prototype.update_mp = function() {
	if (this._mp_meter_blue) {
		if(this._mp_flow[0]) {
		   this.refresh_meter_flow(this._mp_meter_blue,this._battler.mp,this._battler.mmp,0,this._mp_flow[1]);
	   	   var dif_meter = this.update_dif(this._mp_old_ani[0],this._battler.mp,160)
		   if (this._mp_old_ani[0] != dif_meter) {this._mp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._mp_meter_red,this._mp_old_ani[0],this._battler.mmp,1,this._mp_flow[1]);
		   };
		   this._mp_flow[1] += 1.5;
		   if (this._mp_flow[1] > this._mp_flow[3]) {this._mp_flow[1] = 0};		   
   	    }
		else {		
			if (this.need_refresh_parameter(1)) {
				this.refresh_meter(this._mp_meter_blue,this._battler.mp,this._battler.mmp,0);
				this._mp_old = [this._battler.mp,this._battler.mmp];
			};
			var dif_meter = this.update_dif(this._mp_old_ani[0],this._battler.mp,160)
			if (this._mp_old_ani[0] != dif_meter) {this._mp_old_ani[0] = dif_meter;
			this.refresh_meter(this._mp_meter_red,this._mp_old_ani[0],this._battler.mmp,1);};
		};
    };
	if (this._mp_number) {
		var dif_number = this.update_dif(this._mp_number_old,this._battler.mp,30)
		if (this._mp_number_old != dif_number) {this._mp_number_old = dif_number;
		this.refresh_number(this._mp_number,this._mp_number_old,this._mp_img_data,this._mp_img_data[4],this._mp_img_data[5],1);};
	};
	if (this._maxmp_number) {
		if (this._maxmp_number_old != this._battler.mmp) {this._maxmp_number_old = this._battler.mmp;
		this.refresh_number(this._maxmp_number,this._maxmp_number_old,this._maxmp_img_data,this._maxmp_img_data[4],this._maxmp_img_data[5],1);};
	};	
	
};

//==============================
// * Create TP Meter
//==============================
Battle_Hud.prototype.create_tp_meter = function() {
	if (String(Moghunter.bhud_tp_meter_visible) != "true") {return};
	this.removeChild(this._tp_meter_blue);
	this.removeChild(this._tp_meter_red);
	if (!this._battler) {return};
	this._tp_meter_red = new Sprite(this._tp_meter_img);
	this._tp_meter_red.x = this._pos_x + Moghunter.bhud_tp_meter_pos_x;
	this._tp_meter_red.y = this._pos_y + Moghunter.bhud_tp_meter_pos_y;
	this._tp_meter_red.rotation = Moghunter.bhud_tp_meter_rotation;
	this.addChild(this._tp_meter_red);		
	this._tp_meter_blue = new Sprite(this._tp_meter_img);
	this._tp_meter_blue.x = this._tp_meter_red.x;
	this._tp_meter_blue.y = this._tp_meter_red.y;
	this._tp_meter_blue.rotation = this._tp_meter_red.rotation;
	this.addChild(this._tp_meter_blue);
	if (String(Moghunter.bhud_tp_meter_flow) === "true") {this._tp_flow[0] = true;
	    this._tp_flow[2] = this._tp_meter_img.width / 3;
		this._tp_flow[3] = this._tp_flow[2] * 2;
		this._tp_flow[1] = Math.floor(Math.random() * this._tp_flow[2]);
	};
};

//==============================
// * Create TP Number
//==============================
Battle_Hud.prototype.create_tp_number = function() {
	if (String(Moghunter.bhud_tp_number_visible) != "true") {return};
	if (this._tp_number) {for (var i = 0; i < this._tp_number.length; i++) {this.removeChild(this._tp_number[i]);}};
	if (!this._battler) {return};
	this._tp_number = [];
	this._tp_img_data = [this._tp_number_img.width,this._tp_number_img.height,
	                      this._tp_number_img.width / 10, this._tp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_tp_number_pos_x,
						  this._pos_y + Moghunter.bhud_tp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._tp_number[i] = new Sprite(this._tp_number_img);
	   this._tp_number[i].visible = false;
	   this._tp_number[i].x = this._tp_img_data[4];
	   this._tp_number[i].y = this._tp_img_data[5] ;
	   this.addChild(this._tp_number[i]);
	};	
	this._tp_number_old = this._battler.tp;
	this.refresh_number(this._tp_number,this._tp_number_old,this._tp_img_data,this._tp_img_data[4],this._tp_img_data[5],2);	
};

//==============================
// * Create MaxTP Number
//==============================
Battle_Hud.prototype.create_maxtp_number = function() {
	if (String(Moghunter.bhud_maxtp_number_visible) != "true") {return};
	if (this._maxtp_number) {for (var i = 0; i < this._maxtp_number.length; i++) {this.removeChild(this._maxtp_number[i]);}};
	if (!this._battler) {return};
	this._maxtp_number = [];
	this._maxtp_img_data = [this._maxtp_number_img.width,this._maxtp_number_img.height,
	                      this._maxtp_number_img.width / 10, this._maxtp_number_img.height / 2,
						  this._pos_x + Moghunter.bhud_maxtp_number_pos_x,
						  this._pos_y + Moghunter.bhud_maxtp_number_pos_y,
						  ];
	for (var i = 0; i < 5; i++) {
	   this._maxtp_number[i] = new Sprite(this._maxtp_number_img);
	   this._maxtp_number[i].visible = false;
	   this._maxtp_number[i].x = this._maxtp_img_data[4];
	   this._maxtp_number[i].y = this._maxtp_img_data[5] ;
	   this.addChild(this._maxtp_number[i]);
	};	
	this._maxtp_number_old = 100;
	this.refresh_number(this._maxtp_number,this._maxtp_number_old,this._maxtp_img_data,this._maxtp_img_data[4],this._maxtp_img_data[5],2);	
};

//==============================
// * Update TP
//==============================
Battle_Hud.prototype.update_tp = function() {
	if (this._tp_meter_blue) {
		if(this._tp_flow[0]) {
		   this.refresh_meter_flow(this._tp_meter_blue,this._battler.tp,100,0,this._tp_flow[1]);
	   	   var dif_meter = this.update_dif(this._tp_old_ani[0],this._battler.tp,160)
		   if (this._tp_old_ani[0] != dif_meter) {this._tp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._tp_meter_red,this._tp_old_ani[0],100,1,this._tp_flow[1]);
		   };
		   this._tp_flow[1] += 1.5;
		   if (this._tp_flow[1] > this._tp_flow[3]) {this._tp_flow[1] = 0};		   
   	    }
		else {	
			if (this.need_refresh_parameter(2)) {
				this.refresh_meter(this._tp_meter_blue,this._battler.tp,100,0);
				this._tp_old = [this._battler.tp,100];
			};
			var dif_meter = this.update_dif(this._tp_old_ani[0],this._battler.tp,160)
			if (this._tp_old_ani[0] != dif_meter) {this._tp_old_ani[0] = dif_meter;
			this.refresh_meter(this._tp_meter_red,this._tp_old_ani[0],100,1);};
	};
    };
	if (this._tp_number) {
		var dif_number = this.update_dif(this._tp_number_old,this._battler.tp,30)
		if (this._tp_number_old != dif_number) {this._tp_number_old = dif_number;
		this.refresh_number(this._tp_number,this._tp_number_old,this._tp_img_data,this._tp_img_data[4],this._tp_img_data[5],2);};
	};
};

//==============================
// * Create AT Meter
//==============================
Battle_Hud.prototype.create_at_meter = function() {
	if (String(Moghunter.bhud_at_meter_visible) != "true") {return};
	this.removeChild(this._at_meter);
	if (!this._battler) {return};
	this._at_meter = new Sprite(this._at_meter_img);
	this._at_meter.x = this._pos_x + Moghunter.bhud_at_meter_pos_x;
	this._at_meter.y = this._pos_y + Moghunter.bhud_at_meter_pos_y;
	this._at_meter.rotation = Moghunter.bhud_at_meter_rotation; 
	this.addChild(this._at_meter);	
	if (String(Moghunter.bhud_at_meter_flow) === "true") {this._at_flow[0] = true;
	    this._at_flow[2] = this._at_meter_img.width / 3;
		this._at_flow[3] = this._at_flow[2] * 2;
		this._at_flow[1] = Math.floor(Math.random() * this._at_flow[2]);
	};
    this.check_compatibility_atb();	
};

//==============================
// * Check Compatibility ATB
//==============================
Battle_Hud.prototype.check_compatibility_atb = function() {
	if (Imported.Ellye_ATB) {
        var parameters = $plugins.filter(function(p) {
            return p.description.contains('<Ellye ATB>');
        })[0].parameters; 
	this._ellye_max_atb = Number(parameters['Full ATB Gauge'] || 50000);
	};
};

//==============================
// * Update AT
//==============================
Battle_Hud.prototype.update_at = function() {
	if (this._at_meter) {
		if (!this.at === -1) {this._at_meter.visible = false; return}
	    else {this._at_meter.visible = true};
		if(this._at_flow[0]) {
    		if (this.is_casting()){
				if (this.is_max_cast()){
				   this.refresh_at_meter_flow(this._at_meter,this.cast_at(),this.cast_max_at(),3,this._at_flow[1]);}
				else {
				   this.refresh_at_meter_flow(this._at_meter,this.cast_at(),this.cast_max_at(),2,this._at_flow[1]);
				};
			}
			else if (this.is_max_at()){
			   this.refresh_at_meter_flow(this._at_meter,this.at(),this.max_at(),1,this._at_flow[1]);}
			else {
			   this.refresh_at_meter_flow(this._at_meter,this.at(),this.max_at(),0,this._at_flow[1]);};
			   
		   this._at_flow[1] += 1.5;
		   if (this._at_flow[1] > this._at_flow[3]) {this._at_flow[1] = 0};		   
   	    }
		else {	
			if (this.is_casting()){
				if (this.is_max_cast()){
				   this.refresh_at_meter(this._at_meter,this.cast_at(),this.cast_max_at(),3);}
				else {
				   this.refresh_at_meter(this._at_meter,this.cast_at(),this.cast_max_at(),2);
				};
			}
			else if (this.is_max_at()){
			   this.refresh_at_meter(this._at_meter,this.at(),this.max_at(),1);}
			else {
			   this.refresh_at_meter(this._at_meter,this.at(),this.max_at(),0);};
		};
    };
};

//==============================
// * Refresh AT Meter
//==============================
Battle_Hud.prototype.refresh_at_meter = function(sprite,value,value_max,type) {
	var ch = sprite.bitmap.height / 4;
    var meter_rate = sprite.bitmap.width * value / value_max;
	sprite.setFrame(0,type * ch, meter_rate, ch);
};

//==============================
// * Refresh AT Meter Flow
//==============================
Battle_Hud.prototype.refresh_at_meter_flow = function(sprite,value,value_max,type,flow) {
	var cw = sprite.bitmap.width / 3;
	var ch = sprite.bitmap.height / 4;
    var meter_rate = cw * value / value_max;
	sprite.setFrame(flow,type * ch, meter_rate, ch);
};

//==============================
// * At
//==============================
Battle_Hud.prototype.at = function() {
 if (Imported.MOG_ATB) {return this._battler._atb};
 if (Imported.Ellye_ATB) {return this._battler.atb};
 if (Imported.YEP_X_BattleSysATB) {return Math.abs(this._battler._atbSpeed)};
 if (Imported['VE - Active Time Battle']) {
	 return this._battler.maxAtb - this._battler.atb;
 }; 
  return -1;	
}

//==============================
// * Max At
//==============================
Battle_Hud.prototype.max_at = function() {
  if (Imported.MOG_ATB) {return this._battler._max_atb};
  if (Imported.Ellye_ATB) {return this._ellye_max_atb};
  if (Imported.YEP_X_BattleSysATB) {return Math.abs(BattleManager._atbTarget)};
  if (Imported['VE - Active Time Battle']) {return this._battler.maxAtb};
  return 1;	
};

//==============================
// * Cast AT
//==============================
Battle_Hud.prototype.cast_at = function() {
  if (Imported.MOG_ATB) {return this._battler._cast_atb[1]};
  if (Imported.Ellye_ATB) {return this._battler.current_cast_atb};
  if (Imported.YEP_X_BattleSysATB) {return Math.abs(this._battler._atbCharge)};
  if (Imported['VE - Active Time Battle']) {
	  return this._battler.maxAtb - this._battler.atb;
  }; 
  return 0;	
};

//==============================
// * Cast Max AT
//==============================
Battle_Hud.prototype.cast_max_at = function() {
  if (Imported.MOG_ATB) {return this._battler._cast_atb[2]};
  if (Imported.Ellye_ATB) {return this._battler.target_cast_atb};
  if (Imported.YEP_X_BattleSysATB) {return Math.abs(BattleManager._atbCharge)};
  if (Imported['VE - Active Time Battle']) {return this._battler.maxAtb};
  return 1;	
};

//==============================
// * Is Casting
//==============================
Battle_Hud.prototype.is_casting = function() {
  if (Imported.MOG_ATB) {if (this._battler._cast_atb[0]) {return true;}};
  if (Imported.Ellye_ATB) {if (this._battler.casting_action) {return true;}}; 
  if (Imported.YEP_X_BattleSysATB) {if (this._battler._atbCharging) {return true;}} ;
  if (Imported['VE - Active Time Battle']) {return this._battler.isAtbCast()};
  return false;	
};

//==============================
// * Is Max Atb
//==============================
Battle_Hud.prototype.is_max_at = function() {
	return this.at() >= this.max_at();
};

//==============================
// * Is Max Cast
//==============================
Battle_Hud.prototype.is_max_cast = function() {
	return this.cast_at() >= this.cast_max_at();
};

//==============================
// * Create States
//==============================
Battle_Hud.prototype.create_states = function() {
	if (String(Moghunter.bhud_states_visible) != "true") {return};
	this.removeChild(this._state_icon);
	if (!this._battler) {return};
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(this._state_img);
	this._state_icon.x = this._pos_x + Moghunter.bhud_states_pos_x;
	this._state_icon.y = this._pos_y + Moghunter.bhud_states_pos_y;
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};

//==============================
// * Create States
//==============================
Battle_Hud.prototype.refresh_states = function() {
	this._states_data[0] = 0;
	this._states_data[2] = 0;
	this._state_icon.visible = false;
	if (this._battler.allIcons().length == 0) {this._states_data[1] = 0;return};
       if (this._battler.allIcons()[this._states_data[1]]) {	
		this._states_data[0] = this._battler.allIcons()[this._states_data[1]];
		this._state_icon.visible = true;
		var sx = this._states_data[0] % 16 * 32;
		var sy = Math.floor(this._states_data[0] / 16) * 32;
		this._state_icon.setFrame(sx, sy, 32, 32);
		this._battler.need_refresh_bhud_states = false;	
	
	   };
	this._states_data[1] += 1;
	if (this._states_data[1] >= this._battler.allIcons().length) {
		this._states_data[1] = 0
	};
};

//==============================
// * Update States
//==============================
Battle_Hud.prototype.update_states = function() {
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
};

//==============================
// * Need Refresh States
//==============================
Battle_Hud.prototype.need_refresh_states = function() {
	if (this._battler.need_refresh_bhud_states) {return true};
	if (this._states_data[2] > 60) {return true};
	return false;
};

//==============================
// * Create States 2
//==============================
Battle_Hud.prototype.create_states2 = function() {
	if (String(Moghunter.bhud_states_visible) != "true") {return};
	this.removeChild(this._state_icon);
	if (!this._battler) {return};
	this._states_data = [0,0,0];
	this._stateIcons = [];
	this._state_icon = new Sprite();
	this._state_icon.x = this._pos_x + Moghunter.bhud_states_pos_x;
	this._state_icon.y = this._pos_y + Moghunter.bhud_states_pos_y;
	this._state_icon.visible = false;	
	this.addChild(this._state_icon);
	this.refresh_states2();	
};

//==============================
// * Create States
//==============================
Battle_Hud.prototype.refresh_states2 = function() {
	this._state_icon.visible = false;
	this._battler.need_refresh_bhud_states = false;
	for (i = 0; i < this._stateIcons.length; i++){
		this._state_icon.removeChild(this._stateIcons[i]);
	};	
	if (this._battler.allIcons().length == 0) {return};
	this._state_icon.visible = true;
	this._stateIcons = [];
	var w = Window_Base._iconWidth;
	var icons = this._battler.allIcons().slice(0,w);
	var m = Math.min(Math.max(this._battler.allIcons().length,0),Moghunter.bhud_statesMax);
	var align = Moghunter.bhud_statesAlign;
	for (i = 0; i < m; i++){
		 this._stateIcons[i] = new Sprite(this._state_img);
	     var sx = icons[i] % 16 * w;
		 var sy = Math.floor(icons[i] / 16) * w;
		 this._stateIcons[i].setFrame(sx, sy, w, w);
		 if (align === 1) {
		     this._stateIcons[i].x = -((w + 4) * i);
		 } else if (align === 2) { 
		     this._stateIcons[i].y = (w + 4) * i;
		 } else if (align === 3) {
			 this._stateIcons[i].y = -((w + 4) * i);
		 } else {	 
		     this._stateIcons[i].x = (w + 4) * i;
		 };
		 this._state_icon.addChild(this._stateIcons[i]);
	};
};

//==============================
// * Update States 2
//==============================
Battle_Hud.prototype.update_states2 = function() {
	if (this.need_refresh_states2()) {this.refresh_states2();};
};

//==============================
// * Need Refresh States 2
//==============================
Battle_Hud.prototype.need_refresh_states2 = function() {
	if (this._battler.need_refresh_bhud_states) {return true};
	return false;
};