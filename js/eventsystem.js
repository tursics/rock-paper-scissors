var EventSystem = {
    registry: [],

    addListener: function(name, func) {
        EventSystem.registry.push({
            id: name,
            func: func,
        });
    },

    removeListener: function(func) {
        EventSystem.registry = EventSystem.registry.filter(event => event.func !== func);
    },

    callListeners: function(name, params) {
        EventSystem.registry.filter(event => event.id === name).forEach(event => event.func(params));
    },
};