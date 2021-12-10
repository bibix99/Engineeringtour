var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.19840876875168334,
        "pitch": 0.018636151225624786,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.1672172843875046,
          "pitch": -0.15273868794201562,
          "rotation": 6.283185307179586,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.878624802249476,
          "pitch": 0.08362700960020852,
          "title": "Faculty of Engineering",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.3333932503422457,
        "pitch": -0.016358193062311344,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.9595779185076534,
          "pitch": 0.015512309852054429,
          "rotation": 4.71238898038469,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.02593216142801502,
          "pitch": 0.40105010063189006,
          "title": "Engineering Atrium",
          "text": "The coffee is great and the environment is comfortable for the students!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.30262836199754517,
        "pitch": -0.26398516562226604,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.0220407276966483,
          "pitch": 0.00968768074451809,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.05498222711309353,
          "pitch": -0.007375584852283623,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7145103035401981,
          "pitch": 0.05457151126701554,
          "title": "Engineering Auditorium",
          "text": "This is the engineering auditorium where lectures are held. There are seats outside for students to study at as well as a cafe for a quick pick-me-up. Yum!"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
