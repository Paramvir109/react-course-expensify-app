const path = require('path');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');

module.exports =  (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

   return{
        entry : './src/app.js',
        output : {
            path: path.join(__dirname,'public','dist'),
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
                use : CSSExtract.extract({
                    //We write this way to use source maps for css files
                    use : [
                        {
                            loader : 'css-loader',
                            options : {
                                sourceMap : true
                            }
                        },
                        {
                            loader : 'sass-loader',
                            options : {
                                sourceMap : true
                            }
                        }
                    ]
                })
            }]
        },
        plugins : [CSSExtract],

        //suitable for develpoment.Helps in debugging in chrome console
        devtool : isProduction? 'source-map' : 'inline-source-map',
        devServer : {
            contentBase : path.join(__dirname,'public'), //This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
            historyApiFallback : true,//This tells to always use index.html for all routes(client side routing)
            publicPath : '/dist/'

        }//It also serves bundle.js from memory therefore even if we delete bundle.js physically it will catch it by itself
        //without generating the file
    }
    
}
//babel-cli allows it to run from cmd
//babel-core allows it to run from tools like webpacks etc
//Loaders allow webpack to process other types of files and convert them into valid modules 
//that can be consumed by your application and added to the dependency graph.
