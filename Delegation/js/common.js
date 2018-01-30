const list = document.getElementById('list');
const result = document.getElementById('result');

list.onclick = (e) => {
    const target = e.target;
    if(target.nodeName == "BUTTON") {
        e.target.parentNode.hidden = !e.target.parentNode.hidden
        // list.removeChild(target.parentNode);
    }
    result.innerHTML = target.innerHTML;
    result.removeChild(result.childNodes[1]);
}