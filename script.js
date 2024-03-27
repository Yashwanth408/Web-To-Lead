function onSubmitHandler(event){
    //event.preventDefault();
    let element = document.querySelector('#lead-date');
    let hiddenDate = document.querySelector('.hidden-date');
    console.log(element.value)
    
    hiddenDate.value = new Date(element.value).toLocaleDateString('en-IN');
    console.log(hiddenDate.value)

}