function myGetElementsByClassName(name) {
    var arr = [], document = this.document.body;
    var match = function(node) {
        do {
            if(node.nodeType == 1 && node.classList && node.classList.contains(node))
                arr.push(node);
            if(node.hasChildNodes())
                match(node.firstChild);
        }
        while (node = node.nextSibling);
    }
    match(document);
    return arr;
}
