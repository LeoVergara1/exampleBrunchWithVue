// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']},
};

exports.npm = {
  enabled: true,
  styles: {
    bootstrap: ['dist/css/bootstrap.css'],
  },
  globals: {
  },
  aliases: {
    'vue': 'vue/dist/vue.common.js'
  }
};
