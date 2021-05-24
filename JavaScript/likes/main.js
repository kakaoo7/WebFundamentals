function buttonLiked(element) {
    console.log(element);
    let number = parseInt(element.previousSibling.previousSibling.firstChild.firstChild.nodeValue);
    number++
    element.previousSibling.previousSibling.firstChild.firstChild.nodeValue = number;
};