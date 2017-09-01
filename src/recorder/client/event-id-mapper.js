const mapEventToId = evt => {
  evt.EVENT_MOUSEMOVE = 8;
  a.EVENT_MOUSEMOVE_CURVE = 9;
  a.EVENT_SCROLL = 10;
  a.EVENT_SCROLL_CURVE = 11;
  a.EVENT_MOUSEDOWN = 12;
  a.EVENT_MOUSEUP = 13;
  a.EVENT_KEYDOWN = 14;
  a.EVENT_KEYUP = 15;
  a.EVENT_CLICK = 16;
  a.EVENT_FOCUS = 17;
  a.EVENT_VALUECHANGE = 18;
  a.EVENT_RESIZE = 19;
  a.EVENT_DOMLOADED = 20;
  a.EVENT_LOAD = 21;
  a.EVENT_PLACEHOLDER_SIZE = 22;
  a.EVENT_UNLOAD = 23;
  a.EVENT_BLUR = 24;
  a.EVENT_SET_FRAME_BASE = 25;
  a.EVENT_TOUCHSTART = 32;
  a.EVENT_TOUCHEND = 33;
  a.EVENT_TOUCHCANCEL = 34;
  a.EVENT_TOUCHMOVE = 35;
  a.EVENT_TOUCHMOVE_CURVE = 36;
  a.EVENT_NAVIGATE = 37;
  a.EVENT_PLAY = 38;
  a.EVENT_PAUSE = 39;
  a.EVENT_INNERWIDTH = 40;
  a.EVENT_INNERWIDTH_CURVE = 41;
  a.EVENT_LOG = 48;
  a.EVENT_ERROR = 49;
  a.EVENT_DBL_CLICK = 50;
  a.EVENT_FORM_SUBMIT = 51;
  a.EVENT_WINDOW_FOCUS = 52;
  a.EVENT_WINDOW_BLUR = 53;
  a.EVENT_HEARTBEAT = 54;
  a.NAVIGATION_TIMING = 55;
  a.EVENT_SYS_SETMETA = 8192;
  a.EVENT_SYS_SETVAR = 8193;
  a.EVENT_SYS_HIGHLIGHT = 8194;
  a.EVENT_COOKED_LOAD = "load";
  a.EVENT_COOKED_UNLOAD = "unload";
  a.EVENT_COOKED_NAVIGATE = "navigate";
  a.EVENT_COOKED_CLICK = "click";
  a.EVENT_COOKED_TAP = "tap";
  a.EVENT_COOKED_FOCUS = "focus";
  a.EVENT_COOKED_CHANGE = "change";
  a.EVENT_COOKED_MOUSE_THRASH = "thrash";
  a.EVENT_FORM_ABANDONED = "abandon";
}

a.isUserActionEvent = function(h) {
    switch (h) {
    case a.EVENT_MOUSEDOWN:
    case a.EVENT_MOUSEMOVE:
    case a.EVENT_MOUSEMOVE_CURVE:
    case a.EVENT_MOUSEUP:
    case a.EVENT_KEYDOWN:
    case a.EVENT_KEYUP:
    case a.EVENT_TOUCHSTART:
    case a.EVENT_TOUCHEND:
    case a.EVENT_TOUCHMOVE:
    case a.EVENT_TOUCHMOVE_CURVE:
    case a.EVENT_TOUCHCANCEL:
    case a.EVENT_CLICK:
    case a.EVENT_SCROLL:
    case a.EVENT_SCROLL_CURVE:
    case a.EVENT_NAVIGATE:
        return !0
    }
    return !1
}
;
a.MAX_LOGS_PER_PAGE = 1024