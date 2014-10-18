var Animal = function(_age)
{
  this.name = 'anonymous animal';
  this.age = _age;
  this.x = 0;
};

Animal.prototype.getOld = function()
{
  this.age++;
  console.log(this.name + " is " + this.age + " years old.");
};

Animal.prototype.walk = function()
{
  this.x += 1;
  console.log(this.name + " is here: x: " + this.x);
}