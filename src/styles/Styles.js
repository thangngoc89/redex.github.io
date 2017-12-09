// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block  = require("bs-platform/lib/js/block.js");
var Glamor = require("bs-glamor/src/glamor.js");

require('./reset.css')
;

var header = Glamor.css(/* :: */[
      Glamor.background("#DD4C39"),
      /* [] */0
    ]);

var widthContainer = Glamor.css(/* :: */[
      Glamor.margin("0 auto"),
      /* :: */[
        Glamor.maxWidth("960px"),
        /* :: */[
          Glamor.padding("1.0875rem 1.45rem"),
          /* [] */0
        ]
      ]
    ]);

var title = Glamor.css(/* :: */[
      Glamor.margin("0"),
      /* :: */[
        /* Selector */Block.__(1, [
            "& > a",
            /* :: */[
              Glamor.color("white"),
              /* :: */[
                Glamor.textDecoration("none"),
                /* [] */0
              ]
            ]
          ]),
        /* [] */0
      ]
    ]);

var Layout = /* module */[
  /* header */header,
  /* widthContainer */widthContainer,
  /* title */title
];

exports.Layout = Layout;
/*  Not a pure module */