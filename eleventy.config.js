const pluginWebC = require('@11ty/eleventy-plugin-webc')


/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(pluginWebC)

    return {
        templateFormats: [
            'webc',
            'html',
        ],
        htmlTemplateEngine: 'webc',
        dir: {
            input:      '_src',
            layouts:    '_layouts',
        }
    }
}
