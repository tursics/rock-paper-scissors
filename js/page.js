class Page {    
    constructor(id) {
        this.id = id;
        this.div = document.getElementById(id);
    }

    show() {
        this.div.classList.remove('hidden');
    }

    hide() {
        this.div.classList.add('hidden');
    }

    get visible() {
        return !this.div.classList.contains('hidden');
    }
}