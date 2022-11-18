const logger = Logger.getLogger('photo-watchface')

import { style } from './style.js';
import { constants } from './constants.js';

WatchFace({
  init_view() {    
    // TODO Can this be incorporated into the style config file
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: px(0),
      y: px(0),
      w: px(194),
      h: px(368),
      color: 0x000000,
      show_level: hmUI.show_level.ONAL_AOD,
    });

    for ( const widget of style.widgets ) {
      // TODO order of widget creation matters, fix it somehow
      // Priority, layer sorting variable, but extra computation
      if (widget.name !== constants.ANALOG_AOD) {
        hmUI.createWidget(hmUI.widget[widget.type], {
          ...widget.config, show_level: hmUI.show_level.ONLY_NORMAL});
      } else {
        hmUI.createWidget(hmUI.widget[widget.type], {
          ...widget.config, show_level: hmUI.show_level.ONAL_AOD});
      }
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
