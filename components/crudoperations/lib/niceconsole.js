"use strict";

const Chalk = require("chalk");
const Readline = require("readline");

module.exports = {
    info(msg, withDate) {
        ShowMessage( msg, 'green', withDate );
    },

    warning(msg, withDate) {
        ShowMessage( msg, 'orange', withDate );
    },

    error(msg, withDate) {
        ShowMessage( msg, 'red', withDate );
    },

    async question(Mantra, msg, allowEmpty) {        
        const ae = typeof allowEmpty == 'boolean' ? allowEmpty : true;        
        let answer = await Question(Mantra, msg);

        while( !ae && answer == "" ) {
            answer = await Question(Mantra, msg);
        }

        return answer;
    },
    
    newline() {
        console.log('');
    },

    async questionWithOpts( Mantra, msg, opts ) {
        let i = 0;

        for( const opt of opts ) {
            console.log( Chalk.keyword('white')(`${++i}) ${opt}`) );
        }

        let optSelected = parseInt( await Question(Mantra, msg) );

        while( !(optSelected > 0 && optSelected < opts.length+1) ) {
            console.log( Chalk.keyword('orange')(`Select between ${1} and ${opts.length}`) );

            optSelected = parseInt( await Question(Mantra, msg) );
        }

        return optSelected-1;
    }
}

function ShowMessage( msg, color ) {
    console.log( `${Chalk.keyword(color)(msg)}` );
}

async function Question(Mantra, msg) {

    return new Promise( (resolve,reject) => {        
        Mantra.Utils.ReadLineInterface.question(msg, (answer) => {
            resolve(answer);
        } );
    })
}