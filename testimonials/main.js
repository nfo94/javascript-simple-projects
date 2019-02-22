(function () {
  let customers = [];
  let index = 0;

  function Customer(name, img, txt, star) {
    this.name = name;
    this.img = img;
    this.txt = txt;
    this.star = star;
  }

  function createCustomer(name, img, txt, star) {
    let fullImg = `img/img-${img}.jpg`;
    const customer = new Customer(name, fullImg, txt, star);
    customers.push(customer); 
  }

  createCustomer(
    'John',
    2, 
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsam totam eveniet voluptatibus".',
    '`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`'
  );

  createCustomer(
    'Bill',
    3, 
    '"Consectetur lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsam totam eveniet voluptatibus, dignissimos ipsam totam eveniet voluptatibus".',
    '`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`'
  );

  document.querySelectorAll('[class^="arrow"]').forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();
      if(e.target.classList.contains('arrow-left')){
        index--;
        document.querySelector('.customer__img').src = customers[index];
      }
    });
  });

})();