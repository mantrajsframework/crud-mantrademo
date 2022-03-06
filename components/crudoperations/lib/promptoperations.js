"use strict";

module.exports = {
    addItem: async (Mantra) => {
        const itemKey = await getKey(Mantra);

        const itemValue = await getValue(Mantra);
    
        const exists = await Mantra.dal.crudoperations.existsItemByKey( Mantra, itemKey );
        
        if ( exists ) {
            Mantra.Utils.Console.warning(`Already exists an item with key ${itemKey}`, false);
        } else {
            const newItemId = await Mantra.dal.crudoperations.addItem( Mantra, itemKey, itemValue );
            Mantra.Utils.Console.info( `New item added with ID ${newItemId}`, false );
        }
    },
    
    removeItem: async (Mantra) => {
        const itemKey = await getKey(Mantra);
        const exists = await Mantra.dal.crudoperations.existsItemByKey( Mantra, itemKey );
        
        if ( !exists ) {
            Mantra.Utils.Console.warning(`No exists item with key ${itemKey}`, false);
        } else {
            await Mantra.dal.crudoperations.removeItemByKey( Mantra, itemKey );
            Mantra.Utils.Console.info("Item removed");
        }
    },
    
    updateItem: async (Mantra) => {
        const itemKey = await getKey(Mantra);
        const itemValue = await getValue(Mantra);
    
        const exists = await Mantra.dal.crudoperations.existsItemByKey( Mantra, itemKey );
        
        if ( !exists ) {
            Mantra.Utils.Console.warning(`No exists item with key ${itemKey}`, false);
        } else {
            await Mantra.dal.crudoperations.updateItemValueByKey( Mantra, itemKey, itemValue );
            Mantra.Utils.Console.info("Item updated", false);
        }
    },
    
    showItems: async (Mantra) => {
        const allItems = await Mantra.dal.crudoperations.getAllItems( Mantra );
    
        for( const item of allItems ) {
            Mantra.Utils.Console.info( `Key: '${item.key}', value: '${item.value}', false`);
        }
    },
    
    showItemsCount: async (Mantra) => {
        const itemsCount = await Mantra.dal.crudoperations.getCount( Mantra );
    
        Mantra.Utils.Console.info( `${itemsCount} number of items`, false);
    }
}

async function getKey(Mantra) {
    return Mantra.Utils.Console.question( "Key: " );
}

async function getValue(Mantra) {
    return Mantra.Utils.Console.question( "Value: " );
}