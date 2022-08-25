class PageWelcome extends Page {    
    constructor() {
        super('welcome');

        this.next = this.div.querySelector('.next');

        this.next.addEventListener('click', this.onNext);
    }

    onNext() {
        var classList = UI.pageWelcome.next.classList;
        classList.add('do');

        window.setTimeout(function() {
            UI.pageWelcome.hide();
            classList.remove('do');

            EventSystem.callListeners('ui.show.menu.main');
        }, 400);
    }
}