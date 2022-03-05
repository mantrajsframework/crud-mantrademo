"use strict";

const NiceConsole = require("../lib/niceconsole");
const PromptOperations = require("../lib/promptoperations");

const CRUD_OPTIONS = [ "Add item", 
                       "Remove item by key", 
                       "Update item by key", 
                       "Show items",
                       "Show items count", 
                       "Quit" ];

module.exports = {
    "crud-show-options_description": "Shows options to run CRUD operations",
    "crud-show-options": async (Mantra) => {
        let opt;

        do {
            opt = await NiceConsole.questionWithOpts( "Choose option: ", CRUD_OPTIONS );

            switch( opt ) {
                case 0: await PromptOperations.addItem(Mantra); break;
                case 1: await PromptOperations.removeItem(Mantra); break;
                case 2: await PromptOperations.updateItem(Mantra); break;
                case 3: await PromptOperations.showItems(Mantra); break;
                case 4: await PromptOperations.showItemsCount(Mantra); break;
                case 5: NiceConsole.info("Bye!"); process.exit(0);
            }

            NiceConsole.newline();

        } while( opt !== 5 ); 
    }
}