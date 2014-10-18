// ---------------------------
// Animal のメンバを継承している
// ---------------------------
var Dog = function(_age, _name)   // 引数の異なるコンストラクタ
{
  Animal.call(this, _age);        // 親クラスのコンストラクタを実行する。
                                  // callerを自分とすることで、プロトタイプ継承の最上位詰まり
                                  // Dogインスタンスそのものに、 Animalの age と x を展開する
  // Animal.apply(this, arguments); //　こういう書き方もアリ。
  this.super = Animal.prototype;  // 親クラスの関数を実行できるよう覚えておく
  
  if(_name != null) 
    this.name = _name;
  else
    this.name = "NamelessDog";

  this.y = 0;                     // 新しいメンバ変数を追加する
};
Dog.prototype = new Animal;       // 親クラスのプロトタイプに宣言された関数を、子クラスに展開する
                                  // メモ：初め、この記述は不要かと思ったが、
                                  // これが無いと、instanceOfDog.getOld() の呼び出しがエラーになる

// Dog.prototype.getOld = function() // 子クラスでは実装しないがそのまま使える(ハズ)
// {

// };

Dog.prototype.walk = function()   // メンバ関数のオーバーライド
{
  this.super.walk.call(this);     // 親クラスの同名関数も呼び出す
  this.y += 2;
  console.log(this.name + " is here: x: " + this.x + ", y: " + this.y);
};

Dog.prototype.bow = function()    // 独自の関数の実装
{
  console.log(this.name + " says bowbow");
};