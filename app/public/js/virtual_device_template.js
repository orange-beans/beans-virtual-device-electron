var vd_template =
  {
    "f_obj" : {
      "en" : {
        "v_logic"   : {
          "actions"     : [],
          "conditions"  : [
            {
              "_comment"  : "***** if *****",
              "func_str"  : "\r\nif ",
              "name"      : "if",
              "disp_str"  : "\r\nif "
            },
            {
              "_comment": "***** else *****",
              "func_str"  : "\r\nelse ",
              "name"      : "else",
              "disp_str"  : "\r\nelse "
            },
            {
              "_comment": "***** not *****",
              "func_str"  : "not ",
              "name"      : "not",
              "disp_str"  : "not "
            },
            {
              "_comment": "***** and *****",
              "func_str"  : "and ",
              "name"      : "and",
              "disp_str"  : "and "
            },
            {
              "_comment": "***** or *****",
              "func_str"  : "or ",
              "name"      : "or",
              "disp_str"  : "or "
            }
          ]
        },
        "v_button" : {
          "actions"     : [],
          "conditions": [
            {
              "_comment": "***** is pressed *****",
              "func_str"  : "(@is_pressed#)",
              "name"      : "is pressed",
              "disp_str"  : "(@is pressed#)"
            },
            {
              "_comment": "***** is released *****",
              "func_str"  : "!(@is_pressed#)",
              "name"      : "is released",
              "disp_str"  : "(@is released#)"
            },
            {
              "_comment": "***** is clicked *****",
              "func_str"  : "(@is_clicked#)",
              "name"      : "is clicked",
              "disp_str"  : "(@is clicked#)"
            }
          ]
        },
        "v_light"  : {
          "actions"     : [
            {
              "_comment": "***** on *****",
              "func_str"  : "(@on()#)",
              "name"      : "on",
              "disp_str"  : "(@on#)"
            },
            {
              "_comment": "***** off *****",
              "func_str"  : "(@off()#)",
              "name"      : "off",
              "disp_str"  : "(@off#)"
            },
            {
              "_comment": "***** toggle *****",
              "func_str"  : "(@toggle()#)",
              "name"      : "toggle",
              "disp_str"  : "(@toggle#)"
            },
            {
              "_comment": "***** fast blink *****",
              "func_str"  : "(@blink('250')#)",
              "name"      : "fast blink",
              "disp_str"  : "(@fast blink#)"
            },
            {
              "_comment": "***** slow blink *****",
              "func_str"  : "(@blink('500')#)",
              "name"      : "slow blink",
              "disp_str"  : "(@slow blink#)"
            },
            {
              "_comment": "***** on red *****",
              "func_str"  : "(@on('red')#)",
              "name"      : "on red",
              "disp_str"  : "(@on red#)"
            },
            {
              "_comment": "***** on orange *****",
              "func_str"  : "(@on('orange')#)",
              "name"      : "on orange",
              "disp_str"  : "(@on orange#)"
            },
            {
              "_comment": "***** on yellow *****",
              "func_str"  : "(@on('yellow')#)",
              "name"      : "on yellow",
              "disp_str"  : "(@on yellow#)"
            },
            {
              "_comment": "***** on green *****",
              "func_str"  : "(@on('green')#)",
              "name"      : "on green",
              "disp_str"  : "(@on green#)"
            },
            {
              "_comment": "***** on blue *****",
              "func_str"  : "(@on('blue')#)",
              "name"      : "on blue",
              "disp_str"  : "(@on blue#)"
            },
            {
              "_comment": "***** on cyan *****",
              "func_str"  : "(@on('cyan')#)",
              "name"      : "on cyan",
              "disp_str"  : "(@on cyan#)"
            },
            {
              "_comment": "***** on purple *****",
              "func_str"  : "(@on('purple')#)",
              "name"      : "on purple",
              "disp_str"  : "(@on purple#)"
            }
          ],
          "conditions"  : []
        },
        "v_music"  : {
          "actions"     : [
            {
              "_comment": "***** play *****",
              "func_str"  : "(@play()#)",
              "name"      : "play",
              "disp_str"  : "(@play#)"
            },
            {
              "_comment": "***** stop *****",
              "func_str"  : "(@stop()#)",
              "name"      : "stop",
              "disp_str"  : "(@stop#)"
            },
            {
              "_comment": "***** toggle *****",
              "func_str"  : "(@toggle()#)",
              "name"      : "toggle",
              "disp_str"  : "(@toggle#)"
            },
            {
              "_comment": "***** pause *****",
              "func_str"  : "(@pause()#)",
              "name"      : "pause",
              "disp_str"  : "(@pause#)"
            },
            {
              "_comment": "***** play next *****",
              "func_str"  : "(@next()#)",
              "name"      : "play next",
              "disp_str"  : "(@play next#)"
            },
            {
              "_comment": "***** play prev *****",
              "func_str"  : "(@prev()#)",
              "name"      : "play prev",
              "disp_str"  : "(@play prev#)"
            }
          ],
          "conditions"  : []
        },
        "v_gyro"  : {
          "actions"     : [],
          "conditions"  : [
            {
              "_comment": "***** is shaking *****",
              "func_str"  : "(@is_shaking#)",
              "name"      : "is shaking",
              "disp_str"  : "(@is shaking#)"
            },
            {
              "_comment": "***** is pressed *****",
              "func_str"  : "(@is_shaking_hard#)",
              "name"      : "is shaking hard",
              "disp_str"  : "(@is shaking hard#)"
            }
          ]
        }
      },
      "cn" : {
        "v_router" : {
          "actions"     : [
            {
              "_comment": "***** wait 5 *****",
              "func_str"  : "(@wait(5)#)",
              "name"      : "经过了5秒钟",
              "disp_str"  : "(@经过了5秒钟#)"
            }
          ],
          "conditions": [
            {
              "_comment": "***** wait 5 *****",
              "func_str"  : "(@_wait_5#)",
              "name"      : "经过了5秒钟",
              "disp_str"  : "(@经过了5秒钟#)"
            }
          ]
        },
        "v_logic"   : {
          "actions"     : [],
          "conditions"  : [
            {
              "_comment"  : "***** if *****",
              "func_str"  : "\r\nif ",
              "name"      : "如果",
              "disp_str"  : "\r\n如果 "
            },
            {
              "_comment": "***** else *****",
              "func_str"  : "\r\nelse ",
              "name"      : "否则",
              "disp_str"  : "\r\n否则 "
            },
            {
              "_comment": "***** not *****",
              "func_str"  : "not ",
              "name"      : "不是",
              "disp_str"  : "不是 "
            },
            {
              "_comment": "***** and *****",
              "func_str"  : "and ",
              "name"      : "并且",
              "disp_str"  : "并且 "
            },
            {
              "_comment": "***** or *****",
              "func_str"  : "or ",
              "name"      : "或者",
              "disp_str"  : "或者 "
            }
          ]
        },
        "v_button" : {
          "actions"     : [],
          "conditions": [
            {
              "_comment": "***** is pressed *****",
              "func_str"  : "(@is_pressed#)",
              "name"      : "被按下",
              "disp_str"  : "(@被按下#)"
            },
            {
              "_comment": "***** is released *****",
              "func_str"  : "!(@is_pressed#)",
              "name"      : "被放开",
              "disp_str"  : "(@被放开#)"
            },
            {
              "_comment": "***** is clicked *****",
              "func_str"  : "(@is_clicked#)",
              "name"      : "被点击",
              "disp_str"  : "(@被点击#)"
            }
          ]
        },
        "v_light"  : {
          "actions"     : [
            {
              "_comment": "***** on *****",
              "func_str"  : "(@on()#)",
              "name"      : "打开",
              "disp_str"  : "(@打开#)"
            },
            {
              "_comment": "***** off *****",
              "func_str"  : "(@off()#)",
              "name"      : "关掉",
              "disp_str"  : "(@关掉#)"
            },
            {
              "_comment": "***** toggle *****",
              "func_str"  : "(@toggle()#)",
              "name"      : "切换",
              "disp_str"  : "(@切换#)"
            },
            {
              "_comment": "***** fast blink *****",
              "func_str"  : "(@blink('250')#)",
              "name"      : "快闪烁",
              "disp_str"  : "(@快闪烁#)"
            },
            {
              "_comment": "***** slow blink *****",
              "func_str"  : "(@blink('500')#)",
              "name"      : "慢闪烁",
              "disp_str"  : "(@慢闪烁#)"
            },
            {
              "_comment": "***** on red *****",
              "func_str"  : "(@on('red')#)",
              "name"      : "变成红色",
              "disp_str"  : "(@变成红色#)"
            },
            {
              "_comment": "***** on orange *****",
              "func_str"  : "(@on('orange')#)",
              "name"      : "变成橙色",
              "disp_str"  : "(@变成橙色#)"
            },
            {
              "_comment": "***** on yellow *****",
              "func_str"  : "(@on('yellow')#)",
              "name"      : "变成黄色",
              "disp_str"  : "(@变成黄色#)"
            },
            {
              "_comment": "***** on green *****",
              "func_str"  : "(@on('green')#)",
              "name"      : "变成绿色",
              "disp_str"  : "(@变成绿色#)"
            },
            {
              "_comment": "***** on blue *****",
              "func_str"  : "(@on('blue')#)",
              "name"      : "变成蓝色",
              "disp_str"  : "(@变成蓝色#)"
            },
            {
              "_comment": "***** on cyan *****",
              "func_str"  : "(@on('cyan')#)",
              "name"      : "变成青色",
              "disp_str"  : "(@变成青色#)"
            },
            {
              "_comment": "***** on purple *****",
              "func_str"  : "(@on('purple')#)",
              "name"      : "变成紫色",
              "disp_str"  : "(@变成紫色#)"
            }
          ],
          "conditions": []
        },
        "v_music"  : {
          "actions"     : [
            {
              "_comment": "***** play *****",
              "func_str"  : "(@play()#)",
              "name"      : "播放",
              "disp_str"  : "(@播放#)"
            },
            {
              "_comment": "***** stop *****",
              "func_str"  : "(@stop()#)",
              "name"      : "关掉",
              "disp_str"  : "(@关掉#)"
            },
            {
              "_comment": "***** toggle *****",
              "func_str"  : "(@toggle()#)",
              "name"      : "切换",
              "disp_str"  : "(@切换#)"
            },
            {
              "_comment": "***** pause *****",
              "func_str"  : "(@pause()#)",
              "name"      : "暂停",
              "disp_str"  : "(@暂停#)"
            },
            {
              "_comment": "***** play next *****",
              "func_str"  : "(@next()#)",
              "name"      : "播放下一首",
              "disp_str"  : "(@播放下一首#)"
            },
            {
              "_comment": "***** play prev *****",
              "func_str"  : "(@prev()#)",
              "name"      : "播放上一首",
              "disp_str"  : "(@播放上一首#)"
            }
          ],
          "conditions"  : []
        },
        "v_gyro"  : {
          "actions"     : [],
          "conditions"  : [
            {
              "_comment": "***** is shaking *****",
              "func_str"  : "(@is_shaking#)",
              "name"      : "被摇晃",
              "disp_str"  : "(@被摇晃#)"
            },
            {
              "_comment": "***** is pressed *****",
              "func_str"  : "(@is_shaking_hard#)",
              "name"      : "被用力摇",
              "disp_str"  : "(@被用力摇#)"
            }
          ]
        }
      }
    }
  };
