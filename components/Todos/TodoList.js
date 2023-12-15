import MiniReact from "../../core/MiniReact.js";

export const TodoList = () => {
    return MiniReact.createElement(
        "div",
        {
            class: "mt-4 bg-gray-100 rounded p-4 shadow-lg max-w-md "
        },
        MiniReact.createElement(
            "form",
            {id: "addToDo"},
            MiniReact.createElement("label", {
                for: "description",
                class: "block text-gray-700 text-sm font-bold mb-2"
            }, "Description"),
            MiniReact.createElement("input", {
                id: "description",
                type: "text",
                class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }),
            MiniReact.createElement("div", {class: "flex justify-between gap-4"},
                MiniReact.createElement("button", {
                    id: "add",
                    class: "block w-full my-4 bg-yellow-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                }, "Add"),
                MiniReact.createElement("button", {
                    id: "removeAll",
                    class: "block w-full my-4 bg-yellow-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                }, "Remove All"),
            ),
        ),
        MiniReact.createElement("ul", {id: "todos", class: "divide-y divide-gray-200"}),
        MiniReact.createElement("script", {src: "/stores/ToDoStore.js"}),
    );
};