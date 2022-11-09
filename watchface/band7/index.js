const logger = Logger.getLogger('photo-watchface')

const img = (function(type){
  return (path) => type + '/' + path
})('')

WatchFace({
  init_view() {
    let pointerAlwaysOnObj = {
      hour_centerX: px(97),
      hour_centerY: px(184),
      hour_posX: px(12),
      hour_posY: px(65),
      hour_path: img('pointer/hour.png'),

      minute_centerX: px(97),
      minute_centerY: px(184),
      minute_posX: px(12),
      minute_posY: px(82),
      minute_path: img('pointer/minute.png'),

      minute_cover_path: img('pointer/center.png'),
      minute_cover_x: px(83),
      minute_cover_y: px(169)
    }

    let pointerNormalObj = {
      hour_centerX: px(97),
      hour_centerY: px(184),
      hour_posX: px(12),
      hour_posY: px(65),
      hour_path: img('pointer/hour.png'),

      minute_centerX: px(97),
      minute_centerY: px(184),
      minute_posX: px(12),
      minute_posY: px(82),
      minute_path: img('pointer/minute.png'),

      second_centerX: px(97),
      second_centerY: px(184),
      second_posX: px(12),
      second_posY: px(96),
      second_path: img('pointer/second.png'),

      second_cover_path: img('pointer/center.png'),
      second_cover_x: px(83),
      second_cover_y: px(169)
    }
    
    var screenType = hmSetting.getScreenType();
    if (screenType == hmSetting.screen_type.AOD) {
      img_bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: px(0),
        y: px(0),
        w: px(194),
        h: px(368),
        color: 0x000000,
      });
      let timePointerAlwaysOn = hmUI.createWidget(hmUI.widget.TIME_POINTER, pointerAlwaysOnObj);
    } else {
      img_bg = hmUI.createWidget(hmUI.widget.IMG, {
        x: px(0),
        y: px(0),
        w: px(194),
        h: px(368),
        src: img('bg.png'),
        show_level: hmUI.show_level.ONAL_NORML,
      });
      let timePointerNormal = hmUI.createWidget(hmUI.widget.TIME_POINTER, pointerNormalObj);
    }
  },

  onInit() {
    logger.log('index page.js on init invoke')
  },

  build() {
    logger.log('index page.js on build invoke')
    this.init_view()
  },

  onDestroy() {
    logger.log('index page.js on destroy invoke')
  },
})
