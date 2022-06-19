class progressBar {
    constructor(element, initialValue = 0) {
        this.elementValue = element.querySelector('.progress-value');
        this.elementfill = element.querySelector('.progress-fill');
        console.log(this.elementValue);
        console.log(this.elementfill);
    }

}

new progressBar (document.querySelector('.progress-bar'));