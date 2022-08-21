class PageWelcome extends Page {    
    constructor() {
        super('welcome');

        this.next = this.div.querySelector('.next');

        this.next.addEventListener('click', this.onNext);
    }

    onNext() {
        UI.pageWelcome.hide();

        EventSystem.callListeners('ui.show.menu.main');
    }
}