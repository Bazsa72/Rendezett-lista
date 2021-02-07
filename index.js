function f1() {
    let hosz = document.getElementsByTagName('li').length;
    let rand = Math.floor(Math.random() * (100-1) + 1);
    let list = document.getElementById('list');
    let volt = false;
    for(let i = 0; i < hosz; i++) {
        volt = false;
        if (hosz != 0) {
            if (+(rand) < parseInt(list.children[i].innerText)) {
                let x = document.createElement('li');
                x.innerHTML = rand,
                list.insertBefore(x,list.childNodes[i]);
                volt = true;
                break;
            }
        }
    }
    if (volt == false) {
        let x = document.createElement('li');
        x.innerHTML = rand;
        document.getElementById('list').appendChild(x);
    }
}