//BetterDOM.js v1.0.0

function i(id) {

  function set(toSet) {
    
    document.getElementById(id).innerHTML = toSet;
    
  }
  
  function get() {
    
    return document.getElementById(id).innerHTML;
    
  }

}

function b(id) {

  function set(toSet) {
    
    document.body.innerHTML = toSet;
    
  }
  
  function get() {
    
    return document.body.innerHTML;
    
  }

}

function t() {

  function set(toSet) {
    
    document.title = toSet;
    
  }
  
  function get() {
    
    return document.title;
    
  }

}
