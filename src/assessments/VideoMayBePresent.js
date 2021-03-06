var Case = require('Case');
const DOM = require('DOM');
var VideoMayBePresent = {
  run: function (test) {

    var videoExtensions = ['webm', 'flv', 'ogv', 'ogg', 'avi', 'mov', 'qt', 'wmv', 'asf',
    'mp4', 'm4p', 'm4v', 'mpg', 'mp2', 'mpeg', 'mpg', 'mpe', 'mpv', 'm2v', '3gp', '3g2'];
    var videoHosts = ['//www.youtube.com/embed/', '//player.vimeo.com/video/'];

    test.get('scope').forEach(function (scope) {
      var hasCase = false; // Test if a case has been created

      // video elm is definately a video, and objects could be too.
      DOM.scry('object, video', scope).forEach(function (element) {
        hasCase = true;
        test.add(Case({
          element: element,
          status: 'cantTell'
        }));
      });

      // Links refering to files with an video extensions are probably video
      // though the file may not exist.
      DOM.scry('a[href]', scope).forEach(function (element) {
        var extension = element.getAttribute('href').split('.').pop();
        if (videoExtensions.indexOf(extension) !== -1) {
          hasCase = true;
          test.add(Case({
            element: element,
            status: 'cantTell'
          }));
        }
      });

      // some iframes with URL's of known video providers are also probably videos
      DOM.scry('iframe', scope).forEach(function (element) {
        if (element.src.indexOf(videoHosts[0]) !== -1 ||
        element.src.indexOf(videoHosts[1]) !== -1) {
          hasCase = true;
          test.add(Case({
            element: element,
            status: 'cantTell'
          }));
        }
      });

      // if no case was added, return inapplicable
      if (!hasCase) {
        test.add(Case({
          element: scope,
          status: 'inapplicable'
        }));
      }

    });
  },

  meta: {
    testability: 1,
    title: {
      en: 'Video or object uses a link that points to a file with a video extension',
      nl: 'Video of object met een link naar een bestand met een video extensie'
    },
    description: {
      en: '',
      nl: ''
    },
    guidelines: [

    ],
    tags: [
      'link',
      'video'
    ]
  }
};
module.exports = VideoMayBePresent;
