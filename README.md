# Simple Mantra application to show basic CRUD operations

This simple Mantra app, shows the basics to write CRUD operations using a simple schema.

The application defines a component named "crudoperations".

Implements a command with the name of "crud-show-options", that shows a number of options to create, show, remove and update simple items:

After installing the application, you can invoke de command: 

```bash
$ mantrad crud-show-options
```

Then, a number of options will be shown:

```
1) Add item
2) Remove item by key
3) Update item by key
4) Show items
5) Show items count
6) Quit
```

The application defines a simple schema for the component crudoperations:

```json
{
    "entities" : [
        {
            "name" : "crudoperationsitems",
            "fields": [
                { "name" : "key", "type" : "string" },
                { "name" : "value", "type" : "string" },
                { "name" : "created", "type" : "datetime"}
            ]
        }
    ]
}
```

A a simple DAL object that can be invoked with these operations:

```js
await Mantra.dal.crudoperations.addItem( Mantra, itemKey, itemValue );
await Mantra.dal.crudoperations.removeItemByKey( Mantra, itemKey );
// ..
```