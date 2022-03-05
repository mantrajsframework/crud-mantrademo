"use strict";

module.exports = {
    addItem: async (Mantra, itemKey, itemValue ) => {
        const db = Mantra.ComponentEntities("crudoperations").crudoperationsitems;

        return db.I().V( { 
            key: itemKey, 
            value: itemValue } ).R();
    },

    existsItemByKey: async (Mantra, itemKey) => {
        const db = Mantra.ComponentEntities("crudoperations").crudoperationsitems;

        return db.S().W("key=?",itemKey).Exists();
    },

    getAllItems: async ( Mantra ) => {
        const db = Mantra.ComponentEntities("crudoperations").crudoperationsitems;

        return db.S().R();
    },

    getCount: async (Mantra) => {
        return Mantra.ComponentEntities("crudoperations").crudoperationsitems.S().C();
    },

    removeItemByKey: async ( Mantra, itemKey ) => {
        const db = Mantra.ComponentEntities("crudoperations").crudoperationsitems;

        return db.D().W("key=?",itemKey).R();
    },

    updateItemValueByKey: async ( Mantra, itemKey, itemValue ) => {
        const db = Mantra.ComponentEntities("crudoperations").crudoperationsitems;

        return db.U().W("key=?", itemKey).V( { value: itemValue } ).R();
    }
}