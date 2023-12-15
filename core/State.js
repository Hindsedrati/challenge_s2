function State() {
    this.actions = {};
    this.subscriptions = [];
    this.history = [];
}

State.prototype.subscribe = function (element, action, callback) {
    this.subscriptions[action] = this.subscriptions[action] || [];
    this.subscriptions[action].push(function (data) {
        callback.apply(element, data);
    });
}

State.prototype.dispatch = function (action, data) {
    data = data || [];

    this.history.push([action, data]);

    if (typeof this[action] === "function") {
        this[action].apply(this, data);
    }

    data.push(action);
    data.push(this);

    this.subscriptions[action] = this.subscriptions[action] || [];
    this.subscriptions[action].forEach(function (callback) {
        callback(data);
    });
}