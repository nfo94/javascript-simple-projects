(function () {
  let customers = [];
  let index = 0;

  function Customer(name, img, txt) {
    this.name = name;
    this.img = img;
    this.txt = txt;
  }

  function createCustomer(name, img, txt) {
    let fullImg = `img/img-${img}.jpg`;
    const customer = new Customer(name, fullImg, txt);
    customers.push(customer); 
  }

  createCustomer(
    'Olenna',
    1, 
    '"Ipsum lorem dolor sit amet consectetur adipisicing elit. Dignissimos ipsam totam eveniet voluptatibus enim? Dolores ea, velit commodi magni sequi autem rerum, odit exercitationem iste explicabo, culpa suscipit assumenda cum".'
  );

  createCustomer(
    'John',
    2, 
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsam totam eveniet voluptatibus".'
  );

  createCustomer(
    'Bill',
    3, 
    '"Consectetur lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsam totam eveniet voluptatibus, dignissimos ipsam totam eveniet voluptatibus, dignissimos ipsam totam eveniet voluptatibus".',
  );

  document.querySelectorAll('[class^="arrow"]').forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();
      if(e.target.classList.contains('arrow-left')){
        if(index === 0){
          index = customers.length;
        }
        index--;
        document.querySelector('.customer__name').textContent = customers[index].name;
        document.querySelector('.customer__img').src = customers[index].img;
        document.querySelector('.customer__txt').textContent = customers[index].txt;
      }

      if(e.target.classList.contains('arrow-right')){
        if(index === (customers.length - 1)){
          index = -1;
        }
        index++;
        document.querySelector('.customer__name').textContent = customers[index].name;
        document.querySelector('.customer__img').src = customers[index].img;
        document.querySelector('.customer__txt').textContent = customers[index].txt;
      }
    });
  });

})();