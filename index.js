class progressBar {
    constructor(element, initialValue = 0) {
        this.elementValue = element.querySelector('.progress-value');
        this.elementfill = element.querySelector('.progress-fill');
        
        this.setValue(initialValue);
    }

    setValue(newValue) {
        if(newValue<0){
            newValue=0;
        }
        if(newValue>100){
            newValue=100;
        }
        this.value = newValue;
        
        this.updateValue();
    }

    updateValue() {
        const percentage = this.value +'%';
        this.elementfill.style.width= percentage;
        this.elementValue.textContent = percentage;
    }

}

const pb1 = new progressBar (document.querySelector('.progress-bar'), 78);