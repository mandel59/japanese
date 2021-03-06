// This lets us require files with JSX/ES6 in them
require('babel-core/register')

var path = require('path')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var getConfig = require('hjs-webpack')
var sizeOf = require('image-size')
var merge = require('lodash.merge')
var Layout = require('./src/components/Layout').default
var Index = require('./src/pages/index').default
var data = require('./src/data')
var ogImage = sizeOf('./build/media/og-image.png')
var pkg = require('./package.json')

var hjsConfig = getConfig({
  in: 'src/app.js',
  out: 'build',
  clearBeforeBuild: '!(css|fonts|media|favicon.ico|apple-touch-icon.png|AUTH)',
  html: function (context) {
    // Use React's `renderToString` method to return an HTML string from our
    // components (dynamic values can be passed into `createElement` too)
    var renderPage = function (page) {
      return context.defaultTemplate({
        html: '<div id="js-root" class="no-js">' + (page ? ReactDOMServer.renderToString(React.createElement(Layout, {}, React.createElement(page))) : '') + '</div>',
        title: data.title,
        lang: 'en',
        publicPath: '',
        metaTags: {
          description: data.description,
          'og:url': data.url,
          'og:title': data.og.title || data.title,
          'og:description': data.og.description || data.description,
          'og:site_name': data.distributor.name,
          'article:author': data.author.name,
          'twitter:creator': '@' + data.author.twitter,
          'twitter:site': '@' + data.distributor.twitter,
          'twitter:card': 'summary_large_image',
          'twitter:image': data.url + '/media/og-image.png?' + pkg.version,
          'og:image': data.url + '/media/og-image.png',
          'og:image:type': 'image/png',
          'og:image:width': ogImage.width,
          'og:image:height': ogImage.height,
          // 'apple-mobile-web-app-title': data.name
        }
      })
    }

    return {
      '200.html': renderPage(),
      'index.html': renderPage(Index)
      // , 'contributing.html': renderPage(Contributing)
    }
  }
})

// Only needed if custom contributing page is used
// var additionalLoaders = [
//   {
//      test: /\.md$/,
//      loader: 'html!markdown'
//   }
// ]
// hjsConfig.module.loaders.push(additionalLoaders)

module.exports = hjsConfig
