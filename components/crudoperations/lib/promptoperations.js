"use strict";

const NiceConsole = require("../lib/niceconsole");

module.exports = {
    addItem: async (Mantra) => {
        const itemKey = await getKey(Mantra);
        const itemValue = await getValue(Mantra);
    
        const exists = await Mantra.dal.crudoperations.existsItemByKey( Mantra, itemKey );
        
        if ( exists ) {
            NiceConsole.warning(`Already exists an item with key ${itemKey}`);
        } else {
            const newItemId = await Mantra.dal.crudoperations.addItem( Mantra, itemKey, itemValue );
            NiceConsole.info( `New item added with ID ${newItemId}` );
        }
    },
    
    removeItem: async (Mantra) => {
        const itemKey = await getKey(Mantra);
        const exists = await Mantra.dal.crudoperations.existsItemByKey( Mantra, itemKey );
        
        if ( !exists ) {
            NiceConsole.warning(`No exists item with key ${itemKey}`);
        } else {
            await Mantra.dal.crudoperations.removeItemByKey( Mantra, itemKey );
            NiceConsole.info("Item removed");
        }
    },
    
    updateItem: async (Mantra) => {
        const itemKey = await getKey(Mantra);
        const itemValue = await getValue(Mantra);
    
        const exists = await Mantra.dal.crudoperations.existsItemByKey( Mantra, itemKey );
        
        if ( !exists ) {
            NiceConsole.warning(`No exists item with key ${itemKey}`);
        } else {
            await Mantra.dal.crudoperations.updateItemValueByKey( Mantra, itemKey, itemValue );
            NiceConsole.info("Item updated");
        }
    },
    
    showItems: async (Mantra) => {
        const allItems = await Mantra.dal.crudoperations.getAllItems( Mantra );
    
        for( const item of allItems ) {
            NiceConsole.info( `Key: '${item.key}', value: '${item.value}'`);
        }
    },
    
    showItemsCount: async (Mantra) => {
        const itemsCount = await Mantra.dal.crudoperations.getCount( Mantra );
    
        NiceConsole.info( `${itemsCount} number of items`);
    }
}

async function getKey(Mantra) {
    return NiceConsole.question( Mantra, "Key: " );
}

async function getValue(Mantra) {
    return NiceConsole.question( Mantra, "Value: " );
}