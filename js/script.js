function init()
{
  //----------------------------
  // ポリモーフィズムのテスト
  //----------------------------
  var mPoly = [];
  // JavaScriptはそもそも、異なるクラスでもすべて「オブジェクト」なので配列に格納できる
  mPoly.push(new Animal(0));
  mPoly.push(new Dog(20, 'John'));
  mPoly.push(new Dog(5));  // 引数不足でもOK
  mPoly[2].additonalfunc = function()
  {
    alert("mPoly[2] に後から足された関数");
  };
  // インスタンスごとに異なるオーバーライドされた関数を呼び出す
  mPoly[0].walk();
  mPoly[1].walk();
  mPoly[2].walk();
  // 子クラスでは実装していない関数を呼び出す
  mPoly[0].getOld();
  mPoly[1].getOld();
  mPoly[2].getOld();
  // 親クラスで追加した関数を呼び出す
  // mPoly[0].bow();        // ERROR
  mPoly[1].bow();           // bowbow
  mPoly[2].bow();           // bowbow

  // Developer Toolsで別のクラスのインスタンスとして認識されていることを確認
  console.log(mPoly);       // [Animal, Dog]

  mPoly[2].additonalfunc();
}

window.onload = init;
// window.addEventListener("load", function(){init();});
