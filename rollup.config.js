
// import babelrc from "babelrc-rollup";
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import multiEntry from '@rollup/plugin-multi-entry';
import replace from "@rollup/plugin-replace";
import resolve from '@rollup/plugin-node-resolve';


export default {
    plugins: [
        json(),
        babel(),
        replace({
            "process.env.NODE_ENV": JSON.stringify( "development" )
        }),
        resolve({ preferBuiltins: true }),
        commonjs(),
        multiEntry()
    ],
    output: {

        format: "umd",
        name: "bundle",
        sourcemap: true
    },
    globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "prop-types": "PropTypes",
    },
    external: ["react", "react-dom", "prop-types"]
};
