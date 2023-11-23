function htmlToJson(element) {
    let obj = { tag: element.tagName.toLowerCase() };
    if (element.attributes.length > 0) {
        obj.attributes = Array.from(element.attributes).reduce((attrs, attribute) => {
            attrs[attribute.name] = attribute.value;
            return attrs;
        }, {});
    }
    if (element.childElementCount > 0) {
        obj.children = Array.from(element.children).map(child => htmlToJson(child));
    } else if (element.textContent) {
        obj.textContent = element.textContent;
    }
    return obj;
}

export const createElement = function createElement(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const json = htmlToJson(doc.body.firstChild);
    return json;
};

export class Component { }