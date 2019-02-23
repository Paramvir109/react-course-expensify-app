const path = require('path')

module.exports = {
    entry : './src/app.js',
    output : {
        path: path.join(__dirname,'public'),
        filename : 'bundle.js'
    },
    module : {
        rules :[{
            loader : 'babel-loader',
            test : /\.js$/, //Applied on all the files ending in .js()
            exclude : /node_modules/
        },
        {
            test : /\.s?css$/,//Making s optional(We load normalize.css as we,,)
            use : [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool : 'cheap-module-eval-source-map',//suitable for develpoment.Helps in debugging in chrome console
    devServer : {
        contentBase : path.join(__dirname,'public'), //This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
        historyApiFallback : true//This tells to always use index.html for all routes(client side routing)

    }//It also serves bundle.js from memory therefore even if we delete bundle.js physically it will catch it by itself
    //without generating the file
    
}
//babel-cli allows it to run from cmd
//babel-core allows it to run from tools like webpacks etc
//Loaders allow webpack to process other types of files and convert them into valid modules 
//that can be consumed by your application and added to the dependency graph.
